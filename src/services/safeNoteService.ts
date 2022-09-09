import { TsafeNOtesDate } from "../types/safeNotesTypes.js";
import * as safeNoteRepositorie from "../repositories/safeNotesRepository.js";
import * as sqlUtils from "../utils/sqlUtils.js";

export async function createSafeNote(safeNote:TsafeNOtesDate) {
    await findNoteTitle(safeNote.userId,safeNote.title)
    await safeNoteRepositorie.insertSafeNote(safeNote)
}

async function findNoteTitle(userId:number,title:string) {
    const isTitleExistent = await safeNoteRepositorie.findTitle(userId,title)
    if(isTitleExistent !== null){
        throw { code: "unauthorized", message: "title already exists" }
    }
   
}

export async function getAllSafeNotes(userId:number) {
    await sqlUtils.findUserById(userId)
    const allSafeNotes = await safeNoteRepositorie.getAllSafeNotes(userId)
   return allSafeNotes;
}

