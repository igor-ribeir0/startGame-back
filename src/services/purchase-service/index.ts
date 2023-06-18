import purchaseRepository from '../../repositories/purchase-repository';

export async function purchaseGame(userId: number, gameName: string, price: number) {
    await purchaseRepository.purchaseGame(userId, gameName, price);
};


const purchaseService = {
    purchaseGame
};
  
export default purchaseService;