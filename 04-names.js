// local
const secret = 'SUPER SECRET';

// share -> share with the rest of the application
const john = 'john';
const peter = 'peter';

//console.log(module);
//? CONSOLE:
/*
Module {
	id: '.',
	path: 'C:\\WEB-DEV-2023\\John Smilga - NodeJS\\04-node-tutorial',
	exports: {},
	filename: 'C:\\WEB-DEV-2023\\John Smilga - NodeJS\\04-node-tutorial\\04-names.js',
	loaded: false,
	children: [],
	paths: [
	  'C:\\WEB-DEV-2023\\John Smilga - NodeJS\\04-node-tutorial\\node_modules',
	  'C:\\WEB-DEV-2023\\John Smilga - NodeJS\\node_modules',
	  'C:\\WEB-DEV-2023\\node_modules',
	  'C:\\node_modules'
	]
*/
//? Check the exports {}
// => whatever I put in this exports: {} => I will be able to access anywhere in my application!
// but remember -> we have to put the minimum here

// we can access everywhere in my application this 'john' & 'peter' variables, but the secret NOT
// this module.exports -> is an object
// ES6 syntax since the value and the name of the variable are the same!
module.exports = { john, peter };
