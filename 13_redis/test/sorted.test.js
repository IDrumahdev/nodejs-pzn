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

    // npx jest test/sorted.test.js -t "sorted min in redis nodejs"
    it('sorted min in redis nodejs', async () => {
        await redis.zadd("names", 100, "Heri");
        await redis.zadd("names", 85, "Purwanto");
        await redis.zadd("names", 95, "ibnudirsan");

        expect(await redis.zcard("names")).toBe(3);

        const names = await redis.zrange("names", 0, -1);
        expect(names).toEqual(["Purwanto", "ibnudirsan", "Heri"]);

        expect(await redis.zpopmin("names")).toEqual(["Purwanto", "85"]);
        expect(await redis.zpopmin("names")).toEqual(["ibnudirsan", "95"]);
        expect(await redis.zpopmin("names")).toEqual(["Heri", "100"]);

        await redis.del("names");
    });

    // npx jest test/sorted.test.js -t "sorted max in redis nodejs"
    it('sorted max in redis nodejs', async () => {
        await redis.zadd("names", 100, "Heri");
        await redis.zadd("names", 85, "Purwanto");
        await redis.zadd("names", 95, "ibnudirsan");

        expect(await redis.zcard("names")).toBe(3);

        const names = await redis.zrange("names", 0, -1);
        expect(names).toEqual(["Purwanto", "ibnudirsan", "Heri"]);

        expect(await redis.zpopmax("names")).toEqual(["Heri", "100"]);
        expect(await redis.zpopmax("names")).toEqual(["ibnudirsan", "95"]);
        expect(await redis.zpopmax("names")).toEqual(["Purwanto", "85"]);

        await redis.del("names");
    });
});