import { Router } from "express";
import userRoute from "./userRoute.js";
import credentialRoute from "./credentialsRoute.js";
import safeNoteRoute from "./safeNotesRoute.js";

const router = Router();

router.use(userRoute);
router.use(credentialRoute);
router.use(safeNoteRoute);

export default router;