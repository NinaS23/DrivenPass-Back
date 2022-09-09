import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as cardService from "../services/cardService.js"
import { TcardData } from "../types/cardTypes.js";


export async function createCard(req: Request, res: Response) {
    const card: TcardData = req.body;
    const userId: number = res.locals.idUser
    await cardService.createCard(card, userId)
    res.sendStatus(httpStatus.CREATED)
}

export async function getAllCards(req: Request, res: Response) {
    const userId: number = res.locals.idUser
    const cards = await cardService.getAllCard(userId)
    res.status(httpStatus.OK).send(cards)
}

export async function getCardById(req: Request, res: Response) {
    const userId: number = res.locals.idUser
    const { id } = req.params;
    const cardId: number = Number(id);
    const card = await cardService.getCardById(userId, cardId)
    res.status(httpStatus.OK).send(card)
} 
