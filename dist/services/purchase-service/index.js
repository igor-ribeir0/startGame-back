"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseGame = void 0;
const purchase_repository_1 = __importDefault(require("../../repositories/purchase-repository"));
async function purchaseGame(userId, gameName, price) {
    await purchase_repository_1.default.purchaseGame(userId, gameName, price);
}
exports.purchaseGame = purchaseGame;
;
const purchaseService = {
    purchaseGame
};
exports.default = purchaseService;
