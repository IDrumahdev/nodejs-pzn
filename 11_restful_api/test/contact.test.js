import { web } from '../src/application/web';
import {createTestUser, removeTestUser, removeAllTestContact, createTestContact, getTestContact} from '../test/test-util';
import supertest from 'supertest';

describe('POST /api/contacts', () => {

    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    // npx jest test/contact.test.js -t "create contact"
    it('create contact', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set('Authorization', 'test')
            .send({
                first_name: "test",
                last_name: "test",
                email: "test@rumahdev.pro",
                phone: "08182721901"
            });

                expect(result.status).toBe(200);
                expect(result.body.data.id).toBeDefined();
                expect(result.body.data.first_name).toBe("test");
                expect(result.body.data.last_name).toBe("test");
                expect(result.body.data.email).toBe("test@rumahdev.pro");
                expect(result.body.data.phone).toBe("08182721901");
    });

    // npx jest test/contact.test.js -t "create contact reject if data invalid"
    it('create contact reject if data invalid', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set('Authorization', 'test')
            .send({
                first_name: "",
                last_name: "test",
                email: "test",
                phone: "08182721901009079889689686786876869869"
            });

                expect(result.status).toBe(400);
                expect(result.body.errors).toBeDefined();
    });

});

describe('GET /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    // npx jest test/contact.test.js -t "get contact"
    it('get contact', async () => {
        const testContact   = await getTestContact();
        const result        = await supertest(web)
            .get('/api/contacts/' + testContact.id)
            .set('Authorization', 'test')

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe(testContact.first_name);
        expect(result.body.data.last_name).toBe(testContact.last_name);
        expect(result.body.data.email).toBe(testContact.email);
        expect(result.body.data.phone).toBe(testContact.phone);
    });

    // npx jest test/contact.test.js -t "get contact 404 if contact id is not found"
    it('get contact 404 if contact id is not found', async () => {
        const testContact   = await getTestContact();
        const result        = await supertest(web)
            .get('/api/contacts/' + (testContact.id+1))
            .set('Authorization', 'test')

        expect(result.status).toBe(404);
    });
});
