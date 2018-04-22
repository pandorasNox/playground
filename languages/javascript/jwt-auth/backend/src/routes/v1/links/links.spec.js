const ObjectId = require('mongoose').Types.ObjectId; 
const app = require('./../../../app');
const request = require('supertest');

//util
const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

//db models
const LinkModel = require('./../../../models/link')

// ---

let idToBeDeleted = '';

afterAll((done) => {
    if (idToBeDeleted.length === 0) {
        done();
        return;
    }

    LinkModel
        .deleteOne({ _id: new ObjectId(idToBeDeleted) }, done)
    ;
});

describe('Test the links path', () => {

    it('should respond for POST method with empty body with 400 status code and errors body', async () => {
        try {
            const response = await request(app)
                .post('/v1/links')
                .set('Content-type', 'application/json; charset=utf-8')
            ;
            expect(response.statusCode).toBe(400);
            expect(isEmptyObject(response.body)).toBe(false);
            const { errors } = response.body;
            expect(typeof errors !== "undefined").toBe(true);
            expect(Array.isArray(errors)).toBe(true);
            expect(errors.length).toBe(1);
            const error = errors[0];
            expect(error.code).toBe('emptyRequestBody');
        } catch(e) {
            throw e;
        }
    });

    it('should respond for POST method with missing property in the body with 400 status code and errors body', async () => {
        try {
            const response = await request(app)
                .post('/v1/links')
                .set('Content-type', 'application/json; charset=utf-8')
                .send({ foo: 'bar' })
            ;
            expect(response.statusCode).toBe(400);
            expect(isEmptyObject(response.body)).toBe(false);
            const { errors } = response.body;
            expect(typeof errors !== "undefined").toBe(true);
            expect(Array.isArray(errors)).toBe(true);
            expect(errors.length).toBe(1);
            const error = errors[0];
            expect(error.code).toBe('missingFieldUrl');
        } catch (e) {
            throw e;
        }
    });

    it('should respond for POST method with invalid url with 400 status code and errors body', async () => {
        try {
            const response = await request(app)
                .post('/v1/links')
                .set('Content-type', 'application/json; charset=utf-8')
                .send({ url: 'foobar' })
            ;
            expect(response.statusCode).toBe(400);
            expect(isEmptyObject(response.body)).toBe(false);
            const { errors } = response.body;
            expect(typeof errors !== "undefined").toBe(true);
            expect(Array.isArray(errors)).toBe(true);
            expect(errors.length).toBe(1);
            const error = errors[0];
            expect(error.code).toBe('invalidUrl');
        } catch (e) {
            throw e;
        }
    });

    it('should respond for POST method with unreachable url with 400 status code and errors body', async () => {
        try {
            const response = await request(app)
                .post('/v1/links')
                .set('Content-type', 'application/json; charset=utf-8')
                .send({ url: 'http://foobar' })
            ;
            expect(response.statusCode).toBe(400);
            expect(isEmptyObject(response.body)).toBe(false);
            const { errors } = response.body;
            expect(typeof errors !== "undefined").toBe(true);
            expect(Array.isArray(errors)).toBe(true);
            expect(errors.length).toBe(1);
            const error = errors[0];
            expect(error.code).toBe('unreachableUrl');
        } catch (e) {
            throw e;
        }
    });

    it('should respond for POST method with reachable url with 200 status code entry body', async () => {
        try {
            const response = await request(app)
                .post('/v1/links')
                .set('Content-type', 'application/json; charset=utf-8')
                .send({ url: 'http://example.com' })
            ;
            expect(response.statusCode).toBe(200);
            expect(isEmptyObject(response.body)).toBe(false);
            const {url, hash, id} = response.body;
            expect(typeof url === "string").toBe(true);
            expect(typeof hash === "string").toBe(true);
            expect(typeof id === "string").toBe(true);
            expect(url).toBe('http://example.com');
            expect(hash.length > 0).toBe(true);
            expect(id.length > 0).toBe(true);

            //put id into global
            idToBeDeleted = id;
        } catch (e) {
            throw e;
        }
    });

    //it should idToBeDeleted found in db

});
