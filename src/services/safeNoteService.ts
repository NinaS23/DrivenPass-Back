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

export async function getNoteById(id:number,userId:number) {
    await sqlUtils.findUserById(userId)
    const safeNote = await safeNoteRepositorie.getSafeNote(id,userId)
    if(safeNote === null){
        throw {code:"not-found", message:"crendential not found "}
    }
    if(safeNote.userId !== userId){
        throw {code:"unauthorized", message:"not found in yors credentials"}
    }
    return safeNote;
}

export async function deleteNoteById(id: number, userId: number) {
    await sqlUtils.findUserById(userId)
    await isSafeNoteExistent(id);
    const deletion = await safeNoteRepositorie.deleteSafeNote(id, userId);
    if (deletion.count === 0) {
        throw { code: "unauthorized", message: "note not found" }
    }
    return { delete: "done" };
}

async function isSafeNoteExistent(id: number) {
    const note = await safeNoteRepositorie.isSafeNoteExistent(id)
    if (note === null) {
        throw { code: "not-found", message: "note was not found to be deleted" }
    }

}