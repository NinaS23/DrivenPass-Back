
import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric.js";
import * as networkController from "../controllers/netWorkController.js";
import { wifiSchema } from "../schemas/netWorkSchema.js";
import { validateToken } from "../middlewares/tokenMIddleware.js";

const networkRoute = Router()

networkRoute.post("/network", validateSchemaMiddleware(wifiSchema),validateToken, networkController.createNetwork)
networkRoute.get("/networks",validateToken, networkController.getAllNetwork)

export default networkRoute;