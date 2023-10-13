import winston from 'winston';

test("create new logging with console transport", () => {
    
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level : "info",
        message: "Hello Logger"
    });

});