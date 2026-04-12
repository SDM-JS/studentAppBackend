import BaseError from "../errors/base.error.js";
import { prisma } from "../lib/prisma.js";
class Manager {
  async createNews(req, res, next) {
    try {
      console.log("Salom23");
      const { title, description } = req.body;
      const { role } = req.student;

      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const news = await prisma.news.create({
        data: {
          title,
          description,
          pictureUrl: req.body.pictureUrl || "",
          videoId: req.body.videoId || "",
        },
      });
      return res.status(201).json(news);
    } catch (error) {
      console.log(error);
      // next(error);
    }
  }
  async getAllNews(req, res, next) {
    try {
      const allNews = await prisma.news.findMany();
      return res.json({ news: allNews });
    } catch (error) {
      next(error);
      // console.log(error);
    }
  }
  async getLatestNews(req, res, next) {
    try {
      const latestNews = await prisma.news.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return res.status(200).json({ news: latestNews[0] });
    } catch (error) {
      next(error);
    }
  }
  async deleteNews(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { newsId } = req.params;
      if (!newsId) {
        res.status(400).json({ error: "News Id is required!" });
        throw BaseError.BadRequest("News Id is required!");
      }
      await prisma.news.delete({
        where: {
          id: newsId,
        },
      });
      return res.status(200).json({ message: "News deleted successfully!" });
    } catch (error) {
      next(error);
    }
  }
  async updateNews(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { newsId } = req.params;
      if (!newsId) {
        res.status(400).json({ error: "News Id is required!" });
        throw BaseError.BadRequest("News Id is required!");
      }
      const updatedNews = await prisma.news.update({
        where: {
          id: newsId,
        },
        data: {
          ...req.body,
        },
      });
      return res
        .status(200)
        .json({ updatedNews, message: "News updated successfully!" });
    } catch (error) {
      next(error);
    }
  }
  // Student based routes
  async getAllStudents(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const students = await prisma.student.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return res.json({ students });
    } catch (error) {
      next(error);
    }
  }
  async deleteStudent(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.params;
      if (!studentId) {
        res.status(400).json({ error: "Student Id is required!" });
        throw BaseError.BadRequest("Student Id is required!");
      }
      await prisma.student.delete({
        where: {
          id: studentId,
        },
      });
      return res.status(304).json({ message: "Student deleted successfully!" });
    } catch (error) {
      next(error);
    }
  }
  async updateStudent(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.params;
      if (!studentId) {
        res.status(400).json({ error: "Student Id is required!" });
        throw BaseError.BadRequest("Student Id is required!");
      }
      const updatedStudent = await prisma.student.update({
        where: {
          id: studentId,
        },
        data: {
          ...req.body,
        },
      });
      return res
        .status(200)
        .json({ updatedStudent, message: "Student updated successfully!" });
    } catch (error) {
      next(error);
    }
  }
  async getSingleStudent(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.params;

      if (!studentId) {
        return res.status(400).json({ error: "Student ID is required!" });
      }
      const student = await prisma.student.findFirst({
        where: {
          id: studentId,
        },
      });
      if (!student) {
        return res
          .status(400)
          .json({ error: "Student with this ID not found!" });
      }
      return res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  }
  // Course Functions
  async createCourse(req, res, next) {
    try {
      const { name, description } = req.body;
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const fields = [name, description];
      if (fields.some((field) => !field)) {
        return res.status(400).json({ error: "Please fill all the fileds!" });
      }
      const course = await prisma.course.create({
        data: {
          name,
          description,
        },
      });
      return res
        .status(201)
        .json({ course, message: "Course created successfully!" });
    } catch (error) {
      next(error);
    }
  }
  async getAllCourses(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const courses = await prisma.course.findMany({
        orderBy: { createdAt: "desc" },
      });
      return res.json({ courses }).status(200);
    } catch (error) {
      next(error);
    }
  }
  async getSingleCourse(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }

      const { courseId } = req.params;
      if (!courseId) {
        return res.status(400).json({ error: "Course Id is required!" });
      }
      const course = await prisma.course.findFirst({
        where: {
          id: courseId,
        },
        include: {
          groups: true,
        },
      });
      if (!course) {
        return res
          .status(400)
          .json({ error: "Course with this ID not found!" });
      }
      return res.status(200).json({ course });
    } catch (error) {
      next(error);
    }
  }
  async deleteCourse(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { courseId } = req.params;
      if (!courseId) {
        return res.status(400).json({ error: "Course Id is required!" });
      }
      const course = await prisma.course.delete({
        where: {
          id: courseId,
        },
      });
      if (!course) {
        return res
          .status(400)
          .json({ error: "Course with this ID not found!" });
      }
      return res.status(200).json({ message: "Course deleted successfully!" });
    } catch (error) {
      next(error);
    }
  }
  async updateCourse(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { courseId } = req.params;
      if (!courseId) {
        return res.status(400).json({ error: "Course Id is required!" });
      }
      const course = await prisma.course.update({
        where: {
          id: courseId,
        },
        data: {
          ...req.body,
        },
      });
      if (!course) {
        return res
          .status(400)
          .json({ error: "Course with this ID not found!" });
      }
      return res.status(200).json({ message: "Course updated successfully!" });
    } catch (error) {
      next(error);
    }
  }
  // Group Functions
  async createGroup(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const fields = [req.body.name, req.body.courseId];
      console.log(req.body);
      if (fields.some((field) => !field)) {
        return res.status(400).json({ error: "Please fill all the fileds!" });
      }

      const group = await prisma.group.create({
        data: {
          courseId: fields[1],
          name: fields[0],
        },
      });
      return res
        .status(201)
        .json({ message: "Group created successfully!", group });
    } catch (error) {
      next(error);
    }
  }
  async getAllGroups(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const groups = await prisma.group.findMany();
      return res.status(200).json({ groups });
    } catch (error) {
      next(error);
    }
  }
  async getSingleGroup(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { groupId } = req.params;
      if (!groupId) {
        return res.status(400).json({ error: "Group ID is required!" });
      }
      const group = await prisma.group.findFirst({
        where: {
          id: groupId,
        },
        include: {
          course: true,
          students: true,
        },
      });
      if (!group) {
        return res.status(400).json({ error: "Group with this ID not found!" });
      }
      return res.status(200).json({ group });
    } catch (error) {
      next(error);
    }
  }
  async updateGroup(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { groupId } = req.params;
      if (!groupId) {
        return res.status(400).json({ error: "Group ID is required!" });
      }
      const group = await prisma.group.update({
        where: {
          id: groupId,
        },
        data: {
          ...req.body,
        },
      });
      if (!group) {
        return res
          .status(400)
          .json({ error: "Course with this ID not found!" });
      }
    } catch (error) {
      next(error);
    }
  }
  async deleteGroup(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { groupId } = req.params;
      if (!groupId) {
        return res.status(400).json({ error: "Group Id is required!" });
      }
      const group = await prisma.group.delete({
        where: {
          id: groupId,
        },
      });
      if (!group) {
        return res.status(400).json({ error: "Group with this ID not found!" });
      }
      return res.status(200).json({ message: "Group deleted successfully!" });
    } catch (error) {
      next(error);
    }
  }
  // Homework Functions
  async createHomework(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const fields = {
        title: req.body.title,
        description: req.body.description,
        deadline: req.body.deadline,
        studentId: req.body.studentId,
      };
      if (
        Object.values(fields).some(
          (field) => field === undefined || field === "",
        )
      ) {
        return res.status(400).json({ error: "Please fill all the fileds!" });
      }

      const homework = await prisma.homework.create({
        data: {
          studentId: fields.studentId,
          title: fields.title,
          description: fields.description,
          checked: req.body.checked !== undefined ? req.body.checked : false,
          point: req.body.point ? parseInt(req.body.point) : null,
          deadline: new Date(fields.deadline),
        },
      });
      return res
        .status(201)
        .json({ message: "Homework created successfully!", homework });
    } catch (error) {
      next(error);
    }
  }
  async getAllHomeworks(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.query;
      const whereClause = studentId ? { studentId } : {};
      const homeworks = await prisma.homework.findMany({
        where: whereClause,
        include: {
          student: true,
          studentActivity: true,
        },
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json({ homeworks });
    } catch (error) {
      next(error);
    }
  }
  async getSingleHomework(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { homeworkId } = req.params;
      const homework = await prisma.homework.findFirst({
        where: {
          id: homeworkId,
        },
        include: {
          student: true,
          studentActivity: true,
        },
      });
      if (!homework) {
        return res
          .status(400)
          .json({ error: "Homework with this ID not found!" });
      }
      return res.status(200).json({ homework });
    } catch (error) {
      next(error);
    }
  }
  async updateHomework(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { homeworkId } = req.params;
      if (!homeworkId) {
        return res.status(400).json({ error: "Homework ID is required!" });
      }

      const { deadline, point, ...rest } = req.body;
      const updateData = { ...rest };
      if (deadline) updateData.deadline = new Date(deadline);
      if (point !== undefined) updateData.point = parseInt(point);

      const homework = await prisma.homework.update({
        where: { id: homeworkId },
        data: updateData,
      });
      return res
        .status(200)
        .json({ message: "Homework updated successfully!", homework });
    } catch (error) {
      next(error);
    }
  }
  async deleteHomework(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { homeworkId } = req.params;
      if (!homeworkId) {
        return res.status(400).json({ error: "Homework ID is required!" });
      }
      await prisma.homework.delete({
        where: { id: homeworkId },
      });
      return res
        .status(200)
        .json({ message: "Homework deleted successfully!" });
    } catch (error) {
      next(error);
    }
  }

  // StudentActivity Functions
  async createStudentActivity(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId, rating } = req.body;
      if (!studentId || !rating) {
        return res
          .status(400)
          .json({ error: "Please fill all required fields!" });
      }
      const studentActivity = await prisma.studentActivity.create({
        data: {
          studentId,
          rating,
        },
      });
      return res.status(201).json({
        message: "StudentActivity created successfully!",
        studentActivity,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAllStudentActivities(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.query;
      const whereClause = studentId ? { studentId } : {};
      const studentActivities = await prisma.studentActivity.findMany({
        where: whereClause,
        include: {
          student: true,
          tasks: true,
        },
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json({ studentActivities });
    } catch (error) {
      next(error);
    }
  }
  async getSingleStudentActivity(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { activityId } = req.params;
      const studentActivity = await prisma.studentActivity.findFirst({
        where: { id: activityId },
        include: {
          student: true,
          tasks: true,
        },
      });
      if (!studentActivity) {
        return res.status(400).json({ error: "StudentActivity not found!" });
      }
      return res.status(200).json({ studentActivity });
    } catch (error) {
      next(error);
    }
  }
  async updateStudentActivity(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { activityId } = req.params;
      if (!activityId) {
        return res.status(400).json({ error: "Activity ID is required!" });
      }
      const studentActivity = await prisma.studentActivity.update({
        where: { id: activityId },
        data: {
          ...req.body,
        },
      });
      return res.status(200).json({
        message: "StudentActivity updated successfully!",
        studentActivity,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteStudentActivity(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "org::admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { activityId } = req.params;
      if (!activityId) {
        return res.status(400).json({ error: "Activity ID is required!" });
      }
      await prisma.studentActivity.delete({
        where: { id: activityId },
      });
      return res
        .status(200)
        .json({ message: "StudentActivity deleted successfully!" });
    } catch (error) {
      next(error);
    }
  }
}

export default new Manager();
