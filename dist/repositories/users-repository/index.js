"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
async function findByEmail(email) {
    const findEmail = await database_1.prisma.user.findFirst({
        where: { email }
    });
    return findEmail;
}
;
async function create(name, email, address, complement, cep, password) {
    await database_1.prisma.user.create({
        data: {
            name,
            email,
            address,
            complement,
            cep,
            password
        }
    });
}
;
const userRepository = {
    findByEmail,
    create
};
exports.default = userRepository;
