// =========================================================
// OS Module

// - it provides many useful properties and methods
// - for interacting with the operating system and the server
// =========================================================

//? a built-in module => we don't need to install anything!
const os = require('os');
//os. // => now I can access all the methods that os has

//? info about current user
const user = os.userInfo();
console.log(user);
// CONSOLE
/*
{
    uid: -1,
    gid: -1,
    username: 'Admin',
    homedir: 'C:\\Users\\Admin',
    shell: null
}
*/

//? method return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`); // The System Uptime is 22913.015 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
// CONSOLE:
/*
{
   name: 'Windows_NT',
   release: '10.0.22621',
   totalMem: 34222608384,
   freeMem: 22143475712
 }
*/
