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

    it('create customer new and new wallet one to one relasi', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "d5c585fe-7a89-11ee-b962-0242ac120002",
                name:"fulan",
                email:"fulan@example.com",
                phone: "0090708908122",
                wallet: {
                    create: {
                        id:"d5c58734-7a89-11ee-b962-0242ac120002",
                        balance: 212000
                    }
                }
            },
            include: {
                wallet: true
            }
        });

        console.info(customer);
    });

    it('find one in relasi one to one', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "2530429c-79f8-11ee-b962-0242ac120002"
            },
            include: {
                wallet: true
            }
        });

        console.info(customer);
    });

    it('find many one to one', async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                wallet: {
                    isNot: null
                }
            },
            include: {
                wallet: true
            }
        });
        console.info(customers);
    });

});