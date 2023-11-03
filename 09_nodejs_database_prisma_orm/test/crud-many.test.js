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

    it('update many result', async () => {
        const {count} = await prismaClient.customer.updateMany({
            data : {
                email: "data@example.com"
            },
            where: {
                name : "ibnu"
            }
        });

        expect(count).toBe(1);
    });

    it('delete many result', async () => {
      const {count} = await prismaClient.customer.deleteMany({
            where: {
                name : "Tidak Ada"
            }
        });

        expect(count).toBe(0);
    });

    it('read many result', async () => {
        const customer = await prismaClient.customer.findMany({});
        expect(customer.length).toBe(6);
    });
});