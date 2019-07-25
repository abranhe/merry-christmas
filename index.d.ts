import greetings = require('./greetings.json');

declare const merryChristmas: {
	/**
	Get over 70+ christmas greetings.

	@example
	```
	import merryChristmas = require('cat-names');

	merryChristmas.all;
	//=> ['Let’s celebrate this blissful New Year. happy Christmas.', 'During this..', …]
	```
	*/
	readonly all: Readonly<typeof greetings>;

	/**
	Random christmas greeding.

	@example
	```
	import merryChristmas = require('cat-names');

	merryChristmas.random();
	//=> 'Hope your Christmas is an ideal measure of fun and laughter!'
	```
	*/
	random(): string;
};

export = merryChristmas;