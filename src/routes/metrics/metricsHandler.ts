import { Request, Response } from 'express';
import { register } from '../romannumeral/integerToRomanHandler';

/**
 * Handler for the /metrics endpoint, which will be used my prometheus to read
 * metrics
 * @param req request passed from express
 * @param res response used to send the data to client.
 */
export async function metricsHandler(req: Request, res: Response) {
    res.setHeader('Content-type', register.contentType);
    res.end(await register.metrics());
}
