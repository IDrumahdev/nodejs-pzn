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

    it('hyper log log in redis nodejs', async () => {
        await redis.pfadd("visitors", "Heri", "Purwanto", "ibnudirsan");
        await redis.pfadd("visitors","Heri", "Fulan", "Fulana");
        await redis.pfadd("visitors","Ahsan","Fulan","Fulana");

        const total = await redis.pfcount("visitors");
        expect(total).toBe(6);
    });
});