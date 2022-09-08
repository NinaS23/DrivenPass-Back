import client from "../config/database.js";
import { credentials } from "@prisma/client";
import { typeCredentialInsert } from "../types/credentialTypes.js";


export async function isTitleExistentByUserId(title:string,userId:number){
    const result = await client.credentials.findFirst({
       where: {userId, title}
      })
     return result;
      
}

export async function insertCrendentialData(credential:typeCredentialInsert){
    await client.credentials.create({ data: credential })
      
}