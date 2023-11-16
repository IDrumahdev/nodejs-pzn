import Redis from 'ioredis';

describe('Belajar Nodejs Redis', () => {
    
    let redis = null;

    beforeEach(async () => {
        redis = new Redis({
            host: "localhost",
            port: 6379,
            db: 0
        });
    });

    afterEach(async () => {
        await redis.quit();
    });

    // npx jest test/pipeline.test.js -t "pipeline in redis nodejs"
    it('pipeline in redis nodejs', async () => {
        const pipeline = redis.pipeline();

        pipeline.setex("name", 2, "ibnudirsan");
        pipeline.setex("address", 2, "Indonesia");

        await pipeline.exec();

        expect(await redis.get("name")).toBe("ibnudirsan");
        expect(await redis.get("address")).toBe("Indonesia");
    });
});