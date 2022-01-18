const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Ba@149424',
    // database: 'login'
});

db.connect(err =>{
    if(err){
        throw err;
    }
    console.log('mysql connected');
});

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS login';
    db.query(sql, (err) =>{
    if(err){
        throw err;
    }
    res.send('Database Created');
    });
});
// db.changeUser({database:'login'}, (err) => {
//     if(err) throw err;
// }
// );

app.get('/createAccount',(req,res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS userAccount ( id INT(6) AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50) NOT NULL, password VARCHAR(255) NOT NULL, email VARCHAR(100) NOT NULL);';
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('User Account Table has been created');
    });
});

// app.get('/addUser',(req,res) => {
//     let sql = 'INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');';
//     db.query(sql, err => {
//         if(err) {
//             throw err;
//         }
//         res.send('user is added');
//     });
// });

app.use(session({
    secret: 'dot@1',
    resave:'true',
    saveUninitialized: 'true'
}));

app.use(express.urlencoded({expanded:true}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    if(username && password){
        let sql = `INSERT INTO userAccount ( username, password, email) VALUES( ?, ?, ?)`;
        db.query(sql,[username, password, 'test@test.com'], (err, results, fields) => {
            if (err){
                throw err;
            }else {
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/home');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }
                res.end();
            }
        });
    } else{
        res.send('Please enter Username and Password!');
        res.end();
    }
});

app.get('/home', (req, res) => {
    if (req.session.loggedin){
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        res.send('please login to view this page !!');
    }
    res.end();
});

app.listen(3000,()=>{
    console.log(`Server started on port 3000`);
});