const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'leawn',
    password: 'Leonboss62'
});

con.connect( (err) => {
    if(err) throw err;
    console.log('Connected!');
});