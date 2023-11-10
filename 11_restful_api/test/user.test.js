import supertest from 'supertest';
import {web} from '../src/application/web.js';
import { prismaClient } from '../src/application/database.js';

describe('POST /api/users', () => {

    afterEach(async () => {
       await prismaClient.user.deleteMany({
            where: {
                username: "ibnudirsan"
            }
        });
    })

    it('register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "ibnudirsan",
                password: "rahasia",
                name: "Heri Purwanto"
            });
        
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("ibnudirsan");
        expect(result.body.data.name).toBe("Heri Purwanto");
        expect(result.body.data.password).toBeUndefined();
    });
});