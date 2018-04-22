
const express = require('express');
const indexRouter = express.Router();

const LinkModel = require('./../../models/link')

//---

//require routes
const links = require('./links');

const v1 = express();

//v1 index route
indexRouter.get('/', function(req, res, next) {
    res.status(404).redirect(process.env.DEFAULT_404_redirect);
});

indexRouter.get('/:hash', async function(req, res, next) {
    const { hash } = req.params;

    let linkResult;
    try {
        linkResult = await LinkModel
            .where({ reference_tag: hash })
            .findOne()
        ;

    } catch (err) {
        res.status(404).redirect(process.env.DEFAULT_404_redirect);
    }

    if (linkResult === null) {
        res.status(404).redirect(process.env.DEFAULT_404_redirect);
        return;
    }

    res.status(301).redirect(linkResult.target);
});

//setup routs
v1.use('/', indexRouter);
v1.use('/links', links);

module.exports = v1;
