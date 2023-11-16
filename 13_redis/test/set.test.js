import Redis from 'ioredis';

describe('Belajar Nodejs Redis', () => {
    
    let redis = null;

    beforeEach(async () => {
        redis = new Redis({
            host: "localhost",
            port: 6379,
            db: 0
        });
    })

    afterEach(async () => {
        await redis.quit();
    })

    // npx jest test/set.test.js -t "set in redis nodejs"
    it('set in redis nodejs', async () => {
        await redis.sadd("names","Heri");
        await redis.sadd("names","Heri");
        await redis.sadd("names","Purwanto");
        await redis.sadd("names","Purwanto");
        await redis.sadd("names","ibnudirsan");
        await redis.sadd("names","ibnudirsan");

        expect(await redis.scard("names")).toBe(3);
        
        const names = await redis.smembers("names");
        expect(names).toEqual(["ibnudirsan", "Purwanto", "Heri"]);

        await redis.del("names");
    });
});