import * as utils from "../utils/utils.js";
import { credentials } from "@prisma/client";
import * as credentialRepository from "../repositories/credentialRepository.js";
import { typeCredentialInsert } from "../types/credentialTypes.js";



export async function registerCredential(credential: typeCredentialInsert) {
    await validateCredentialTitle(credential.title, credential.userId);
    const encryptedPassword = await utils.cryptPassword(credential.password);
    const credentialData: typeCredentialInsert = {
        userId: credential.userId,
        username: credential.username,
        password: encryptedPassword,
        title: credential.title,
        url: credential.url
    };
    await credentialRepository.insertCrendentialData(credentialData);

}

async function validateCredentialTitle(title: string, userId: number) {
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
    const credentialsArr = await sendCredentials(allCredentials)
    return credentialsArr;

}

async function sendCredentials(allCredentials: any) {
    let arrCredentials = []
    for (let credential of allCredentials) {
       const passwordDecrypted = await utils.decryptPassword(credential.password)
        credential = {
            id: credential.id,
            userId: credential.userId,
            username: credential.username,
            password: passwordDecrypted,
            title: credential.title,
            url: credential.url,
            createdAt: credential.createdAt
        }

     arrCredentials.push(credential)
    }
   return arrCredentials;
}

export async function deleteCredential(credentialId: number,userId:number) {
   await findCredential(credentialId);
  const deletion =  await credentialRepository.deleteCredential(credentialId,userId);
  if(deletion.count === 0){
     throw {code:"unauthorized", message:"credential not found"}
  }
   return {delete:"done"};
}

async function findCredential(id:number) {
    const credential = await credentialRepository.findCredential(id)
    if(credential === null){
        throw {code:"not-found",message:"credential was not found to be deleted"}
    }
  
}