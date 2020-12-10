
//===================INSTRUCTIONS ON FILE FOR CONNECTION.JS==========>

// 2. Create a `connection.js` file inside `config` directory.

//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.

//    * Export the connection.

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "nikekj43",
    database: "burgers_db",
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

