import { prisma } from "../../config/database";

async function getGames() {
    const games = await prisma.game.findMany();
    return games;
};

async function createGame(name: string, price: number, url: string) {
    await prisma.game.create({
        data:{
            name: name,
            price: price,
            url: url
        }
    });
};

const productsRepository = {
    getGames,
    createGame
};
  
export default productsRepository;