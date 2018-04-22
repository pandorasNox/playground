var express = require('express');
var router = express.Router();

//util
const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;
const has = require('lodash.has');
const validUrl = require('valid-url');
const rp = require('request-promise');
const shortHash = require('short-hash');

//db-models
const LinkModel = require('./../../../models/link')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({"msg": "Hello World Links"});
});

router.post('/', async function(req, res, next) {

    //break condition
    if (isEmptyObject(req.body)) {
        res
            .status(400)
            .send({errors:[{code:'emptyRequestBody', msg:'Missing request body.'}]});
        return;
    }

    //break condition - check for property completness
    if (false === has(req.body, 'url')) {
        res
            .status(400)
            .send({errors:[{code:'missingFieldUrl', msg:'The body must contain an url property.'}]});
        return;
    }

    const { url } = req.body;

    //break condition - validat url
    if (typeof validUrl.isWebUri(url) === "undefined") {
        res
            .status(400)
            .send({errors:[{code:'invalidUrl', msg:'The given url has not a valid format.'}]});
        return;
    }

    //break condition - is url reachable
    try {
        var options = {
            method: 'GET',
            uri: url,
            resolveWithFullResponse: true    //  <---  <---  <---  <---
        };
        const urlResponse = await rp(options);
        if (urlResponse.statusCode !== 200) {
            res
                .status(400)
                .send({errors:[{code:'unreachableUrl', msg:'The given url is not reachable.'}]});
            return;
        }
    } catch (e) {
        res
            .status(400)
            .send({errors:[{code:'unreachableUrl', msg:'The given url is not reachable.'}]});
        return;
    }

    const link = new LinkModel({
        reference_tag: shortHash(url),
        target: url,
    });

    let linkDoc;
    try {
        linkDoc = await link.save();
    } catch (error) {
        res
            .status(500)
            .send({errors:[{code:'databaseError', msg:'Couldn\'t save into the database.'}]});
        return;
    }

    res
        .status(200)
        .send({
            url: linkDoc.target,
            hash: linkDoc.reference_tag,
            id: linkDoc.id,
        })
    ;
});

module.exports = router;
