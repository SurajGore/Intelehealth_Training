const fs = require ('fs');
const server = require('http').createServer();

server.on('request',(req, res) => {
// fs.readFile('./big.txt', (err,data) => {
// if (err) throw err;

// res.end(data);
// });

const src = fs.createReadStream('./big.txt');
const wrt = fs.createwriteStream('./test.txt');
src.pipe(res);

});

server.listen(4100);
 