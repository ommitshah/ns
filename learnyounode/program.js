var HTTP = require('q-io/http'),
  Q = require('q'),
  util = require('util'),
  _ = require('lodash');

var urls = _(process.argv).slice(2).value();
var promises = _(urls).map(function (url) {
  return HTTP.request(url);
}).value();

Q.all(promises)
  .then(function(responses) {
    return _(responses).map(function(res) { return res.body.read();}).value();
  })
  .then(Q.all)
  .then(function(bodies) {
    bodies.forEach(function(body) {
      console.log(body.toString());
    });
  })
  .done();
