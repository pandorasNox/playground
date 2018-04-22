
const mongoose = require('mongoose');
const LinkModel = require('./../../../src/models/link');
const {mongoUrl} = require('./../../../src/config/db');

// it('should adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });

let link;
beforeAll((done) => {
    mongoose.connect(mongoUrl);
    mongoose
        .connection
        .once('open', done)
    ;
});
// beforeAll(async () => await setupTest());
beforeEach(() => {
    link = new LinkModel(testData.defaultLink);
    return link.save();
});
afterEach((done) => {
    //delete defaultLink
    LinkModel
        .deleteOne({ reference_tag: 'ABCDEFG' }, done)
        // .findOne()
        // .delete()
    ;
});
afterAll((done) => {
    // await mongoose.disconnect(done);
    mongoose
        .connection
        .close(done)
    ;
});
// afterAll(async () => {
//     await teardownTest();
// });

const testData = {
    defaultLink: {
        reference_tag: "ABCDEFG",
        target: "exaample.com",
    },
    defaultQuery: LinkModel.where({ reference_tag: 'ABCDEFG' })
};

describe('Test the Link method', () => {

    it('should contain the default link', async (done) => {
        expect.assertions(1);
        try {
            linkResult = await LinkModel
                .where({ reference_tag: 'ABCDEFG' })
                .findOne()
            ;

            expect(linkResult.reference_tag).toBe("ABCDEFG");
        } catch (err) {
            // expect(err).toBeTruthy();
            // expect(err.message).toEqual('LinkModel.getLink is not a function');
        }

        done();
    });
});
