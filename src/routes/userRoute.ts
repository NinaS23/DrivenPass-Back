
import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric.js";
import * as userController from "../controllers/userController.js";
import { userSchema } from "../schemas/userSchema.js";

const userRoute = Router()

userRoute.post("/sign-up", validateSchemaMiddleware(userSchema), userController.registerUser)

export default userRoute;