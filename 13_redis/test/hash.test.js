import Redis from 'ioredis';

describe('Belajar Nodejs Redis', () => {
    
    let redis = null;

    beforeEach( async () => {
        redis = new Redis({
            host: "localhost",
            port: 6379,
            db: 0
        });
    })

    afterEach( async () => {
        await redis.quit();
    })

    // npx jest test/hash.test.js -t "hash in redis nodejs"
    it('hash in redis nodejs', async () => {
        await redis.hset("user:1", {
            id : "b729d349-1426-4c77-b748-c30531ae438c",
            name : "Heri",
            email : "ibnudirsan@gmail.com"
        });

        const user = await redis.hgetall("user:1");

        expect(user).toEqual({
            id : "b729d349-1426-4c77-b748-c30531ae438c",
            name : "Heri",
            email : "ibnudirsan@gmail.com"
        });

        await redis.del("user:1");
    });
});