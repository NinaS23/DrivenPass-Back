import joi from "joi";

export const credentialSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().max(10).required(),
    title: joi.string().required(),
    url: joi.string().pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required()
})