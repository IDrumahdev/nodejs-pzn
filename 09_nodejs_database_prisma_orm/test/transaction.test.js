import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet', () => {
    it('sequential transaction', async () => {
        const [ibnudirsan , purwanto] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "be73d000-79e3-11ee-b962-0242ac120002",
                    email:"ibnudirsan@gmail.com",
                    name: "ibnudirsan",
                    phone: "089192001233"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "be73d262-79e3-11ee-b962-0242ac120002",
                    email: "ibnudev@gmail.com",
                    name: "ibnudev",
                    phone: "0808071010810"
                }
            })
        ], {
            timeout: 5
        });
        expect(ibnudirsan.name).toBe("ibnudirsan");
        expect(purwanto.name).toBe("ibnudev");
    });
});

describe('Prisma Clinet', () => {
    it('interactive transaction', async () => {
        const [ibnudirsan , purwanto] = await prismaClient.$transaction(async (prisma) => {
           const ibnudirsan = await prisma.customer.create({
                data: {
                    id: "f5fc20a0-79ec-11ee-b962-0242ac120002",
                    email:"ibnudirsandev@gmail.com",
                    name: "ibnudirsandev",
                    phone: "0891920012330"
                }
            })

            const purwanto = await prisma.customer.create({
                data: {
                    id: "f5fc2726-79ec-11ee-b962-0242ac120002",
                    email: "ibnu.dev@gmail.com",
                    name: "ibnu.dev",
                    phone: "08080710108100"
                }
            })

            return [ibnudirsan, purwanto];
        });
        expect(ibnudirsan.name).toBe("ibnudirsandev");
        expect(purwanto.name).toBe("ibnu.dev");
    });
});