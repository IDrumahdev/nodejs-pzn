import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Client', () => {
    it('select fild', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "2530429c-79f8-11ee-b962-0242ac120002",
                email: "des@example.com",
                phone: "0989102801020",
                name: "des"
            },
            select : {
                id: true,
                name: true
            }
        });

        console.info(customer);

        expect(customer.id).toBe("2530429c-79f8-11ee-b962-0242ac120002");
        expect(customer.name).toBe("des");
        expect(customer.email).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    });

    it('select filed from table', async () => {
        const customers = await prismaClient.customer.findMany({
            select: {
                id: true,
                name: true
            }
        });

        console.info(customers);

        for (let datacustomer  of customers) {
            expect(datacustomer.id).toBeDefined();
            expect(datacustomer.name).toBeDefined();
            expect(datacustomer.email).toBeUndefined();
            expect(datacustomer.phone).toBeUndefined();
        }
    });
});