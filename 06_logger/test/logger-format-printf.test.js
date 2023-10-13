import winston from 'winston';

test("create new logger format printf", () => {
    
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.printf(log => {
            return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
        }),
        transports: [
            new winston.transports.Console({})
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