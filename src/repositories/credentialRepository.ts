import client from "../config/database.js";
import { credentials } from "@prisma/client";
import { typeCredentialInsert } from "../types/credentialTypes.js";


export async function isTitleExistentByUserId(title: string, userId: number) {
    const result = await client.credentials.findFirst({
        where: { userId, title }
    })
    return result;
}

export async function insertCrendentialData(credential: typeCredentialInsert) {
    await client.credentials.create({ data: credential })

}

export async function allCredentialsByUserId(userId: number) {
    const result = await client.credentials.findMany({
        where: { userId }
    })
    return result;
}

export async function getCredential(id: number, userId: number) {
    const result = await client.credentials.findFirst({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    })

    return result;
}

export async function deleteCredential(id: number,userId:number) {
    const result = await client.credentials.deleteMany({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    });
    return result;
}

export async function findCredential(id: number) {
    const result = await client.credentials.findFirst({ where: { id } })
    return result;
}