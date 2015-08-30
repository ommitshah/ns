var Q = require('q'),
  _ = require('lodash'),
  fs = require('fs');
module.exports = function(dir, ext, callback){
	Q.nfcall(fs.readdir, dir)
	.then(function(files) {
		callback(null, _(files).filter(function(f) { return f.indexOf(ext) >0;}).value());
	})
	.catch(function(err) {
		callback(err, null);
	})
	.done();
}