import { Router } from "express";
import { createUserSchema, loginUserSchema } from "../schemas/users-schema";
import { validateBody } from "../middlewares/validation-middleware";
import { createUser, searchUser } from "../controllers/users-controller";

const userRouter = Router();

userRouter.post('/sign-up', validateBody(createUserSchema), createUser);
userRouter.post('/sign-in', validateBody(loginUserSchema), searchUser);

export default userRouter;