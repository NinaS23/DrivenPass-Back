import { TcardData } from "../types/cardTypes";
import * as cardRepositorie from "../repositories/cardRepository.js"
import { cryptPassword } from "../utils/utils.js";
import { findUserById } from "../utils/sqlUtils.js";

export async function createCard(card: TcardData, userId: number) {
    await isTitleCardExistent(userId, card.title)
    const encryptedPassword = await cryptPassword(card.password)
    const encryptedCode = await cryptPassword(card.CVC)
    const createdCard: TcardData = {
        userId: userId,
        number_card: card.number_card,
        name: card.name,
        title: card.title,
        CVC: encryptedCode,
        expirationDate: card.expirationDate,
        password: encryptedPassword,
        isVirtual: card.isVirtual,
        type: card.type
    }
  await cardRepositorie.createCard(createdCard)
}

async function isTitleCardExistent(userId:number,title:string) {
    const isTitleExistent = await cardRepositorie.findTitleCard(userId,title)
    if(isTitleExistent !== null){
        throw { code: "unauthorized", message: "title is existent" }
    }

}

export async function getAllCard(userId: number) {
    await findUserById(userId)
    const cards = await cardRepositorie.getAllCards(userId)
    if (cards === null) {
        throw { code: "no-content", message: "no card created yet" }
    }
    return cards;
}

export async function getCardById(userId:number, id:number) {
    await findUserById(userId)
    const card = await cardRepositorie.getCard(id,userId)
    if(card === null){
        throw {code:"not-found", message:"this card does not exist"}
    }
    return card;
}

export async function deleteCard(userId: number, id: number) {
    await findUserById(userId)
    const deletion = await cardRepositorie.deleteCard(id, userId)
    if(deletion.count === 0){
        throw { code: "not-found", message: "note was not found to be deleted" }
    }
    return { delete: "done" }
}