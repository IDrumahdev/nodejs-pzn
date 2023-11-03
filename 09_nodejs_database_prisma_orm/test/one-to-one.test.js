import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet Relasi', () => {
    it('Relasi One to One', async () => {
        const wallet = await prismaClient.wallet.create({
            data: {
                id: "d5c5837e-7a89-11ee-b962-0242ac120002",
                balance: 3000,
                customer_id:"2530429c-79f8-11ee-b962-0242ac120002"
            },
            include : {
                customer: true
            }
        });

        console.info(wallet);
    });
});