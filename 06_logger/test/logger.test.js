import winston from 'winston';

test("create new logging", () => {
    
    const logger = winston.createLogger({});

    logger.log({
        level : "info",
        message: "Hello Logger"
    });

});