const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if(err) throw err;
    const dbo = db.db('mydb');
    const myquery = { address: 'Valley 345' };
    const newValues = { $set: { name: 'Mickey', address: 'Canyon 123' } };
    //const myquery = { address: /^O/ };
    //const query = {address: /^S/}
    //const mysort = { name: -1 };
    // const myobj = [
    //     { _id: 154, name: 'Chocolate Heaven'},
    //     { _id: 155, name: 'Tasty Lemon'},
    //     { _id: 156, name: 'Vanilla Dream'}
    // ];
    //     { name: 'John', address: 'Highway 71'},
    //     { name: 'Peter', address: 'Lowstreet 4'},
    //     { name: 'Amy', address: 'Apple st 652'},
    //     { name: 'Hannah', address: 'Mountain 21'},
    //     { name: 'Michael', address: 'Valley 345'},
    //     { name: 'Sandy', address: 'Ocean blvd 2'},
    //     { name: 'Betty', address: 'Green Grass 1'},
    //     { name: 'Richard', address: 'Sky st 331'},
    //     { name: 'Susan', address: 'One way 98'},
    //     { name: 'Vicky', address: 'Yellow Garden 2'},
    //     { name: 'Ben', address: 'Park Lane 38'},
    //     { name: 'William', address: 'Central st 954'},
    //     { name: 'Chuck', address: 'Main Road 989'},
    //     { name: 'Viola', address: 'Sideway 1633'}
    //   ];

    dbo.collection('customers').updateOne(myquery, newValues, (err, res) => {
    //find({}, {projection: { _id: 0 }}).sort(mysort).toArray( (err, res) => {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});