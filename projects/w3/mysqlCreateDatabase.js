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
    const sql = `UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'`;
    // const values = [
    //     ['John', 'Highway 71'],
    //     ['Peter', 'Lowstreet 4'],
    //     ['Amy', 'Apple st 652'],
    //     ['Hannah', 'Mountain 21'],
    //     ['Michael', 'Valley 345'],
    //     ['Sandy', 'Ocean blvd 2'],
    //     ['Betty', 'Green Grass 1'],
    //     ['Richard', 'Sky st 331'],
    //     ['Susan', 'One way 98'],
    //     ['Vicky', 'Yellow Garden 2'],
    //     ['Ben', 'Park Lane 38'],
    //     ['William', 'Central st 954'],
    //     ['Chuck', 'Main Road 989'],
    //     ['Viola', 'Sideway 1633']
    //   ];
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${result.affectedRows} record(s) updated`);
    });
});