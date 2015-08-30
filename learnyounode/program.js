var Q = require('q'),
  _ = require('lodash'),
  fs = require('fs');

fs.readFile(process.argv[2], 'utf-8',function(err, data) {
	console.log(data.toString().split('\n').length - 1);
});
/*Q.nfcall(fs.readFile, process.argv[2], 'utf-8')
.then(function(buf){
  console.log(buf.split('\n').length - 1);
});*/