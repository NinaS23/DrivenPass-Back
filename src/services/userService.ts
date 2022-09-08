import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";


export async function registerUser(email: string, password: string) {
    const SALT = 10;

    const verifyEmailForInsert = await userRepository.isEmailNew(email);
    if (verifyEmailForInsert) {
        throw { code: "unauthorized", message: "email alredy exist" }
    }

    const encodePassword = bcrypt.hashSync(password, SALT);
    const user = {
        email,
        password:encodePassword
    }
    await userRepository.insertUser(user)

}