const mysql = require('mysql');
const DBConfig = require('../config/db.config');

// Create Connection

const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB
})

//
 
connectDB.connect(err => {
    if(err) throw err;
    console.log("Database Connected");
})

module.exports = connectDB;