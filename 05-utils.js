const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

//* export default (check ES6 modules)
// without {}, only one thing
module.exports = sayHi;
