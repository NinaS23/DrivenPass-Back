import { Router } from "express";
import userRoute from "./userRoute.js";

const router = Router();

router.use(userRoute);

export default router;