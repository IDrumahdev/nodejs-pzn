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

    // npx jest test/geo-point.test.js -t "geo point in redis nodejs"
    it('geo point in redis nodejs', async () => {
        await redis.geoadd("sellers", 106.822673, -6.177616, "Toko A");
        await redis.geoadd("sellers", 106.820646, -6.175366, "Toko B");

        const distance = await redis.geodist("sellers", "Toko A", "Toko B", "KM");
        expect(distance).toBe(String(0.3361));

        const result = await redis.geosearch("sellers", "fromlonlat", 106.822443, -6.176966, "byradius", 5, "KM");
        expect(result).toEqual(["Toko A", "Toko B"]);
    });
});