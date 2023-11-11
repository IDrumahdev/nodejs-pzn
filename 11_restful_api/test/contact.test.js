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
});


