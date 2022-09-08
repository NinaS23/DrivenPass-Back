import Cryptr from "cryptr";
import 'dotenv/config';
import * as credentialRepository from "../repositories/credentialRepository.js";
import { typeCredentialInsert } from "../types/credentialTypes.js";



export async function registerCredential(credential: typeCredentialInsert) {
    await validateCredentialTitle(credential.title,credential.userId);
    const encryptedPassword = await cryptPassword(credential.password);
    const credentialData : typeCredentialInsert = {
        userId: credential.userId,
        username: credential.username,
        password: encryptedPassword,
        title: credential.title,
        url: credential.url
    };
    await credentialRepository.insertCrendentialData(credentialData);
    
}

async function cryptPassword(password:string) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encryptedString = cryptr.encrypt(password);
    return encryptedString;

}

async function validateCredentialTitle(title:string, userId:number) {
    const validateTitleByUserId = await credentialRepository.isTitleExistentByUserId(title, userId);
    if (validateTitleByUserId !== null) {
        throw { code: "unauthorized", message: "title is existent" }
    }
}


export async function viewCredentialByUserId(userId: number) {
    const allCredentials = await credentialRepository.allCredentialsByUserId(userId);
    if (allCredentials === null) {
        throw { code: "no-content", message: "no credentials yet" }
    }
    return allCredentials;
}