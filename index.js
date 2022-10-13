const mysql = require('mysql');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
// const { CONNREFUSED } = require('dns');

const express = require("express");
const app = express();
app.use(express.json());
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

con.connect ( function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected successfully');
    }
});



app.get("/", (req, res) => {
    res.send("Hello your are Connected to Server");
});


app.get("/users", function(req, res)  {
    con.query('select * from user', function(err,result){
        if (err){
           
            console.log(err, 'No data found');
        }else {
            
            res.send(result);
            res.end();
        }
        console.log(result);
    });
});



app.post("/user/generateToken", (req, res) => {
    // Validate User Here
    // Then generate JWT Token
  
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    res.send(token);
});





app.post("/signup", function (req, res) {

    //   console.log(res.json())
    var paramas = req.body;
    console.log(paramas);

    con.query("INSERT INTO users SET ?", paramas, function (err, results) {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
            res.end();
        }
            console.log('<<<<<>>>>',results);
        

    });
});



app.post('/post', function(req, res){

    var body = req.body;

    con.query('insert into users set ?', body, function(err, result){
        if (err){
            console.log(err);
        }else {
            res.send(result);
        }
        console.log(result);
    })
});






app.listen(5555, function (err) {
    console.log('login-jwt app is running on port 5555');
});