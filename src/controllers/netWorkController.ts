import { Request, Response } from "express";
import { TwifiData } from "../types/netWorkTypes.js";
import httpStatus from "../utils/httpStatus.js";
import * as netWorkService from "../services/netWorkService.js"

export async function createNetwork(req: Request, res: Response) {
    const network: TwifiData = req.body;
    const userId: number = res.locals.idUser;
    await netWorkService.createNetwork(network, userId)
    res.sendStatus(httpStatus.CREATED)
}

export async function getAllNetwork(req: Request, res: Response) {
    const userId: number = res.locals.idUser;
    const networks = await netWorkService.getAllNetworks(userId)
    res.status(httpStatus.OK).send(networks)
}