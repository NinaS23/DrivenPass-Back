import client from "../config/database.js";
import { TcardData } from "../types/cardTypes.js";

export async function createCard(card:TcardData) {
    await client.cards.create({data:card})
}

export async function findTitleCard(userId:number,title:string) {
    const result = await client.cards.findFirst({
        where: { userId, title }
    })
    return result;
}