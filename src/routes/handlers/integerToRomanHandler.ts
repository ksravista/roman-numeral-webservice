import { query,Request, Response } from 'express';

import {
    API_RESPONSE_CODES,
    CONTENT_TYPE_HEADER,
    JSON_CONTENT_TYPE} from '../../constants/apiConstants';
import { InvalidInputError } from '../../errors/InvalidInputError';
import { integerToRoman } from '../../utils/integerToRomanUtil';

const USAGE_WARNING = '/romannumeral?query=23';

export function integerToRomanHandler(req: Request, res: Response) {
    try {
        const { query } = req;

        res.setHeader(CONTENT_TYPE_HEADER, JSON_CONTENT_TYPE);
        if (!validateQueryObject(query)) {
            res.status(API_RESPONSE_CODES.BAD_REQUEST).send({
                errorMessage:
                    'Only accepted query param is (query), should be a valid integer',
                usage: USAGE_WARNING
            });
        }

        const reqInt = parseInt(query.query as string);

        const response = {
            input: String(reqInt),
            output: integerToRoman(reqInt)
        };

        res.status(API_RESPONSE_CODES.SUCCESS).send(response);
    } catch (err: any) {
        if (err instanceof InvalidInputError) {
            res.status(API_RESPONSE_CODES.BAD_REQUEST).send({
                errorMessage:
                    'query param should be between 1 and 3999 inclusive',
                usage: USAGE_WARNING
            });
        } else {
            res.status(API_RESPONSE_CODES.INTERNAL_SERVER_ERROR).send({
                errorMessage: 'Internal Server Error'
            });
        }
    }
}

/**
 * Helper function to validate the schema of the query params for the route
 * @param queryObject query params passed in the API routes
 * @returns true if the only key is 'query', false otherwise
 */
function validateQueryObject(queryObject: any): boolean {
    const objectKeys = Object.keys(queryObject);
    return (
        objectKeys.length === 1 &&
        objectKeys[0] === 'query' &&
        !isNaN(parseInt(queryObject.query))
    );
}
