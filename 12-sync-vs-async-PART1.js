// =========================================================
// FS - Module (sync)

// 2 options for the file module
//    1) aynchronously - non blocking
//    2) synchronously - blocking

// for now just think of them as DIFFERENT methods
// later we will go deep into the difference and which one is better!
// =========================================================

/*//? Using destructuring -> we avoid doing the following
const fs = require('fs')
fs.readFileSync
*/

const { readFileSync, writeFileSync } = require('fs');

//! Check - Test
console.log('START');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// for write, if the file is not there, Node will create one
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
);

// => the file will be created in folder content/
// if there are some values they will be overwritten by node

//? using second parameter flag
// ex: flag: 'a' to append
writeFileSync(
  './content/result-sync-2.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
);

// if I run this twice -> the text file result-sync-2.txt will contain the text 2 times!

//! Check - Test
console.log('done with this task');
console.log('starting the next one');

// RESULTS of Check - Test
/*
START
Hello this is first text file Hello this is second text file
done with this task
starting the next one
*/

//* THE PROBLEM
// - JS reads the code line by line
// - If we have tons of users, we cannot do it like this
// - if this takes a little bit of time and we have tons of users, our application will be down!
// - as an alternative -> the async approach!
