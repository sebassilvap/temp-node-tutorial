// =========================================================
// PATH Module

// require('path')

// Useful methods:
//    path.join
//    path.basename
//    path.resolve
// =========================================================

const path = require('path');

//? the platform specific separator
//console.log(path.sep);
// \

//? join method -> joins sequence of path segments using the platform specific separator
const filePath = path.join('/content', 'subfolder', 'test.txt');
//console.log(filePath);
// \content\subfolder\test.txt

//? If I try to include more separators -> the get removed!
const filePath_2 = path.join('/content/', '/subfolder', 'test.txt');
//console.log(filePath_2);
// \content\subfolder\test.txt

//? Access the last portion of the path -> .basename method
const base = path.basename(filePath);
//console.log(base);
// test.txt

//? .resolve -> returns absolute path -> because our app will run in different environments!
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
//console.log(absolute);
// PS C:\WEB-DEV-2023\John Smilga - NodeJS\04-node-tutorial\Starter Files>
