const fs = require('fs');

fs.appendFile('newtxt.txt', 'Hello Content!', (err) => {
    if(err) throw err;
    console.log('Saved!');
});

/*fs.open('newtxt2.txt', 'w', (err, file) => {
    if(err) throw err;
    console.log('Saved2!');
});*/

/*fs.writeFile('mynewtxt2.txt', 'Thats rewritten', (err) => {
    if(err) throw err;
    console.log('Replaced!');
});*/

/*fs.unlink('mynewtxt2.txt', (err) => {
    if(err) throw err;
    console.log('Deleted!');
});*/

fs.rename('mynewfile1.txt', 'myrenamed.txt', (err) => {
    if(err) throw err;
    console.log('Renamed!')
})

fs.appendFile('newtxt.txt', 'Thats new', (err) => {
    if(err) throw err;
    console.log('Updated!');
});