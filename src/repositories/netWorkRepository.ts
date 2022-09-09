import client from "../config/database.js";


export async function createNetwork(network:any) {
    await client.wifi.create({data:network})
}


export async function getNetworks(userId: number) {
    const result = await client.wifi.findMany({
        where: { userId }
    })

    return result;
}