import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet', () => {
    it('count data', async () => {
        const total = await prismaClient.customer.count({
            where : {
                name : "ibnu"
            }
        });

        expect(total).toBe(1);
    });
});