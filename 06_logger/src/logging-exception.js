import winston from 'winston';
    
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
            level: "error",
            handleExceptions: true,
            filename: "application-exception-error.log"
        })
    ]
});

hello();