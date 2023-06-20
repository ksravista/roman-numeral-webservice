import request from 'supertest';
import server from '../../src/index';

describe('GET /romannumeral', () => {
    afterAll(async () => {
        server.close();
    });

    const requestResponseExpectHelper = async (
        numberToQuery: string,
        statusCodeToExpect: number,
        responseBodyToExpect: any
    ) => {
        const response = await request(server).get(
            `/romannumeral?query=${numberToQuery}`
        );
        expect(response.statusCode).toBe(statusCodeToExpect);
        expect(responseBodyToExpect).toMatchObject(response.body);
    };

    describe('happy path tests when numbers between 1 and 3999 are passed', () => {
        test('if 1 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('1', 200, {
                input: '1',
                output: 'I'
            });
        });

        test('if 9 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('9', 200, {
                input: '9',
                output: 'IX'
            });
        });

        test('if 2690 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('2690', 200, {
                input: '2690',
                output: 'MMDCXC'
            });
        });

        test('if 3999 is passed, we get a 200 response with the expected output', async () => {
            await requestResponseExpectHelper('3999', 200, {
                input: '3999',
                output: 'MMMCMXCIX'
            });
        });
    });
});
