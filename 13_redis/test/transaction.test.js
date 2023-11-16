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

    // npx jest test/transaction.test.js -t "transaction in redis nodejs"
    it('transaction in redis nodejs', async () => {
       const transaction = redis.multi();
       
       transaction.setex("name", 2, "ibnudirsan");
       transaction.setex("address", 2, "indonesia");

       await transaction.exec();

       expect(await redis.get("name")).toBe("ibnudirsan");
       expect(await redis.get("address")).toBe("indonesia");
    });
});