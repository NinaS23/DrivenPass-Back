import joi from "joi";
import DateExtension from '@joi/date';

const Joi = joi.extend(DateExtension);

export const cardSchema = joi.object({
    card_number: joi.string().min(15).max(16).required(),
    name: joi.string().required(),
    title: joi.string().required(),
    CVC: joi.string().min(3).max(3).required(),
    expirationDate: Joi.date().format('YYYY-MM-DD').raw().required(),
    password: joi.string().required(),
    isVirtual: joi.string().valid("yes", "no").required(),
    type: joi.string().valid("credit", "debit", " debitAndCredit").required()
})
