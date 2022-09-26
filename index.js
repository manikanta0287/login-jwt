const express = require("express");
const app = express();

const mysql = require('mysql');

app.use(express.json());
const bodyParser = require("body-parser");
const { CONNREFUSED } = require('dns');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mani*123',
    database: 'user'
});

con.connect = function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected successfully');
    }
}



app.get("/", (req, res) => {
    res.send("Hello your are Connected to Server");
});


app.get("/users", function(req, res)  {
    con.query('select * from users', function(err,result){
        if (err){
           
            console.log(err, 'No data found');
        }else {
            
            res.send(result);
            res.end();
        }
        console.log(result);
    });
});





app.post('/post', function(req, res){

    var body = req.body

    con.query('insert into users =?', function(err, result){
        if (err){
            console.log(err);
        }else {
            res.send(result);
        }
        console.log(result);
    })
});






app.listen(5000, function (err) {
    console.log('login-jwt app is running on port 5000');
});