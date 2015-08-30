var Q = require('q'),
  _ = require('lodash'),
  fs = require('fs'),
  util = require('util');

var dir = process.argv[2];
var ext = process.argv[3];
Q.nfcall(fs.readdir, dir)
.then(function(files) {
	_(files)
	.filter(function(f) { return f.indexOf(ext) >0;})
	.forEach(function(d) {
		console.log(d);
	}).value();
})
.done();

fs.readdir(dir, function(data) {
	;
})