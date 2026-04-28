import express from "express";
import managerController from "../controllers/manager.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const adminRoutes = express.Router();

// Admin CRUD (Admin only)
adminRoutes.post("/api/admins", authMiddleware, managerController.createAdmin);
adminRoutes.get("/api/admins", authMiddleware, managerController.getAllAdmins);
adminRoutes.get("/api/admins/:adminId", authMiddleware, managerController.getSingleAdmin);
adminRoutes.put("/api/admins/:adminId", authMiddleware, managerController.updateAdmin);
adminRoutes.delete("/api/admins/:adminId", authMiddleware, managerController.deleteAdmin);

export default adminRoutes;
