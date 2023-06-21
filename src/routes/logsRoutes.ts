import express from 'express';

import { logHandler } from './handlers/logHandler';
export const logRoute = express.Router();

logRoute.get('/', logHandler);
