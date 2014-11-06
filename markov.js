'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var markov = require('markov');

var m = markov();
var s = fs.createReadStream(__dirname + '/dependency-invertion.txt');
m.seed(s, function () {
  var stdin = process.openStdin();
  stdin.on('data', function (line) {
    var keys = line.toString();
    var res = m.respond(keys, 5).join(' ').toLowerCase();
    console.log(res);
  });
});
