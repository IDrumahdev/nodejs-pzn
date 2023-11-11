import { web } from '../src/application/web';
import {createTestUser, removeTestUser, removeAllTestContact} from '../test/test-util';
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


