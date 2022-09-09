import joi from "joi";

export const cardSchema = joi.object({
    name:joi.string().required(),
    title:joi.string().required(),
    password:joi.string().required(),
    isVirtual:joi.string().valid("yes","no").required(),
    type: joi.string().valid("credit","debit"," debitAndCredit").required()
})
