import { IwifiInsert, TwifiData } from "../types/netWorkTypes.js";
import { cryptPassword } from "../utils/utils.js";
import * as netWorkRepositorie from "../repositories/netWorkRepository.js"


export async function createNetwork(network:TwifiData,userId:number)  {
    const cryptNetworkPassword : string = await cryptPassword(network.password)
    const newNetwork   ={
        userId:userId,
        title:network.title,
        networkName:network.networkName,
        password:cryptNetworkPassword
    }
    await netWorkRepositorie.createNetwork(newNetwork)
}