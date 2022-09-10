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

export async function getAllCards(userId: number) {
    const result = await client.cards.findMany({
        where: { userId }
    })
    return result;
}

export async function getCard(id: number, userId: number) {
    const result = await client.cards.findFirst({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    })

    return result;
}


export async function deleteCard(id: number,userId:number) {
    const result = await client.cards.deleteMany({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    });
    return result;
}