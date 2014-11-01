'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var markov = require('markov');

var m = markov();
var s = fs.createReadStream(__dirname + '/dependency-invertion.txt');
m.seed(s, function () {
  var res = m.respond('', 5).join(' ').toLowerCase();
  console.log(res);
});
