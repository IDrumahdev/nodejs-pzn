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

    // npx jest test/list.test.js -t "list in redis"
    it('list in redis', async () => {
        await redis.rpush("name", "Heri");
        await redis.rpush("name","Purwanto");
        await redis.rpush("name","ibnudirsan");

        expect(await redis.llen("name")).toBe(3);
        
        const name = await redis.lrange("name", 0, -1);

        expect(name).toEqual(["Heri","Purwanto","ibnudirsan"]);

        expect(await redis.lpop("name")).toBe("Heri");
        expect(await redis.rpop("name")).toBe("ibnudirsan");

        expect(await redis.llen("name")).toBe(1);

        await redis.del("name");
    });
});