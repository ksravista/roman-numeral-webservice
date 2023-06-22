import express from 'express';

import { metricsHandler } from './metricsHandler';
export const metricsRoute = express.Router();

metricsRoute.get('/', metricsHandler);
