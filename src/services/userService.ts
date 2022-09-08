import Cryptr from "cryptr";
import * as userRepository from "../repositories/userRepository.js"


export async function registerUser(email:string, password:string) {
 const verifyEmailForInsert = await userRepository.isEmailNew(email)
 console.log(verifyEmailForInsert)

if(verifyEmailForInsert){
    throw {code: "unauthorized", message:"email alredy exist"}
}


}