'use strict'

/**
 * Class Declaration
 * Module Export Class 
 * Mobile Export Class
*/ 

class Controller{

    static Homepage(req, res) {
        res.send('Hello ini dari homepage');
    }

}

module.exports = {
    Controller,
};