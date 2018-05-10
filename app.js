const fs = require("fs");
const zlib = require("zlib");

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

// read the file -> write to another file
readable.pipe(writable);

// read the file -> compress the file -> write to the compressed file
readable.pipe(gzip).pipe(compressed);