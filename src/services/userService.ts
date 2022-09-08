import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";


export async function registerUser(email: string, password: string) {
    const SALT = 10;

    await findEmail(email,"insert");

    const encodePassword = bcrypt.hashSync(password, SALT);
    const user = {
        email,
        password:encodePassword
    }
    await userRepository.insertUser(user)

}

export async function loginUser(email: string, password: string) {
    await findEmail(email,"login");
}



export async function findEmail(email: string, type:string) {
    const verifyEmailForInsert = await userRepository.isEmailNew(email);
    if (verifyEmailForInsert && type === "insert") {
        throw { code: "unauthorized", message: "email alredy exist" }
    }
    if(!verifyEmailForInsert && type === "login"){
        throw { code: "unauthorized", message: "email was not found" }
    }
    
}