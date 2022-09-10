import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as documentService from "../services/documentService.js"
import { TdocumentData } from "../types/documentTypes.js";

export async function createDocument(req:Request, res:Response) {
    const  userId:number = res.locals.idUser;
    const document: TdocumentData = req.body;
    await documentService.createDocument(document,userId)
    res.sendStatus(httpStatus.CREATED)
}