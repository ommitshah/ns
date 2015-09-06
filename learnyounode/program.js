var joey = require('joey'),
  _ = require('lodash'),
  Q = require('q'),
  url = require('url');

joey
  .log()
  .error()
  .route(function ($) {
    $("api/parsetime")
      .method('GET')
      .contentType('application/json')
      .contentApp(function (req) {
        var string = url.parse(req.url, true).query['iso'];
        var d = new Date(string);
        return [JSON.stringify({hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds()})];
      });
    ''.test
    $("api/unixtime")
      .method('GET')
      .contentType('application/json')
      .contentApp(function (req) {
        var string = url.parse(req.url, true).query['iso'];
        var d = new Date(string);
        return [JSON.stringify({unixtime: d.getTime()})];
      });
  }).listen(process.argv[2]);