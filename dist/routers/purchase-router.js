"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const purchase_controller_1 = require("../controllers/purchase-controller");
const authentication_middleware_1 = require("../middlewares/authentication-middleware");
const purchaseRouter = (0, express_1.Router)();
purchaseRouter.all('/*', authentication_middleware_1.authToken);
purchaseRouter.post('/', purchase_controller_1.purchaseGame);
exports.default = purchaseRouter;
