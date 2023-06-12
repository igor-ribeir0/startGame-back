import joi from 'joi';
import { CreateGameParams } from "../services/products-service";

export const createGameSchema = joi.object<CreateGameParams>({
    name: joi.string().required(),
    price: joi.number().required(),
    url: joi.string().required(),
});