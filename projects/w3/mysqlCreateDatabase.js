const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'userpassword',
    database: 'mydb120'
});

con.connect( (err) => {
    if (err) throw err;
    console.log('Connected!');
    const sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log('Table altered!');
    });
});