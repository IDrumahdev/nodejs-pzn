import winston from 'winston';

test("create new logger level", () => {
    
    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level : "error",message: "Hello Error"});
    logger.error("Hello Error");
    logger.log({level : "warn",message: "Hello Warn"});
    logger.warn("Hello Warn");
    logger.log({level : "info",message: "Hello Info"});
    logger.info("Hello Info");
    logger.log({level : "http",message: "Hello HTTP"});
    logger.http("Hello HTTP");
    logger.log({level : "verbose",message: "Hello Verbose"});
    logger.verbose("Hello Verbose");
    logger.log({level : "debug",message: "Hello Debug"});
    logger.debug("Hello Debug");
    logger.log({level : "silly",message: "Hello Silly"});
    logger.silly("Hello Silly");

});