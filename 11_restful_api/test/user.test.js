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

    // npx jest test/user.test.js -t "register new user"
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

    // npx jest test/user.test.js -t "reject if request is invalid"
    it('reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "",
                password: "",
                name: ""
            });
        
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    // npx jest test/user.test.js -t "reject if request is already registered"
    it('reject if request is already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: "ibnudirsan",
                password: "rahasia",
                name: "Heri Purwanto"
            });

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: "ibnudirsan",
                password: "rahasia",
                name: "Heri Purwanto"
            });
        
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});