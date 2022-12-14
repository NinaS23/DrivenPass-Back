import { IwifiInsert, TwifiData } from "../types/netWorkTypes.js";
import { cryptPassword } from "../utils/utils.js";
import * as netWorkRepositorie from "../repositories/netWorkRepository.js"
import { findUserById } from "../utils/sqlUtils.js";


export async function createNetwork(network: TwifiData, userId: number) {
    const cryptNetworkPassword: string = await cryptPassword(network.password)
    const newNetwork = {
        userId: userId,
        title: network.title,
        networkName: network.networkName,
        password: cryptNetworkPassword
    }
    await netWorkRepositorie.createNetwork(newNetwork)
}

export async function getAllNetworks(userId: number) {
    await findUserById(userId)
    const networks = await netWorkRepositorie.getNetworks(userId)
    if (networks === null) {
        throw { code: "no-content", message: "no netWorks  created yet" }
    }
    return networks;
}

export async function getNetworkById(userId: number, id: number) {
    await findUserById(userId)
    const network = await netWorkRepositorie.getNetwork(id, userId)
    if (network === null) {
        throw { code: "not-found", message: "network was not found" }
    }
    if(network.userId !== userId){
        throw {code:"unauthorized", message:"not found "}
    }
  
    return network
}

export async function deleteNetWork(userId: number, id: number) {
    await findUserById(userId)
    await isNetWorkExistent(id)
    const deletion = await netWorkRepositorie.deleteNetWork(id, userId);
    if (deletion.count === 0) {
        throw { code: "not-found", message: "note was not found to be deleted" }
    }
    return { delete: "done" }

}

async function isNetWorkExistent(id: number) {
    const note = await netWorkRepositorie.isNetWorkExistent(id)
    if (note === null) {
        throw { code: "not-found", message: "note was not found to be deleted" }
    }

}

