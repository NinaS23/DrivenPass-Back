import { cards } from "@prisma/client";

export type TcardData = Omit<cards,"id">