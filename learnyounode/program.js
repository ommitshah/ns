var HTTP = require('q-io/http'),
  Q = require('q'),
  util = require('util'),
  _ = require('lodash'),
  net = require('net');
  strftime = require('strftime');

var port = parseInt(process.argv[2]);

var server = net.createServer(function(socket) {
  socket.end(now());
});

server.listen(port);
function now() {
  return strftime('%Y-%m-%d %H:%M')+ '\n';
}

