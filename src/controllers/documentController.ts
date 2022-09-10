import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as documentService from "../services/documentService.js"
import { IdocumentData } from "../types/documentTypes.js";

export async function createDocument(req:Request, res:Response) {
    const  userId:number = res.locals.idUser;
    const document: IdocumentData  = req.body;
    await documentService.createDocument(document,userId)
    res.sendStatus(httpStatus.CREATED)
}

export async function getAllDocumentsByUserId(req:Request, res:Response) {
    const  userId:number = res.locals.idUser;
    
    res.sendStatus(httpStatus.OK)
}