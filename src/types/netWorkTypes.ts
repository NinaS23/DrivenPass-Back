import { Wifi } from "@prisma/client";



export type TwifiData = Omit<Wifi, "id" | "createdAt">

export interface IwifiInsert {
    userId: number,
    title: string,
    networkName: string,
    password: string
}