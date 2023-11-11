import supertest from 'supertest';
import {web} from '../src/application/web.js';
import { createTestUser, removeTestUser } from './test-util.js';

describe('POST /api/users', () => {

    afterEach(async () => {
       await removeTestUser();
    })

    // npx jest test/user.test.js -t "register new user"
    it('register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "test",
                password: "rahasia",
                name: "test"
            });
        
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
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
                username: "test",
                password: "rahasia",
                name: "test"
            });

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: "test",
                password: "rahasia",
                name: "test"
            });
        
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});


describe('POST /api/users/login', () => {

    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    // npx jest test/user.test.js -t "User Login Test"
    it('User Login Test', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "test",
                password: "rahasia"
            });
        
        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("test");
    });

    // npx jest test/user.test.js -t "User Login reject if request is invalid"
    it('User Login reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "",
                password: ""
            });
        
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    // npx jest test/user.test.js -t "User Login reject if password is wrong"
    it('User Login reject if password is wrong', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "test",
                password: "salah"
            });
        
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

    // npx jest test/user.test.js -t "User Login reject if username is wrong"
    it('User Login reject if username is wrong', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "salah",
                password: "rahasia"
            });
        
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});


describe('GET /api/users/current', () => {
    
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    // npx jest test/user.test.js -t "get data user current"
    it('get data user current', async () => {
        const result = await supertest(web)
            .get('/api/users/current')
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');
    });

    // npx jest test/user.test.js -t "get user current reject if token invalid"
    it('get user current reject if token invalid', async () => {
        const result = await supertest(web)
            .get('/api/users/current')
            .set('Authorization', 'salah');

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined()
    });
});