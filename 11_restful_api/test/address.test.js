import supertest from "supertest";
import { web } from "../src/application/web.js";
import {    createTestAddress,
            createTestContact,
            createTestUser,
            getTestAddress,
            getTestContact,
            removeAllTestAddresses,
            removeAllTestContact,
            removeTestUser } from "./test-util.js";

describe('POST /api/contacts/:contactId/addresses', () => {
    
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });

    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });

    it('create adress', async () => {

        // npx jest test/address.test.js -t "create adress"
        const testContact   = await getTestContact();
        const result        = await supertest(web)
            .post('/api/contacts/' + testContact.id + '/addresses')
            .set('Authorization', 'test')
            .send({
                street: "Jalan test",
                city: "Kota Test",
                province: "Provinsi Test",
                country: "Indonesia",
                postal_code: "16443"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.street).toBe("Jalan test");
        expect(result.body.data.city).toBe("Kota Test");
        expect(result.body.data.province).toBe("Provinsi Test")
        expect(result.body.data.country).toBe("Indonesia");
        expect(result.body.data.postal_code).toBe("16443");
    });

    it('create adress reject if address request is invalid', async () => {

        // npx jest test/address.test.js -t "create adress reject if address request is invalid"
        const testContact   = await getTestContact();
        const result        = await supertest(web)
            .post('/api/contacts/' + testContact.id + '/addresses')
            .set('Authorization', 'test')
            .send({
                street: "Jalan test",
                city: "Kota Test",
                province: "Provinsi Test",
                country: "",
                postal_code: ""
            });

        expect(result.status).toBe(400);
    });

    it('create adress reject if contact not found', async () => {

        // npx jest test/address.test.js -t "create adress reject if contact not found"
        const testContact   = await getTestContact();
        const result        = await supertest(web)
            .post('/api/contacts/' + (testContact.id + 1) + '/addresses')
            .set('Authorization', 'test')
            .send({
                street: "Jalan test",
                city: "Kota Test",
                province: "Provinsi Test",
                country: "",
                postal_code: ""
            });

        expect(result.status).toBe(404);
    });
});

describe('GET /api/contacts/:contactId/addresses/:addressId', () => {

    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });

    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });

    // npx jest test/address.test.js -t "Get Address by ContactID and AddressID"
    it('Get Address by ContactID and AddressID', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get('/api/contacts/'+ testContact.id + '/addresses/' + testAddress.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.street).toBe("Jalan Test");
        expect(result.body.data.city).toBe("Kota Test");
        expect(result.body.data.province).toBe("Provinsi Test")
        expect(result.body.data.country).toBe("Indonesia");
        expect(result.body.data.postal_code).toBe("16433");
    });

    // npx jest test/address.test.js -t "Get contact reject if contact is not found"
    it('Get contact reject if contact is not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get('/api/contacts/'+ (testContact.id + 1) + '/addresses/' + testAddress.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });

    // npx jest test/address.test.js -t "Get contact reject if address is not found"
    it('Get contact reject if address is not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get('/api/contacts/'+ testContact.id + '/addresses/' + (testAddress.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
});

describe('PUT /api/contacts/:contactId/addresses/:addressId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });

    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });
    
    // npx jest test/address.test.js -t "updtae address by ContactID and AddressID"
    it('updtae address by ContactID and AddressID', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put('/api/contacts/'+ testContact.id + '/addresses/' + testAddress.id)
            .set('Authorization', 'test')
            .send({
                street: "Jalan Test Update",
                city: "Kota Test Update",
                province: "Provinsi Test Update",
                country: "Negara Kesatuan Republik Indonesia",
                postal_code: "12280"
            });
        
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testAddress.id);
        expect(result.body.data.street).toBe("Jalan Test Update");
        expect(result.body.data.city).toBe("Kota Test Update");
        expect(result.body.data.province).toBe("Provinsi Test Update");
        expect(result.body.data.country).toBe("Negara Kesatuan Republik Indonesia");
        expect(result.body.data.postal_code).toBe("12280");
    });

    // npx jest test/address.test.js -t "updtae address reject if data invalid"
    it('updtae address reject if data invalid', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put('/api/contacts/'+ testContact.id + '/addresses/' + testAddress.id)
            .set('Authorization', 'test')
            .send({
                street: "Jalan Test Update",
                city: "Kota Test Update",
                province: "Provinsi Test Update",
                country: "",
                postal_code: ""
            });
        
        expect(result.status).toBe(400);
    });

    // npx jest test/address.test.js -t "updtae address reject if address not found"
    it('updtae address reject if address not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put('/api/contacts/'+ testContact.id + '/addresses/' + (testAddress.id + 1))
            .set('Authorization', 'test')
            .send({
                street: "Jalan Test Update",
                city: "Kota Test Update",
                province: "Provinsi Test Update",
                country: "Negara Kesatuan Republik Indonesia",
                postal_code: "12280"
            });
        
        expect(result.status).toBe(404);
    });

    // npx jest test/address.test.js -t "updtae address reject if contact not found"
    it('updtae address reject if contact not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put('/api/contacts/'+ (testContact.id + 1) + '/addresses/' + testAddress.id)
            .set('Authorization', 'test')
            .send({
                street: "Jalan Test Update",
                city: "Kota Test Update",
                province: "Provinsi Test Update",
                country: "Negara Kesatuan Republik Indonesia",
                postal_code: "12280"
            });
        
        expect(result.status).toBe(404);
    });
});

describe('DELETE /api/contacts/:contactId/addresses/:addressId', () => {

    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });

    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });
    
    // npx jest test/address.test.js -t "delete address By Contact ID and Address Id"
    it('delete address By Contact ID and Address Id', async () => {
        const testContact   = await getTestContact();
        let testAddress     = await getTestAddress();

        const result = await supertest(web)
            .delete('/api/contacts/'+ testContact.id + '/addresses/' + testAddress.id)
            .set('Authorization', 'test');
        
        expect(result.status).toBe(200);
        expect(result.body.data).toBe("OK");

        testAddress = await getTestAddress();
        expect(testAddress).toBeNull();
    });

    // npx jest test/address.test.js -t "delete address reject if address is not found"
    it('delete address reject if address is not found', async () => {
        const testContact   = await getTestContact();
        let testAddress     = await getTestAddress();

        const result = await supertest(web)
            .delete('/api/contacts/'+ testContact.id + '/addresses/' + (testAddress.id + 1))
            .set('Authorization', 'test');
        
        expect(result.status).toBe(404);
    });

    // npx jest test/address.test.js -t "delete address reject if contact is not found"
    it('delete address reject if contact is not found', async () => {
        const testContact   = await getTestContact();
        let testAddress     = await getTestAddress();

        const result = await supertest(web)
            .delete('/api/contacts/'+ (testContact.id + 1) + '/addresses/' + testAddress.id)
            .set('Authorization', 'test');
        
        expect(result.status).toBe(404);
    });
});

describe('GET /api/contacts/:contactId/addresses', () => {

    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });

    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });

    // npx jest test/address.test.js -t "get list address"
    it('get list address', async () => {
        const testContact   = await getTestContact();

        const result = await supertest(web)
            .get('/api/contacts/'+ testContact.id + '/addresses/')
            .set('Authorization', 'test')
        
        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(1);
    });

    // npx jest test/address.test.js -t "get list address rejct if contact is not found"
    it('get list address rejct if contact is not found', async () => {
        const testContact   = await getTestContact();

        const result = await supertest(web)
            .get('/api/contacts/'+ (testContact.id + 1) + '/addresses/')
            .set('Authorization', 'test')
        
        expect(result.status).toBe(404);
    });
});