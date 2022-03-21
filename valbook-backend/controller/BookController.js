'use strict'

/**
 * Class Declaration
 * Module Export Class 
 * Mobile Export Class
*/ 


class BookController{

    static FindAllBooks(req, res) {
        res.send('Hello ini dari Books controller');
    }

}

module.exports = {
    BookController,
};