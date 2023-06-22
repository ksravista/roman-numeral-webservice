import express from 'express';

import { logHandler } from './loggingHandler';
export const logRoute = express.Router();

logRoute.get('/', logHandler);
