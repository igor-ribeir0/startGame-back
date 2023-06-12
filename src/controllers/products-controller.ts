import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import productsService from '../services/products-service';

export async function gameList(req: Request, res: Response, next: NextFunction) {
    try{
        const gameList = await productsService.listGames();
        return res.status(httpStatus.OK).send(gameList);
    }
    catch(error){
        next(error);
    }
};

export async function createGame(req: Request, res: Response, next: NextFunction) {
    const { name, price, url } = req.body;

    try{
        await productsService.createGame(name, price, url);
        return res.sendStatus(httpStatus.CREATED);
    }
    catch(error){
        next(error);
    }
};