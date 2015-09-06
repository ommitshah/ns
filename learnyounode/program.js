var HTTP = require('q-io/http'),
  Q = require('q'),
  util = require('util'),
  _ = require('lodash'),
  net = require('net'),
  http = require('http'),
  fs = require('fs'),
  strftime = require('strftime');


var handler = function (req, res) {
  var deferred = Q.defer();

  res.headers = [];
  if (req.method === 'POST') {
    res.status = 200;
    Q.when(req.body.read())
      .then(function (body) {
        res.body = [body.toString().toUpperCase()];
        deferred.resolve(res);
      });
  } else {
    res.status = 400;
    deferred.resolve(res);
  }

  return deferred.promise;
};

var server = HTTP.Server(handler);

server.listen(Number(process.argv[2]));

