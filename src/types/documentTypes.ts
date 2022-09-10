import { Document } from "@prisma/client";


export type TdocumentData = Omit<Document, "id" | "createdAt">

export type TdocumentService = Omit<Document, "id" |"userId" | "createdAt">