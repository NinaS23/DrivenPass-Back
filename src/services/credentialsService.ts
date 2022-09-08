import Cryptr from "cryptr";
import 'dotenv/config';
import * as credentialRepository from "../repositories/credentialRepository.js";
import { typeCredentialInsert } from "../types/credentialTypes.js";



export async function registerCredential(credential: typeCredentialInsert) {
    const validateCredentialTitle = await credentialRepository.isTitleExistentByUserId(credential.title, credential.userId)
    if (validateCredentialTitle !== null) {
        throw { code: "unauthorized", message: "title is existent" }
    }
    const encryptedPassword = await cryptPassword(credential.password)
    const credentialData : typeCredentialInsert = {
        userId: credential.userId,
        username: credential.username,
        password: encryptedPassword,
        title: credential.title,
        url: credential.url
    }
    await credentialRepository.insertCrendentialData(credentialData)
    
}

async function cryptPassword(password:string) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encryptedString = cryptr.encrypt(password);
    return encryptedString;

}