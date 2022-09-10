import joi from "joi";
import DateExtension from '@joi/date';

const Joi = joi.extend(DateExtension);


const documentSchema = joi.object({
    docType: joi.string().valid("RG" , "CNH").required(),
    fullName: joi.string().required(),
    expirationDate: Joi.date().format('YYYY-MM-DD').raw().required(),
    issueDate: Joi.date().format('YYYY-MM-DD').raw().required(),
    registerNumber:joi.string().required(),
    issuingBody:joi.string().required()
})