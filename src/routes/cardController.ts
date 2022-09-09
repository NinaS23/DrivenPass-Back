
import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric.js";
import * as cardController from "../controllers/cardController.js";
import { cardSchema } from "../schemas/cardSchema.js";
const cardRoute = Router()

cardRoute.post("/card", validateSchemaMiddleware(cardSchema), cardController.createCard)


export default cardRoute;