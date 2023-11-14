import { prismaClient } from '../src/application/database.js';
import bcrypt from 'bcrypt';

const removeTestUser = async () => {
   await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    });
}

const createTestUser = async () => {
   await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    });
}

const getTestUser  = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}

const removeAllTestContact = async () => {
    await prismaClient.contact.deleteMany({
        where: {
            username: 'test'
        }
    });
}

const createTestContact = async () => {
    await prismaClient.contact.create({
        data: {
            username: "test",
            first_name: "test",
            last_name: "test",
            email: "test@test.com",
            phone: "09801029101010"
        }
    });
}

const getTestContact = async () => {
    return prismaClient.contact.findFirst({
        where: {
            username: "test"
        }
    });
}

const createTestManyContacts = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.contact.create({
            data: {
                username: "test",
                first_name: `test ${i}`,
                last_name: `test ${i}`,
                email: `test${i}@test.com`,
                phone: `09801029101010${i}`
            }
        });        
    }
}

const removeAllTestAddresses = async () => {
    await prismaClient.address.deleteMany({
        where: {
            contact: {
                username: "test"
            }
        }
    });
}

const createTestAddress = async () => {
    const contact = await getTestContact();
    await prismaClient.address.create({
        data: {
            contact_id: contact.id,
            street: "Jalan Test",
            city: "Kota Test",
            province: "Provinsi Test",
            country: "Indonesia",
            postal_code: "16433"
        }
    });
}

const getTestAddress = async () => {
    return prismaClient.address.findFirst({
        where: {
            contact: {
                username: "test"
            }
        }
    })
}

export {
    removeTestUser,
    createTestUser,
    getTestUser,
    removeAllTestContact,
    createTestContact,
    getTestContact,
    createTestManyContacts,
    removeAllTestAddresses,
    createTestAddress,
    getTestAddress
}