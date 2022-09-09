import joi from "joi";

export const safeNoteSchema = joi.object({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
})

