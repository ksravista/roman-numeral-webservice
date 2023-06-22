import { Request, Response } from 'express';
import fs from 'fs';

/**
 * handler function for /logs endpoint which will read 
 * the log files and return all the content from the logs file
 * @param req request passed from express
 * @param res response used to send the data to client.
 */
export function logHandler(req: Request, res: Response) {
    const data = fs.readFileSync('combined.log', 'utf8');
    res.send(data);
}
