import express from 'express';

import { integerToRomanHandler } from './romannumeral/integerToRomanHandler';
export const romanNumberRouter = express.Router();

romanNumberRouter.get('/', integerToRomanHandler);
