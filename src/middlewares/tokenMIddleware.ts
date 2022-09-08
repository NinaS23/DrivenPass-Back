import { NextFunction, Request, Response } from "express";
import 'dotenv/config';
import Jwt  from "jsonwebtoken";
import httpStatus from "../utils/httpStatus.js";

export function validateToken(req:Request,res:Response,next:NextFunction) {
    const { authorization }  = req.headers;
    const token = authorization?.replace("Bearer", "").trim();
    if(!token){
       res.sendStatus(httpStatus.UNAUTHORIZED)
    }
    const secretKey = process.env.JWT_SECRET;

    const {iduser} =  Jwt.verify(token, secretKey);

    res.locals.idUser = iduser
    
    next();
  
}
