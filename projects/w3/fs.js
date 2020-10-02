const fs = require('fs');
const http = require('http');

http.createServer( (req, res) => {
    fs.readFile('text.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);