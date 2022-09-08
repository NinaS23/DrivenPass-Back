import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";


export async function registerUser(req:Request,res: Response){
const {email,password} = req.body;

    res.sendStatus(httpStatus.CREATED)
} 