import { Game } from "@prisma/client";
import productsRepository from '../../repositories/products-repository';

export async function listGames() {
    const games = await productsRepository.getGames();
    return games;
};

export async function createGame(name: string, price: number, url: string) {
    await productsRepository.createGame(name, price, url);
};

export type CreateGameParams = Pick<Game, 'name' | 'price' | 'url'>;

const productsService = {
    listGames,
    createGame
};
  
export default productsService;