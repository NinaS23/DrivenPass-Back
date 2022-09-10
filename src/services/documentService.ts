import { IdocumentData } from "../types/documentTypes";

export async function createDocument(document: IdocumentData, userId: number) {
    await validFullName(document.fullName)

}

async function validFullName(name:string) {
    let isNameValide = name.trim().split(" ")
    const code = "UNPROCESSABLE_ENTITY"
    const codeResponse = code.toLocaleLowerCase()
    if(isNameValide.length < 3){
        throw {code:codeResponse, message:"name is not complete"}
    }
    
}