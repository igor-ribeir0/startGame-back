"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
async function purchaseGame(userId, gameName, price) {
    await database_1.prisma.purchase.create({
        data: {
            userId,
            gameName,
            price
        }
    });
}
;
const purchaseRepository = {
    purchaseGame
};
exports.default = purchaseRepository;
