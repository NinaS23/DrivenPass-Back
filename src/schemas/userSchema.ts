import joi from "joi";


export const userSchema = joi.object({
    email: joi.string().email().max(100).required(),
    password: joi.string().min(10).required()
})

