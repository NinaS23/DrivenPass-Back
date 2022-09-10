import { Router } from "express";
import userRoute from "./userRoute.js";
import credentialRoute from "./credentialsRoute.js";
import safeNoteRoute from "./safeNotesRoute.js";
import cardRoute from "./cardRoute.js";
import networkRoute from "./netWorkRoute.js";
import documentRoute from "./documentRoute.js";

const router = Router();

router.use(userRoute);
router.use(credentialRoute);
router.use(safeNoteRoute);
router.use(cardRoute);
router.use(networkRoute);
router.use(documentRoute);

export default router;