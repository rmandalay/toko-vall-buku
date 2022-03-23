'use strict'

/**
 * Class Declaration
 * Write Export Class 
 * Add Model to Controller
 * Mobile Export Class
*/ 

const { Book } = require('../model/Book');

class BookController{

    static FindAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
            if (err) {
                console.log('Controller error');
            } else {
                res.json(data);
            }
        });
    }
    static FindAllBooksById(req, res) {
        const { id } = req.params;
        Book.showBookById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }    
        });
    }
}


module.exports = {
    BookController
};
