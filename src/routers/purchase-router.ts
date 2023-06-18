import { Router } from "express";
import { purchaseGame } from "../controllers/purchase-controller";
import { authToken } from "../middlewares/authentication-middleware";

const purchaseRouter = Router();

purchaseRouter.all('/*', authToken);
purchaseRouter.post('/', purchaseGame);

export default purchaseRouter;