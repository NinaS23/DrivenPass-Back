import { IdocumentData, TdocumentData } from "../types/documentTypes.js";
import * as documentRepository from "../repositories/documentRepository.js"
import { findUserById } from "../utils/sqlUtils.js";

export async function createDocument(document: IdocumentData, userId: number) {
    await validFullName(document.fullName)
    await isRegisterNumberUnique(document.registerNumber,userId)
    const documentInsert = {
        ...document,
        userId: userId

    }
    await documentRepository.insertDocument(documentInsert)
}

async function validFullName(name: string) {
    let isNameValide = name.trim().split(" ")
    const code = "UNPROCESSABLE_ENTITY"
    const codeResponse = code.toLocaleLowerCase()
    if (isNameValide.length < 3) {
        throw { code: codeResponse, message: "name is not complete" }
    }

}

async function isRegisterNumberUnique(number: string, userId:number) {
    const isNumberValid = await documentRepository.findNumberRegister(number,userId)
    if(isNumberValid !== null){
        throw {code:"unauthorized",message:"RegisterNumber alredy exists"}
    }
}

export async function getAllDocuments(userid:number) {
    await findUserById(userid)
    const documents = await documentRepository.getDocuments(userid)
    if(documents === null){
        throw { code: "no-content", message: "no documents  created yet" }
    }
    return documents
}