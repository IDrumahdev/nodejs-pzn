import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet', () => {
    it('autoincrement in Prisma Clinet', async () => {
        const category = await prismaClient.category.create({
            data: {
                name : "Food"
            }
        });

        console.info(category);
        expect(category).toHaveProperty("id");
    });
});