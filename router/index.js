'use strict';

const bodyParser = require('body-parser');
const express = require('express');

module.exports = options => {
  const router = express.Router();

  router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  router.use(bodyParser.json());

  router.route('/api/events/github/branch-or-tag-deletion/:user/:repo/:branch').post(require('./events/github/branch-or-tag-deletion')(options));

  return router;
};
