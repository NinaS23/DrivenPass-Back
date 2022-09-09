
import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric.js";
import * as cardController from "../controllers/cardController.js";
import { cardSchema } from "../schemas/cardSchema.js";
import { validateToken } from "../middlewares/tokenMIddleware.js";
const cardRoute = Router()

cardRoute.post("/card", validateSchemaMiddleware(cardSchema),validateToken, cardController.createCard)
cardRoute.get("/cards",validateToken, cardController.getAllCards)
cardRoute.get("/card/:id",validateToken, cardController.getCardById)
cardRoute.delete("/cards/:id",validateToken, cardController.deleteCard)

export default cardRoute;