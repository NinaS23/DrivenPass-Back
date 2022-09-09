import { TcardData } from "../types/cardTypes";
import * as cardRepositorie from "../repositories/cardRepository.js"
import { cryptPassword } from "../utils/utils.js";

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