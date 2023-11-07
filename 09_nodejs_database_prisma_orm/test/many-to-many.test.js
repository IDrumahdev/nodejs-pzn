import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet', () => {
    it('create many to many', async () => {
        const like = await prismaClient.like.create({
            data: {
             customer_id:"2530429c-79f8-11ee-b962-0242ac120002",
             product_id:"P002"   
            },
            include: {
                customer: true,
                product: true
            }
        });

        console.info(like);
    });

    it('find many to many', async () => {
        const customers = await prismaClient.customer.findUnique({
            where: {
                id: "2530429c-79f8-11ee-b962-0242ac120002"
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });

        console.info(JSON.stringify(customers));
    });

    it('find many in many to many', async () => {
        const customerdata = await prismaClient.customer.findMany({
            where: {
                likes: {
                    some: {
                        product: {
                            name: {
                                contains: "B"
                            }
                        }
                    }
                }
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });

        console.info(JSON.stringify(customerdata));
    });

    /**
     * Masih Error
     */
    it('implicit many to many', async () => {
        const loves = await prismaClient.customer.update({
            where: {
                id: "2530429c-79f8-11ee-b962-0242ac120002"
            },
            data: {
                loves: {
                    connect: [
                        {
                            id: "P0001"
                        },
                        {
                            id: "P0002"
                        }
                    ]
                }
            },
            include: {
                loves: true
            }
        });

        console.info(loves);
    });
});