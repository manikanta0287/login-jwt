const express = require("express");
const app = express();

const mysql = require('mysql');

app.use(express.json());




app.get("/", (req, res) => {
    res.send("Hello your are Connected to Server");
});

app.listen(5000, function (err) {
    console.log('login-jwt app is running on port 5000');
});