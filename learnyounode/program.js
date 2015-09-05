var HTTP = require('q-io/http'),
  Q = require('q'),
  util = require('util'),
  _ = require('lodash'),
  net = require('net'),
  http = require('http'),
  fs = require('fs'),
  strftime = require('strftime');

var port = Number(process.argv[2]);
var filename = process.argv[3];

var stream = fs.createReadStream(filename);

var server = http.createServer(function(req, res) {
  stream.pipe(res);
});

server.listen(port);

