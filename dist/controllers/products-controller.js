"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGame = exports.gameList = void 0;
const http_status_1 = __importDefault(require("http-status"));
const products_service_1 = __importDefault(require("../services/products-service"));
async function gameList(req, res, next) {
    try {
        const gameList = await products_service_1.default.listGames();
        return res.status(http_status_1.default.OK).send(gameList);
    }
    catch (error) {
        next(error);
    }
}
exports.gameList = gameList;
;
async function createGame(req, res, next) {
    const { name, price, url } = req.body;
    try {
        await products_service_1.default.createGame(name, price, url);
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        next(error);
    }
}
exports.createGame = createGame;
;
