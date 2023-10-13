import winston from 'winston';
import dailyRotateFile from 'winston-daily-rotate-file';

test("create new logger daily rotate file", () => {
    
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({}),
            new dailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "14d"
            })
        ]
    });

    for (let i = 0; i < 1544; i++) {        
        logger.error(`Hello Error ${i}`);
        logger.warn(`Hello Warn ${i}`);
        logger.info(`Hello Info ${i}`);
        logger.http(`Hello HTTP ${i}`);
        logger.verbose(`Hello Verbose ${i}`);
        logger.debug(`Hello Debug ${i}`);
        logger.silly(`Hello Silly ${i}`);
    }
    

});