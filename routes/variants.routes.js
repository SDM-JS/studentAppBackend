import express from "express";
import managerController from "../controllers/manager.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const variantsRoutes = express.Router();

// Variants CRUD (Admin only)
variantsRoutes.post("/api/variants", authMiddleware, managerController.createVariant);
variantsRoutes.get("/api/variants", authMiddleware, managerController.getAllVariants);
variantsRoutes.get("/api/variants/:variantId", authMiddleware, managerController.getSingleVariant);
variantsRoutes.put("/api/variants/:variantId", authMiddleware, managerController.updateVariant);
variantsRoutes.delete("/api/variants/:variantId", authMiddleware, managerController.deleteVariant);

// Submission CRUD
variantsRoutes.post("/api/submissions", authMiddleware, managerController.createSubmission);
variantsRoutes.get("/api/submissions", authMiddleware, managerController.getAllSubmissions);
variantsRoutes.get("/api/submissions/:submissionId", authMiddleware, managerController.getSingleSubmission);
variantsRoutes.put("/api/submissions/:submissionId", authMiddleware, managerController.updateSubmission);
variantsRoutes.delete("/api/submissions/:submissionId", authMiddleware, managerController.deleteSubmission);

export default variantsRoutes;
