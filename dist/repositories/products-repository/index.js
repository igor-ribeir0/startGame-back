"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
async function getGames() {
    const games = await database_1.prisma.game.findMany();
    return games;
}
;
async function createGame(name, price, url) {
    await database_1.prisma.game.create({
        data: {
            name: name,
            price: price,
            url: url
        }
    });
}
;
const productsRepository = {
    getGames,
    createGame
};
exports.default = productsRepository;
