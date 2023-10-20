import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Client Execute SQL', () => {
    it('execute sql', async () => {
       const id = "1";
       const name = "ibnudirsan";
       
       const impacted = await prismaClient.$executeRaw`INSERT INTO sample (id, name) VALUES (${id}, ${name})`;
       expect(impacted).toBe(1);
    });
});