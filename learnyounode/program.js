var module = require('./module'),
  _ = require('lodash');

var dir = process.argv[2];
var ext = process.argv[3];

function cb(err, data) {
	if (err) {
		console.log(err);
	} else {
	  _(data).forEach(function(d) {console.log(d);}).value();
	}
}

module(dir,ext, cb);