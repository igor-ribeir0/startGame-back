"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_schema_1 = require("../schemas/products-schema");
const validation_middleware_1 = require("../middlewares/validation-middleware");
const products_controller_1 = require("../controllers/products-controller");
const authentication_middleware_1 = require("../middlewares/authentication-middleware");
const productRouter = (0, express_1.Router)();
productRouter.all('/*', authentication_middleware_1.authToken);
productRouter.get('/', products_controller_1.gameList);
productRouter.post('/createGame', (0, validation_middleware_1.validateBody)(products_schema_1.createGameSchema), products_controller_1.createGame);
exports.default = productRouter;
