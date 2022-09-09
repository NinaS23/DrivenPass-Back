import { Router } from "express";
import userRoute from "./userRoute.js";
import credentialRoute from "./credentialsRoute.js";
import safeNoteRoute from "./safeNotesRoute.js";
import cardRoute from "./cardController.js";
import networkRoute from "./netWorkRoute.js";

const router = Router();

router.use(userRoute);
router.use(credentialRoute);
router.use(safeNoteRoute);
router.use(cardRoute);
router.use(networkRoute);

export default router;