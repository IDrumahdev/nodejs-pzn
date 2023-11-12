import { web } from '../src/application/web';
import {createTestUser, removeTestUser, removeAllTestContact, createTestContact, getTestContact, createTestManyContacts} from '../test/test-util';
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

describe('PUT /api/contacts/:contactId', () => {

    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    // npx jest test/contact.test.js -t "update contact"
    it('update contact', async () => {
        const testContact = await getTestContact();
        
        const result = await supertest(web)
            .put('/api/contacts/' + testContact.id)
            .set('Authorization', 'test')
            .send({
                first_name: "Heri",
                last_name: "ibnudirsan",
                email: "ibnudirsan@gmail.com",
                phone: "8080810100101"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe("Heri");
        expect(result.body.data.last_name).toBe("ibnudirsan");
        expect(result.body.data.email).toBe("ibnudirsan@gmail.com");
        expect(result.body.data.phone).toBe("8080810100101");
    });

    // npx jest test/contact.test.js -t "update contact reject if request is invalid"
    it('update contact reject if request is invalid', async () => {
        const testContact = await getTestContact();
        
        const result = await supertest(web)
            .put('/api/contacts/' + testContact.id)
            .set('Authorization', 'test')
            .send({
                first_name: "",
                last_name: "",
                email: "ibnudirsan",
                phone: ""
            });

        expect(result.status).toBe(400);
    });

    // npx jest test/contact.test.js -t "update contact reject if contact is not found"
    it('update contact reject if contact is not found', async () => {
        const testContact = await getTestContact();
        
        const result = await supertest(web)
            .put('/api/contacts/' + (testContact.id + 1))
            .set('Authorization', 'test')
            .send({
                first_name: "Heri",
                last_name: "ibnudirsan",
                email: "ibnudirsan@gmail.com",
                phone: "8080810100101"
            });

        console.log(result);

        expect(result.status).toBe(404);
    });
});

describe('DELETE /api/contacts/:contactId', () => {

    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    // npx jest test/contact.test.js -t "delete contact"
    it('delete contact', async () => {
        let testContact   = await getTestContact();
        const result        = await supertest(web)
            .delete('/api/contacts/' + testContact.id)
            .set('Authorization', 'test');
        
        expect(result.status).toBe(200);
        expect(result.body.data).toBe("OK");

        testContact = await getTestContact();
        expect(testContact).toBeNull();
    });

    // npx jest test/contact.test.js -t "delete contact reject if contact is not found"
    it('delete contact reject if contact is not found', async () => {
        let testContact   = await getTestContact();
        const result        = await supertest(web)
            .delete('/api/contacts/' + (testContact.id + 1))
            .set('Authorization', 'test');
        
        expect(result.status).toBe(404);
    });
});

describe('GET /api/contacts', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestManyContacts();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    // npx jest test/contact.test.js -t "search contact without parameter"
    it('search contact without parameter', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .set('Authorization', 'test')

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(10);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(2);
        expect(result.body.paging.total_item).toBe(15);
    });

    // npx jest test/contact.test.js -t "search contact to page 2"
    it('search contact to page 2', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                page: 2
            })
            .set('Authorization', 'test')

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(5);
        expect(result.body.paging.page).toBe(2);
        expect(result.body.paging.total_page).toBe(2);
        expect(result.body.paging.total_item).toBe(15);
    });

    // npx jest test/contact.test.js -t "search contact using name"
    it('search contact using name', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                name: "test 1"
            })
            .set('Authorization', 'test')
            
        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(1);
        expect(result.body.paging.total_item).toBe(6);
    });

    // npx jest test/contact.test.js -t "search contact using email"
    it('search contact using email', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                email: "test1"
            })
            .set('Authorization', 'test')
            
            console.log(result);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(1);
        expect(result.body.paging.total_item).toBe(6);
    });

    // npx jest test/contact.test.js -t "search contact using phone"
    it('search contact using phone', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                phone: "098010291010101"
            })
            .set('Authorization', 'test')
            
            console.log(result);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(1);
        expect(result.body.paging.total_item).toBe(6);
    });
});
