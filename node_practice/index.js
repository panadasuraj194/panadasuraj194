const express =  require('express');
const mysql = require('mysql');
const app = express();
// const port =  process.env.PORT || 3000;

// require('dotenv').config();

// create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ba@149424',
    database: 'nodeMysql'
});

// connect to MYSQL

db.connect(err =>{
    if(err){
        throw err;
    }
    console.log('MySQL Connected');
});

// Create Database

app.get('/createdb', (req,res)=> {
    let sql = 'CREATE DATABASE IF NOT EXISTS nodeMysql';
    db.query(sql, (err) => {
        if(err){
            throw err;
        }
        res.send('Database Created');
    });
});

app.get('/createTable', (req,res) => {
    let sql ='CREATE TABLE userform(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,name VARCHAR(30) NOT NULL,reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);';
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('Table has been created');
    });
});

app.listen(3000, () =>{
    console.log(`Server started on port 3000`);
});