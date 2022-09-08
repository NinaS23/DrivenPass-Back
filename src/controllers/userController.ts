import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as userService from "../services/userService.js"


export async function registerUser(req: Request, res: Response) {
    const { email, password } = req.body;
    await userService.registerUser(email, password);

    res.sendStatus(httpStatus.CREATED)
} 


export async function loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    const dataUser = await userService.loginUser(email, password);

    res.status(httpStatus.OK).send(dataUser)
} 