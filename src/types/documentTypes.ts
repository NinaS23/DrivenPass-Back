import { Document } from "@prisma/client";



export type TdocumentData = Omit<Document, "id" | "createdAt">

export interface IdocumentData {
    docType: string,
    fullName: string,
    expirationDate: string,
    issueDate: string,
    registerNumber: string,
    issuingBody: string
}

export interface IdocumentInsertData {
    userId: number,
    docType: string,
    fullName: string,
    expirationDate: string,
    issueDate: string,
    registerNumber: string,
    issuingBody: string
}