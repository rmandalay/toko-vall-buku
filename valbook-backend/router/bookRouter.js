'use strict'

/**
* Initialization Express
* Require Controller
* Main Endpoint
* Module Exports
*/ 

// Initialization
const express = require('express');
const bookRouter = express.Router();

// Controller
const { BookController } = require('../Controller/bookController');

// Endpoint : Home
bookRouter.get('/', BookController.FindAllBooks);

// export module
module.exports = { bookRouter };