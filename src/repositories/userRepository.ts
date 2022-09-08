import client from "../config/database.js";
import { users } from "@prisma/client";

type typeInsertUserData = Omit<users, "id" | "createdAt">//tem que tirar o id pq ele não é insertado

//create user
export async function insertUser(user: typeInsertUserData) {

    await client.users.create({ data: user })
}

//find email 
export async function isEmailNew(email:string) {
    const result = await client.users.findFirst({
        where: { email},
      })
     return result;
      
}