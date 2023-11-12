import supertest from "supertest";
import { createTestContact, createTestUser, getTestContact, removeAllTestAddresses, removeAllTestContact, removeTestUser } from "./test-util.js";
import { web } from "../src/application/web.js";

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