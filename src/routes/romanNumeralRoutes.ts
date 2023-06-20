import express from 'express';

import { integerToRomanHandler } from './handlers/integerToRomanHandler';
export const romanNumberRouter = express.Router();

romanNumberRouter.get('/', integerToRomanHandler);
