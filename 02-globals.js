// GLOBALS  - NO WINDOW !!!! - no window object

// Global Variable => anywhere in ourt application we can access it!

//? Most popular global variables that we can use with Node
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname); // C:\WEB-DEV-2023\John Smilga - NodeJS\04-node-tutorial
console.log(__filename); // C:\WEB-DEV-2023\John Smilga - NodeJS\04-node-tutorial\02-globals.js

// we can run this as well in Node
setInterval(() => {
  console.log('hello world');
}, 1000); // my interval will run every second!

//? In order to stop it! -> Control + C
