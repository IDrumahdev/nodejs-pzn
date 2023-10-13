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
            handleRejections: true,
            filename: "application-exception-rejection-error.log"
        })
    ]
});

async function callAsync() {
    return Promise.reject("Ups");
}

callAsync();