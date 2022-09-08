import { Router } from "express";
import userRoute from "./userRoute.js";
import credentialRoute from "./credentialsRoute.js";

const router = Router();

router.use(userRoute);
router.use(credentialRoute);

export default router;