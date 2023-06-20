import joi from 'joi';
import { CreateUserParams, SignInParams } from "../services/users-service";

export const createUserSchema = joi.object<CreateUserParams>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    address: joi.string().required(),
    complement: joi.string().required(),
    cep: joi.string().required(),
    password: joi.string().required(),
});

export const loginUserSchema = joi.object<SignInParams>({
    email: joi.string().email().required(),
    password: joi.string().required()
})