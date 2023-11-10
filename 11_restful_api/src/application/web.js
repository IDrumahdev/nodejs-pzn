import express from 'express';
import { publicRouter } from '../route/public-api.js';
import { middlewareError } from '../middleware/error-middleware.js';

export const web = express();
web.use(express.json());

web.use(publicRouter);

web.use(middlewareError);