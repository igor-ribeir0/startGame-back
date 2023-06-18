import { prisma } from "../../config/database";

async function purchaseGame(userId: number, gameName: string, price: number) {
    await prisma.purchase.create({
        data:{
            userId,
            gameName,
            price
        }
    });
};

const purchaseRepository = {
    purchaseGame
};
  
export default purchaseRepository;