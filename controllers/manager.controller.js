import BaseError from "../errors/base.error.js";
import { prisma } from "../lib/prisma.js";
class Manager {
  async createNews(req, res, next) {
    try {
      const { title, description } = req.body;
      const { role } = req.student;
      if (role !== "admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const news = await prisma.news.create({
        data: {
          title,
          description,
          pictureUrl: req.body.pictureUrl ? req.body.pictureUrl : "",
        },
      });
      return res.status(201).json(news);
    } catch (error) {
      next(error);
    }
  }
  async getAllNews(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.params;
      if (!studentId) {
        res.status(400).json({ error: "News Id is required!" });
        throw BaseError.BadRequest("News Id is required!");
      }
      const updatedStudent = await prisma.student.update({
        where: {
          id: newsId,
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
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
      if (role !== "admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const fields = [
        req.body.title,
        req.body.description,
        req.body.checked,
        req.body.point,
        req.body.deadline,
        req.body.studentId,
      ];
      if (fields.some((field) => !field)) {
        return res.status(400).json({ error: "Please fill all the fileds!" });
      }

      const homework = await prisma.homework.create({
        data: {
          studentId: fields[5],
          title: fields[0],
          description: fields[1],
          checked: fields[2],
          point: parseInt(fields[3]),
          deadline: new Date(fields[4]),
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
      const { role, id } = req.student;
      if (role !== "admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.params;
      const homework = await prisma.homework.findFirst({
        where: {
          studentId: studentId ? studentId : id,
        },
        include: {
          student: true,
          studentActivity: true,
        },
      });
      if (!homework) {
        return res
          .status(400)
          .json({ error: "Homework with this student ID not found!" });
      }
      return res.status(200).json({ homework });
    } catch (error) {
      next(error);
    }
  }
  async getSingleHomework(req, res, next) {
    try {
      const { role, id } = req.student;
      if (role !== "admin") {
        res.status(403).json({ error: "Forbidden" });
        throw BaseError.Forbidden();
      }
      const { studentId } = req.params;
      const homework = await prisma.homework.findFirst({
        where: {
          studentId: studentId ? studentId : id,
        },
        include: {
          student: true,
          studentActivity: true,
        },
      });
      if (!homework) {
        return res
          .status(400)
          .json({ error: "Homework with this student ID not found!" });
      }
      return res.status(200).json({ homework });
    } catch (error) {
      next(error);
    }
  }
  async updateGroup(req, res, next) {
    try {
      const { role } = req.student;
      if (role !== "admin") {
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
      if (role !== "admin") {
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
}

export default new Manager();
