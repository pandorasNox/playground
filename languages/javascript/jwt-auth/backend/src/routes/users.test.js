
const app = require('./../app');
const request = require('supertest');

describe('Test the root path', () => {
    it('should response the GET method', async () => {
        expect.assertions(2);
        try {
            const response = await request(app).get('/users');
            expect(response.statusCode).toBe(200);
            expect(response.body).toBe('respond with a resource');
        } catch (e) {

        }
    });
});

/**
 * response.body
 * response.header
 * statusCode
 * status
 * type: 'application/json'
 * charset: 'utf-8'
 * text
 */
