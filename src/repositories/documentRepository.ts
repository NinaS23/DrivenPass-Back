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


export async function getDocument(id: number, userId: number) {
    const result = await client.documents.findFirst({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    })

    return result;
}

export async function deleteDocument(id: number, userId: number) {
    const result = await client.documents.deleteMany({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    });
    return result;
}


export async function isDocumentExistent(id: number) {
    const result = await client.documents.findFirst({ where: { id } })
    return result;
}