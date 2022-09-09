import client from "../config/database.js";


export async function createNetwork(network:any) {
    await client.wifi.create({data:network})
}