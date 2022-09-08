import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus.js";
import * as credentialsService from "../services/credentialsService.js"


export async function registerCredential(req: Request, res: Response) {
    const { username, password, title, url } : {username: string, password:string, title:string, url:string} = req.body;
    const  userId:number = res.locals.idUser
    await credentialsService.registerCredential({userId,username,password,title,url});

    res.sendStatus(httpStatus.CREATED)
} 

export async function viewCredentialByUserId(req: Request, res: Response) {
    const  userId:number = res.locals.idUser;
    const credentials = await credentialsService.viewCredentialByUserId(userId)
    
    res.status(httpStatus.OK).send(credentials)
} 

export async function deleteCredential(req: Request, res: Response) {
    const { id } = req.params;
    const userId: number = res.locals.idUser;
    const credentialId = Number(id)

    const isDeleted = await credentialsService.deleteCredential(credentialId,userId)

    res.status(httpStatus.OK).send(isDeleted)
} 
