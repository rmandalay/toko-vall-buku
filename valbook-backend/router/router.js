'use strict'

/**
* Initialization Express
* Require Controller
* Main Endpoint
* Module Exports
*/ 

const express = require('express');
const { Controller } = require('../Controller/controller');
const router = express.Router();
const {bookRouter} = require('./bookRouter');

// Controller

// Endpoint : Home
router.get('/', Controller.Homepage);
router.use('/books', bookRouter);

// export module
module.exports = {router};
