import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as safeNoteService from "../services/safeNoteService.js"

export async function createSafeNote(req: Request, res: Response) {
    const {title,note} : {title:string, note:string} = req.body;
    const  userId:number = res.locals.idUser
    await safeNoteService.createSafeNote({title,note,userId})
    res.sendStatus(httpStatus.OK)
} 