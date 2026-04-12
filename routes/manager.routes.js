import managerController from "../controllers/manager.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import express from "express";

const managerRoutes = express.Router();

managerRoutes.post("/api/news", authMiddleware, managerController.createNews);

managerRoutes.get("/api/me", authMiddleware, managerController.getInfo);

managerRoutes.get(
  "/api/get-all-news",
  authMiddleware,
  managerController.getAllNews,
);

managerRoutes.get(
  "/api/get-latest-news",
  authMiddleware,
  managerController.getLatestNews,
);

managerRoutes.put(
  "/api/news/:newsId",
  authMiddleware,
  managerController.updateNews,
);

managerRoutes.delete(
  "/api/news/:newsId",
  authMiddleware,
  managerController.deleteNews,
);

managerRoutes.get(
  "/api/students",
  authMiddleware,
  managerController.getAllStudents,
);
managerRoutes.delete(
  "/api/students/:studentId",
  authMiddleware,
  managerController.deleteStudent,
);

managerRoutes.put(
  "/api/students/:studentId",
  authMiddleware,
  managerController.updateStudent,
);

managerRoutes.get(
  "/api/students/:studentId",
  authMiddleware,
  managerController.getSingleStudent,
);

// COURSE BASED ROUTES

managerRoutes.post(
  "/api/courses",
  authMiddleware,
  managerController.createCourse,
);
managerRoutes.get(
  "/api/courses",
  authMiddleware,
  managerController.getAllCourses,
);

managerRoutes.get(
  "/api/courses/:courseId",
  authMiddleware,
  managerController.getSingleCourse,
);
managerRoutes.delete(
  "/api/courses/:courseId",
  authMiddleware,
  managerController.deleteCourse,
);

managerRoutes.put(
  "/api/courses/:courseId",
  authMiddleware,
  managerController.updateCourse,
);

// GROUP BASED ROUTES
managerRoutes.post(
  "/api/groups",
  authMiddleware,
  managerController.createGroup,
);

managerRoutes.get(
  "/api/groups",
  authMiddleware,
  managerController.getAllGroups,
);

managerRoutes.get(
  "/api/groups/:groupId",
  authMiddleware,
  managerController.getSingleGroup,
);

managerRoutes.put(
  "/api/groups/:groupId",
  authMiddleware,
  managerController.updateGroup,
);

managerRoutes.delete(
  "/api/groups/:groupId",
  authMiddleware,
  managerController.deleteGroup,
);

// HOMEWORK BASED ROUTES
managerRoutes.post(
  "/api/homeworks",
  authMiddleware,
  managerController.createHomework,
);
managerRoutes.get(
  "/api/homeworks",
  authMiddleware,
  managerController.getAllHomeworks,
);
managerRoutes.get(
  "/api/homeworks/:homeworkId",
  authMiddleware,
  managerController.getSingleHomework,
);
managerRoutes.put(
  "/api/homeworks/:homeworkId",
  authMiddleware,
  managerController.updateHomework,
);
managerRoutes.delete(
  "/api/homeworks/:homeworkId",
  authMiddleware,
  managerController.deleteHomework,
);

// STUDENT ACTIVITY BASED ROUTES
managerRoutes.post(
  "/api/student-activities",
  authMiddleware,
  managerController.createStudentActivity,
);
managerRoutes.get(
  "/api/student-activities",
  authMiddleware,
  managerController.getAllStudentActivities,
);
managerRoutes.get(
  "/api/student-activities/:activityId",
  authMiddleware,
  managerController.getSingleStudentActivity,
);
managerRoutes.put(
  "/api/student-activities/:activityId",
  authMiddleware,
  managerController.updateStudentActivity,
);
managerRoutes.delete(
  "/api/student-activities/:activityId",
  authMiddleware,
  managerController.deleteStudentActivity,
);

export default managerRoutes;
