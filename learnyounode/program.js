var HTTP = require('q-io/http'), util = require('util');
HTTP.request(process.argv[2])
.then(function(res){
	return res.body.read();
})
.then(function(body){
	console.log(body.length)
	console.log(body.toString());
})
.done();
