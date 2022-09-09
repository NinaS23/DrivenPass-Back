import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as cardService from "../services/cardService.js"


export async function createCard(req: Request, res: Response) {
    const  userId:number = res.locals.idUser
    
    res.sendStatus(httpStatus.CREATED)
} 
