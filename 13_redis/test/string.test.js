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

    // npx jest test/string.test.js -t "type data string"
    it('type data string', async () => {
        await redis.setex("name", 2, "ibnudirsan");
        let name = await redis.get("name");
        expect(name).toBe("ibnudirsan");

        await new Promise(resolve => setTimeout(resolve, 3000));
        name = redis.get("name");
        expect(name).toBeNull;
    });
});