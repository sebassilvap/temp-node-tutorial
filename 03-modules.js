// =========================================================
// Modules
//
// CommonJS, every file in NODE is module (by default)
// Modules - Encapsulated Code (only share minimum)
// =========================================================

/*//? MOVED to 04-name.js
const secret = 'SUPER SECRET';
const john = 'john'; 
const peter = 'peter'; 
*/

/*//? MOVED to 05-utils.js
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};
*/

//? Share and Use modules
// module.exports {..} => //* to share
// require => //* to use
// => in require, where the object is located
// => ALWAYS! start with './'

const names = require('./04-names'); // name of variable should MATCH!
//console.log(names); // { john: 'john', peter: 'peter' }

//? Import the function sayHi from '05-utils.js'
// we can ommit the file extension!
const sayHi = require('./05-utils');

//? Test the function with the variables
//sayHi('susan'); // Hello there susan
//sayHi(names.john); // Hello there john
//sayHi(names.peter); // Hello there peter

//? Another solution, using destructuring
const { john, peter } = require('./04-names');
// sayHi(john); // Hello there john
// sayHi(peter); // Hello there peter

const data = require('./06-alternative-flavor');
//console.log(data); // { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

//? A function invoked inside the module -> Here it will RUN!
require('./07-mind-grenade'); // the sum is : 15

//! REMEMBER:
// When we IMPORT a module -> we INOVOKE IT !!

//! ================================================================== //
/*//? TUTOR'S SOLUTION
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
*/
//! ================================================================== //
