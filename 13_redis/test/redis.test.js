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

    // npx jest test/string.test.js -t "Conected Redis"
    it('Conected Redis', async () => {
        const pong = await redis.ping();
        expect(pong).toBe("PONG");
    });
});