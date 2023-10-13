import winston from 'winston';

test("create new logger file transport", () => {
    
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            })
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
    logger.info("Hello Info");
    logger.http("Hello HTTP");
    logger.verbose("Hello Verbose");
    logger.debug("Hello Debug");
    logger.silly("Hello Silly");

});