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

    // Pertama di jalankan
    // npx jest test/pubsub.test.js -t "pubsub in redis nodejs"
    it('pubsub in redis nodejs', async () => {
        redis.subscribe("channel-1");

        redis.on("message", (channel, message) => {
            console.info(`Receive message from channel ${channel} with message ${message}`);
        });

        // wait 60 secands
        await new Promise(resolve => setTimeout(resolve, 60000))
    }, 60000);

    // kedua di jalankan
    // npx jest test/pubsub.test.js -t "public to pubsub"
    it('public to pubsub', async () => {
        for (let i = 0; i < 10; i++) {
            await redis.publish("channel-1", `Hello Word ${i}`)
        }
    });
});