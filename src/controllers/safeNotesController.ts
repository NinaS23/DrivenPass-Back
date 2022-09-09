import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as safeNoteService from "../services/safeNoteService.js"

export async function createSafeNote(req: Request, res: Response) {
    const { title, note }: { title: string, note: string } = req.body;
    const userId: number = res.locals.idUser
    await safeNoteService.createSafeNote({ title, note, userId })
    res.sendStatus(httpStatus.CREATED)
}

export async function getSafeNotesByUserId(req: Request, res: Response) {
    const userId: number = res.locals.idUser
    const allSafeNotes = await safeNoteService.getAllSafeNotes(userId)
    res.status(httpStatus.OK).send(allSafeNotes)
}

export async function getSafeNoteById(req: Request, res: Response) {
    const userId: number = res.locals.idUser
    const { id } = req.params;
    if (!id) {
        res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY)
    }
    const noteId = Number(id);
    const safeNote = await safeNoteService.getNoteById(noteId, userId)
    res.status(httpStatus.OK).send(safeNote)
}

export async function deleteSafeNote(req: Request, res: Response) {
    const userId: number = res.locals.idUser;
    const { id } = req.params;
    if (!id) {
        res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY)
    }
    const noteId = Number(id);
    const deleted = await safeNoteService.deleteNoteById(noteId,userId)
    res.status(httpStatus.OK).send(deleted);
} 