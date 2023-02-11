// =========================================================
// FS - Module (ASYNC)

// 2 options for the file module
//    1) aynchronously - non blocking
//    2) synchronously - blocking

// for now just think of them as DIFFERENT methods
// later we will go deep into the difference and which one is better!
// =========================================================

// Asynchronous methods
// - readFile
// - writeFile

const { readFile, writeFile } = require('fs');

// => for the asynchronous methods to work, we need to provide a callback
// REMEMBER: we run the callback when we are done
// when whatever functionality we're doing is complete
// in the same way as we do in the event listener in a button

//* EXAMPLE 1

//! Check-Test
console.log('START');

readFile('./content/first.txt', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
// CONSOLE
// <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
//? This happens when we don't provide the utf8 encoding, we get this buffer

//* EXAMPLE 2: Including the utf8

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
// CONSOLE
// Hello this is first text file

//* EXAMPLE 3:
// the problem here is that we create a lot of callback functions

readFile('./content/first.txt', 'utf8', (err, result) => {
  // 1st CALLBACK) for the first.txt
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  // 2nd CALLBACK) for the second.txt
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    // 3rd CALLBACK) creating the new file with -> writeFile
    writeFile(
      './content/result-async.txt',
      `Here we have the ASYNC result: ${first}, ${second}`,

      // the result
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // if no error
        console.log(result);
        //! Check-Test
        console.log('DONE WITH THIS TEST');
      }
    );
  });
});

// CONSOLE
// undefined

// => but the file: result-async.txt -> gets created!

//! Check-Test
console.log('STARTING NEXT TASK');

//* Check-Test - RESULT
/*
START
STARTING NEXT TASK
<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
Hello this is first text file
undefined
DONE WITH THIS TEST
*/

// - we can do several tasks at the same time
// - our application can keep on serving other users
// - Alternatives for this callback hell
//    -> promises
//    -> async-await
// - for the remaining of the course we'll deail with readind, writing from the database
