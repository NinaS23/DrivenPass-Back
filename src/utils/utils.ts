import Cryptr from "cryptr";
import 'dotenv/config';

export async function cryptPassword(password:string) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encryptedString = cryptr.encrypt(password);
    return encryptedString;

}

export async function decryptPassword(password: string) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const decrypt = cryptr.decrypt(password);
    return decrypt
}