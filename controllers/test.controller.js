import { prisma } from "../lib/prisma.js";
import BaseError from "../errors/base.error.js";

class TestController {
  // Admin: Create tests for multiple days
  async createBatchTests(req, res, next) {
    try {
      if (req.student.role !== "org::admin") {
        return next(BaseError.Forbidden());
      }

      const { tests } = req.body; // Array of { title, scheduledDate, questions: [{ text, points, options, answer }] }
      
      if (!Array.isArray(tests)) {
        return next(BaseError.BadRequest("Expected an array of tests"));
      }

      const createdTests = [];
      for (const testData of tests) {
        const { title, scheduledDate, questions } = testData;
        
        // Calculate total points
        const allPoints = questions.reduce((sum, q) => sum + (Number(q.points) || 0), 0);

        const testDate = new Date(scheduledDate);
        testDate.setHours(0, 0, 0, 0);

        const test = await prisma.test.create({
          data: {
            title,
            scheduledDate: testDate,
            allPoints,
            questions: {
              create: questions.map(q => ({
                text: q.text,
                points: Number(q.points),
                options: q.options,
                answer: q.answer
              }))
            }
          },
          include: { questions: true }
        });
        createdTests.push(test);
      }

      res.status(201).json(createdTests);
    } catch (error) {
      if (error.code === 'P2002') {
        return next(BaseError.BadRequest("A test is already scheduled for one of the selected dates."));
      }
      next(error);
    }
  }

  // Student: Get today's test
  async getDailyTest(req, res, next) {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const test = await prisma.test.findUnique({
        where: { scheduledDate: today },
        include: { questions: true }
      });

      if (!test) {
        return res.status(404).json({ message: "No test scheduled for today." });
      }

      // Check if already submitted
      const submission = await prisma.submission.findFirst({
        where: { 
          testId: test.id,
          studentId: req.student.id
        }
      });

      res.status(200).json({ ...test, submitted: !!submission, submission });
    } catch (error) {
      next(error);
    }
  }

  // Student: Submit answers
  async submitTest(req, res, next) {
    try {
      const { testId, answers } = req.body; // answers: { [questionId]: selectedOption }
      const studentId = req.student.id;

      if (!testId || !answers) {
        return next(BaseError.BadRequest("Missing testId or answers"));
      }

      const test = await prisma.test.findUnique({
        where: { id: testId },
        include: { questions: true }
      });

      if (!test) {
        return next(BaseError.BadRequest("Test not found"));
      }

      // Check for existing submission
      const existing = await prisma.submission.findFirst({
        where: { testId, studentId }
      });

      if (existing) {
        return next(BaseError.BadRequest("You have already submitted this test"));
      }

      let score = 0;
      test.questions.forEach(q => {
        if (answers[q.id] === q.answer) {
          score += q.points;
        }
      });

      const submission = await prisma.submission.create({
        data: {
          testId,
          studentId,
          score
        }
      });

      res.status(201).json(submission);
    } catch (error) {
      next(error);
    }
  }

  // Leaderboard (Ratings)
  async getLeaderboard(req, res, next) {
    try {
      const leaderboard = await prisma.student.findMany({
        select: {
          id: true,
          fullName: true,
          submits: {
            select: { score: true }
          }
        }
      });

      const formatted = leaderboard.map(s => ({
        id: s.id,
        fullName: s.fullName,
        totalScore: s.submits.reduce((sum, sub) => sum + sub.score, 0),
        testsCompleted: s.submits.length
      })).sort((a, b) => b.totalScore - a.totalScore);

      res.status(200).json(formatted);
    } catch (error) {
      next(error);
    }
  }

  // Admin: Get all tests
  async getAllTests(req, res, next) {
    try {
      if (req.student.role !== "org::admin") {
        return next(BaseError.Forbidden());
      }
      const tests = await prisma.test.findMany({
        include: { questions: true },
        orderBy: { scheduledDate: 'desc' }
      });
      res.status(200).json(tests);
    } catch (error) {
      next(error);
    }
  }
}

export default new TestController();
