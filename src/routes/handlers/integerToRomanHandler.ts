import { Request, Response } from 'express';
import { integerToRoman } from '../../utils/integerToRomanUtil';
import { API_RESPONSE_CODES, JSON_CONTENT_TYPE, CONTENT_TYPE_HEADER } from '../../constants/apiConstants';

export function integerToRomanHandler(req: Request, res: Response) {
    const query  = req.query.query as string;

    const response = {
        input: query,
        output: integerToRoman(parseInt(query))
    };

    res.setHeader(CONTENT_TYPE_HEADER, JSON_CONTENT_TYPE);
    res.status(API_RESPONSE_CODES.SUCCESS).send(response);
}
