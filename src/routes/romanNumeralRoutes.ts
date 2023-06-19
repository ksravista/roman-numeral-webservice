import express, { Request, Response } from 'express';

export const romanNumberRouter = express.Router();

romanNumberRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello from route!');
});
