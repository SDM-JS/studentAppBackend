import express from "express";
import managerController from "../controllers/manager.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const tasksRoutes = express.Router();

// Tasks CRUD
tasksRoutes.post("/api/tasks", authMiddleware, managerController.createTask);
tasksRoutes.post("/api/tasks",authMiddleware,managerController.createTest);
tasksRoutes.get("/api/tasks", authMiddleware, managerController.getAllTasks);
tasksRoutes.get("/api/tasks/:taskId", authMiddleware, managerController.getSingleTask);
tasksRoutes.put("/api/tasks/:taskId", authMiddleware, managerController.updateTask);
tasksRoutes.delete("/api/tasks/:taskId", authMiddleware, managerController.deleteTask);

// Learn CRUD (nested under tasks)
tasksRoutes.post("/api/learn", authMiddleware, managerController.createLearn);
tasksRoutes.get("/api/learn", authMiddleware, managerController.getAllLearn);
tasksRoutes.get("/api/learn/:learnId", authMiddleware, managerController.getSingleLearn);
tasksRoutes.put("/api/learn/:learnId", authMiddleware, managerController.updateLearn);
tasksRoutes.delete("/api/learn/:learnId", authMiddleware, managerController.deleteLearn);

export default tasksRoutes;
