const mysql =require('mysql2');

const db = mysql.createConnection({
    host :'Localhost',
    user:'root',
    password:'darkness',
    database:'week3'
});


module.exports =db;
