import request from 'supertest';

import server from '../../src/index';

describe('GET /romannumeral', () => {
    afterAll(async () => {
        server.close();
    });

    const requestResponseExpectHelper = async (
        queryString: string,
        statusCodeToExpect: number,
        responseBodyToExpect?: any
    ) => {
        const response = await request(server).get(
            `/romannumeral?${queryString}`
        );
        expect(response.statusCode).toBe(statusCodeToExpect);
        if (responseBodyToExpect) {
            expect(responseBodyToExpect).toMatchObject(response.body);
        }
    };

    describe('happy path tests when numbers between 1 and 3999 are passed', () => {
        test('if 1 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('query=1', 200, {
                input: '1',
                output: 'I'
            });
        });

        test('if 9 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('query=9', 200, {
                input: '9',
                output: 'IX'
            });
        });

        test('if 2690 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('query=2690', 200, {
                input: '2690',
                output: 'MMDCXC'
            });
        });

        test('if 3999 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('query=3999', 200, {
                input: '3999',
                output: 'MMMCMXCIX'
            });
        });
    });

    describe('Invalid input test', () => {
        test('if -1 is passed, we get a 400 response with the expected output', async () => {
            await requestResponseExpectHelper('query=-1', 400);
        });

        test('if 4000 is passed, we get a 400 response with the expected output', async () => {
            await requestResponseExpectHelper('query=4000', 400);
        });

        test('if a query param other than (query) is passed, we get a 400 response with the expected output', async () => {
            await requestResponseExpectHelper('shouldFail=4000', 400);
        });

        test('if a another query param + (query) is passed, we get a 400 response with the expected output', async () => {
            await requestResponseExpectHelper('query=2&shouldFail=4000', 400);
        });

        test('if nothing is passed, we get a 400 response with the expected output', async () => {
            await requestResponseExpectHelper('', 400);
        });

        test('if a string is passed, we get a 400 response with the expected output', async () => {
            await requestResponseExpectHelper('query=shouldFail', 400);
        });
    });
});
