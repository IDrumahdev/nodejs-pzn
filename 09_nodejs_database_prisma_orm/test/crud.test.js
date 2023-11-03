import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet', () => {

    it('Create Customer', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "6341d64f-f084-4418-9455-a1c46ddf283d",
                email: "ibnudirsan@gmail.com",
                name: "ibnudirsan",
                phone: "09800102920"
            } 
        })

        expect(customer.id).toBe("6341d64f-f084-4418-9455-a1c46ddf283d");
        expect(customer.email).toBe("ibnudirsan@gmail.com");
        expect(customer.name).toBe("ibnudirsan");
        expect(customer.phone).toBe("09800102920");
    });
    
    it('Update Customer', async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Heri ibnudirsan",
            },
            where: {
                id: "6341d64f-f084-4418-9455-a1c46ddf283d"
            }
        })
        
        expect(customer.id).toBe("6341d64f-f084-4418-9455-a1c46ddf283d");
        expect(customer.email).toBe("ibnudirsan@gmail.com");
        expect(customer.name).toBe("Heri ibnudirsan");
        expect(customer.phone).toBe("09800102920");
    });

    it('FindUnique Customer', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "6341d64f-f084-4418-9455-a1c46ddf283d"
            }
        })
        
        expect(customer.id).toBe("6341d64f-f084-4418-9455-a1c46ddf283d");
        expect(customer.email).toBe("ibnudirsan@gmail.com");
        expect(customer.name).toBe("Heri ibnudirsan");
        expect(customer.phone).toBe("09800102920");
    });

    it('Delete Customer', async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "6341d64f-f084-4418-9455-a1c46ddf283d"
            }
        })
        
        expect(customer.id).toBe("6341d64f-f084-4418-9455-a1c46ddf283d");
        expect(customer.email).toBe("ibnudirsan@gmail.com");
        expect(customer.name).toBe("Heri ibnudirsan");
        expect(customer.phone).toBe("09800102920");
    });
});