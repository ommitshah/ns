var Q = require('q'),
  _ = require('lodash'),
  fs = require('fs');

var buf = fs.readFileSync(process.argv[2], 'utf-8');
console.log(buf.split('\n').length -1);
/*Q.fcall(fs.readFileSync, process.argv[2], 'utf-8')
.then(function(buf){
  console.log(buf.split('\n').length - 1);
});*/