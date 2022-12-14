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

export async function getNetwork(id: number, userId: number) {
    const result = await client.wifi.findFirst({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    })

    return result;
}

export async function isNetWorkExistent(id: number) {
    const result = await client.wifi.findFirst({ where: { id } })
    return result;
}

export async function deleteNetWork(id: number, userId: number) {
    const result = await client.wifi.deleteMany({
        where: {
            AND: [
                { userId },
                { id },
            ],
        },
    });
    return result;
}
