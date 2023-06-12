import { Router } from "express";
import { createGameSchema } from "../schemas/products-schema";
import { validateBody } from "../middlewares/validation-middleware";
import { gameList, createGame } from "../controllers/products-controller";
import { authToken } from "../middlewares/authentication-middleware";

const productRouter = Router();

productRouter.all('/*', authToken);
productRouter.get('/', gameList);
productRouter.post('/createGame', validateBody(createGameSchema), createGame);

export default productRouter;