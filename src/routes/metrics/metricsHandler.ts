import { Request, Response } from 'express';

/**
 * Handler for the /metrics endpoint, which will be used my prometheus to read
 * metrics
 * @param req request passed from express
 * @param res response used to send the data to client.
 */
export function metricsHandler(req: Request, res: Response) {
    res.send("Hello");
}
