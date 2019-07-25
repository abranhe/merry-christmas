'use strict';
const cUa = require('consecutively-unique-array');
const greetings = require('./greetings.json');

exports.all = greetings;
exports.random = cUa(greetings);
