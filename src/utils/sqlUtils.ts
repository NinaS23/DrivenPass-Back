import { findUser } from "../repositories/userRepository.js";

export async function findUserById(id:number) {
    const user = await findUser(id)
    if(user === null){
        throw {code:"not-found", message:"user was not found"}
    }
}