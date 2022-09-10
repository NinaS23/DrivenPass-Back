import client from "../config/database.js";
import { IdocumentInsertData } from "../types/documentTypes.js";


export async function insertDocument(document: any) {
   await client.documents.create({ data: document })

}

export async function findNumberRegister(registerNumber:string,userId:number) {
    const result = await client.documents.findFirst({
        where: { userId, registerNumber }
    })
    return result
}

export async function getDocuments(userId: number) {
    const result = await client.documents.findMany({
        where: { userId }
    })

    return result;
}
