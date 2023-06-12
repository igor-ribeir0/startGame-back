"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGame = exports.listGames = void 0;
const products_repository_1 = __importDefault(require("../../repositories/products-repository"));
async function listGames() {
    const games = await products_repository_1.default.getGames();
    return games;
}
exports.listGames = listGames;
;
async function createGame(name, price, url) {
    await products_repository_1.default.createGame(name, price, url);
}
exports.createGame = createGame;
;
const productsService = {
    listGames,
    createGame
};
exports.default = productsService;
