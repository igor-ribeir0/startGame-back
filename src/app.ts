import express from 'express';
import 'express-async-errors';
import cors from "cors";
import { loadEnv } from "./config/envs";
import { connectDb, disconnectDB } from "./config/database";

loadEnv();

import userRouter from "./routers/users-router";
import productRouter from "./routers/products-router";
import purchaseRouter from "./routers/purchase-router";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/users', userRouter)
  .use('/product', productRouter)
  .use('/purchase', purchaseRouter)

export function init() {
  connectDb();
  return Promise.resolve(app);
};
  
export async function close(): Promise<void> {
  await disconnectDB();
};

export default app;