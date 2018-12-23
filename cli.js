#!/usr/bin/env node
'use strict';
const meow = require('meow');
const gradient = require('gradient-string');

const greetings = require('.');
const christmasGradient = gradient('red', 'white', 'green');

const cli = meow(`
	Examples
	  $ marry-christmas
	  May you have a Christmas that is more special than it has ever been. May Baby Jesus bless you abundantly.
	  
	  $ marry-christmas --all
	  Let’s celebrate this blissful New Year. happy Christmas.
	  During this time of faith and family, may the true meaning of Christmas fill you with joy.
	  Wishing you a Merry Christmas and a blessed New Year.
	  ...
	  
	Options
	  --all      Get a list of all Christmas Greetings
`);


console.log(christmasGradient(cli.flags.all ? greetings.all.join('\n') : greetings.rand()));