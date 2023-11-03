import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet', () => {
    it('aggregate pada prisma clinet', async () => {
        const result = await prismaClient.product.aggregate({
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            },
        });

        console.info(result);
    });

    it('groupby pada prisma clinet', async () => {
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            },
        });

        console.info(result);
    });

    it('groupby and having pada prisma clinet', async () => {
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 3000
                    }
                }
            }
        });

        console.info(result);
    });
});
