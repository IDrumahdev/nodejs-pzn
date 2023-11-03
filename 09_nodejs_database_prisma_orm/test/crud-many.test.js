import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet Create Many', () => {
    it('create many result', async () => {
        const {count} = await prismaClient.customer.createMany({
            data : [
                {
                    id:"e586ab44-79ee-11ee-b962-0242ac120002",
                    email:"ibnu@examble.com",
                    phone:"0901020121233",
                    name:"ibnu"
                },
                {
                    id: "e586ae1e-79ee-11ee-b962-0242ac120002",
                    email:"dev@example.com",
                    phone:"098001201029",
                    name:"dev"
                }
            ]
        });

        expect(count).toBe(2);

    });
});