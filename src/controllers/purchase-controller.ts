import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import purchaseService from '../services/purchase-service';

export async function purchaseGame(req: Request, res: Response, next: NextFunction) {
    const { userId, gameName, price } = req.body;

    try{
        await purchaseService.purchaseGame(userId, gameName, price);
        return res.sendStatus(httpStatus.CREATED);
    }
    catch(error){
        next(error);
    }
};