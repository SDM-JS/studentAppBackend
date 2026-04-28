import express from "express";
import managerController from "../controllers/manager.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const notesRoutes = express.Router();

// Notes CRUD
notesRoutes.post("/api/notes", authMiddleware, managerController.createNote);
notesRoutes.get("/api/notes", authMiddleware, managerController.getAllNotes);
notesRoutes.get("/api/notes/:noteId", authMiddleware, managerController.getSingleNote);
notesRoutes.put("/api/notes/:noteId", authMiddleware, managerController.updateNote);
notesRoutes.delete("/api/notes/:noteId", authMiddleware, managerController.deleteNote);

export default notesRoutes;
