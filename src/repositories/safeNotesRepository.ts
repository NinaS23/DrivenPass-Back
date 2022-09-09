import client from "../config/database.js";
import { TsafeNOtesDate } from "../types/safeNotesTypes.js";


export async function findTitle(userId: number, title: string) {
    const result = await client.safeNotes.findFirst({
        where: { userId, title }
    })
    return result;
}


export async function insertSafeNote(safeNote: TsafeNOtesDate) {
     await client.safeNotes.create({ data: safeNote })
}

export async function getAllSafeNotes(userId: number) {
    const result = await client.safeNotes.findMany({
        where: { userId }
    })
   
    return result;
}

export async function getSafeNote(id:number,userId: number) {
    const result = await client.safeNotes.findFirst({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    })
   
    return result;
}