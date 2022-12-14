import { Router } from "express";
import  * as safeNoteController from "../controllers/safeNotesController.js";
import { safeNoteSchema } from "../schemas/safeNotes.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric.js";
import { validateToken } from "../middlewares/tokenMIddleware.js";

const safeNoteRoute = Router();

safeNoteRoute.post("/safeNote",validateSchemaMiddleware(safeNoteSchema),validateToken, safeNoteController.createSafeNote);
safeNoteRoute.get("/safeNote",validateToken, safeNoteController.getSafeNotesByUserId);
safeNoteRoute.get("/safeNote/:id",validateToken, safeNoteController.getSafeNoteById);
safeNoteRoute.delete("/safeNote/:id",validateToken, safeNoteController.deleteSafeNote);

export default safeNoteRoute;