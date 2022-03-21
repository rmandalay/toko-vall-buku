'use strict'

/**
* Initialization Express
* Require Controller
* Main Endpoint
* Module Exports
*/ 

// 
const express = require('express');
const router = express.Router();

// Controller
const { Controller } = require('../Controller/Controller');

// Endpoint : Home
router.get('/', Controller.Homepage);



// export module
module.exports = { router };
