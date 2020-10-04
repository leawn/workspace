const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'userpassword'
});

con.connect( (err) => {
    if(err) throw err;
    console.log('Connected!');
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(`Result: ${result}`);
    });
});