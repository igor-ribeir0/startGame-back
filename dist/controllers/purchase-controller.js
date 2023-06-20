"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseGame = void 0;
const http_status_1 = __importDefault(require("http-status"));
const purchase_service_1 = __importDefault(require("../services/purchase-service"));
async function purchaseGame(req, res, next) {
    const { userId, gameName, price } = req.body;
    try {
        await purchase_service_1.default.purchaseGame(userId, gameName, price);
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        next(error);
    }
}
exports.purchaseGame = purchaseGame;
;
