
import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric.js";
import * as credentialController from "../controllers/credentialsController.js";
import { validateToken } from "../middlewares/tokenMIddleware.js"; 
import { credentialSchema } from "../schemas/credentialsSchema.js";

const credentialRoute = Router()

credentialRoute.post("/register-credential", validateSchemaMiddleware(credentialSchema),validateToken, credentialController.registerCredential)

export default credentialRoute;