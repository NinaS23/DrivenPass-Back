import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as documentService from "../services/documentService.js";
import { IdocumentData } from "../types/documentTypes.js";

export async function createDocument(req: Request, res: Response) {
    const userId: number = res.locals.idUser;
    const document: IdocumentData = req.body;
    await documentService.createDocument(document, userId);
    res.sendStatus(httpStatus.CREATED);
}

export async function getAllDocumentsByUserId(req: Request, res: Response) {
    const userId: number = res.locals.idUser;
    const documents = await documentService.getAllDocuments(userId);
    res.status(httpStatus.OK).send(documents);
}

export async function getDocumentById(req: Request, res: Response) {
    const userId: number = res.locals.idUser;
    const { id } = req.params;
    const documentId = Number(id);
    const document = await documentService.getDocument(userId,documentId);
    res.status(httpStatus.OK).send(document);
}

export async function deleteDocument(req: Request, res: Response) {
    const userId: number = res.locals.idUser;
    const { id } = req.params;
    const documentId = Number(id);
    const document = await documentService.deleteDocument(userId,documentId);
    res.status(httpStatus.OK).send(document);
}