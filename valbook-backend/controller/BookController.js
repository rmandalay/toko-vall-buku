'use strict'

const e = require('express');
/**
 * Class Declaration
 * Write Export Class 
 * Add Model to Controller
 * Mobile Export Class
*/ 

const {Book} = require('../model/Book');

class BookController{
    static FindAllBooks(req, res) {
        Book.showAllBook((err,data) => {
            if (err) {
                console.log('Controller error');
            } else {
                console.log('data', data);
            }
        })
    }
}

module.exports = {
    BookController,
};
