import { Router } from "express";
import { validateToken } from "../middlewares/tokenMIddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric.js";
import * as documentController from "../controllers/documentController.js";
import { documentSchema } from "../schemas/documentSchema.js";

const documentRoute = Router();

documentRoute.post("/document", validateSchemaMiddleware(documentSchema),validateToken,documentController.createDocument);
documentRoute.get("/documents", validateToken,documentController.getAllDocumentsByUserId);
documentRoute.get("/document/:id", validateToken,documentController.getDocumentById);
documentRoute.delete("/document/:id", validateToken,documentController.deleteDocument);

export default documentRoute;