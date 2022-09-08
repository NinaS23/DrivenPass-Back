import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
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
   const user = await findEmail(email,"login");
   await dcryptPassword(password,user.password)
   const token = await createToken(user.id)
   const dataUser = {
    token,
    userId: user.id,
  };
   return dataUser;
}



async function findEmail(email: string, type: string) {
    const validateEmail = await userRepository.isEmailNew(email);
    if (validateEmail && type === "insert") {
        throw { code: "unauthorized", message: "email alredy exist" }
    }
    if (!validateEmail && type === "login") {
        throw { code: "unauthorized", message: "email or password incorrect!" }
    }
    return validateEmail;
}

async function dcryptPassword(password:string, userPassword:string) {
    const passwordVerify = bcrypt.compareSync(password, userPassword);
    if(!passwordVerify){
        throw {code:"unauthorized", message:"email or password incorrect!"}
    }

}

async function createToken(id:number){
    const iduser = id;
    const secretKey = process.env.JWT_SECRET;
    const config = { expiresIn: 60 * 60 * 6 };
    const token = Jwt.sign({ iduser }, secretKey, config);
    return token;
}