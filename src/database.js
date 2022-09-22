const mysql = require('mysql');


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mani*123',
    database: 'practice'
});

con.connect = function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected successfully');
    }
}

module.exports(database);