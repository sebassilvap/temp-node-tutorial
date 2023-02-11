// ====================================================================
//? NPM Command

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName> (WINDOWS)
// sudo install -g <packageName> (MAC)

//? First Packages and package.json
// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (setp by step, press enter to skip)
// npm init -y (everything by default)
// ====================================================================

//* using the package loadash
const _ = require('lodash');

const items = [1, [2, [3, [4]]]]; // [ 1, [ 2, [ 3, [Array] ] ] ]
const newItems = _.flattenDeep(items); // [ 1, 2, 3, 4 ]

console.log(items);
console.log(newItems);
