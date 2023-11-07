import {prismaClient} from '../src/prisma-clinet';

describe('Prisma Clinet', () => {
    it('one to many', async () => {
        const comment = await prismaClient.comment.create({
            data : {
                customer_id:"be73d000-79e3-11ee-b962-0242ac120002",
                title:"Title a comment 2",
                description:"Description a comment 2"
            },
            include: {
                customer: true
            }
        });

        console.info(comment);
    });

    it('create one to many', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "ddcad162-e365-432e-9f76-f143f6a64e79",
                name: "fulana",
                email: "fulana@rumahdev.pro",
                phone: "080808700",
                comments: {
                    createMany: {
                        data: [
                            {
                                title: "title a comment 1",
                                description: "description a cooment 1"
                            },
                            {
                                title: "title a comment 2",
                                description: "description a cooment 2"
                            }
                        ]
                    }
                }
            },
            include: {
                comments: true
            }
        });

        console.info(customer);
    });

    it('find one to many', async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                comments: {
                    some: {
                        title: {
                            contains: "Comment"
                        }
                    }
                }
            },
            include: {
                comments: true
            }
        });

        console.info(JSON.stringify(customers));
    });
});