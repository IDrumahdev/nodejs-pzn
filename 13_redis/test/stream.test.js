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

    it('stream in redis nodejs', async () => {
        for (let i = 0; i < 10; i++) {
            await redis.xadd("members", "*", "name", `ibnudirsan ${i}`, "address", "indonesia");
        }
    });

    it('consumer and consumer group', async () => {
        await redis.xgroup("CREATE", "members", "group-1", "0");
        await redis.xgroup("CREATECONSUMER", "members", "group-1", "consumer-1");
        await redis.xgroup("CREATECONSUMER", "members", "group-1", "consumer-2");
    });

    it('consumer stream', async () => {
        const result = await redis.xreadgroup("GROUP", "group-1", "consumer-1", "COUNT", 2, "BLOCK", 3000, "STREAMS", "members", ">");
        
        expect(result).not.toBeNull();

        console.info(JSON.stringify(result, null, 2));
    });
});