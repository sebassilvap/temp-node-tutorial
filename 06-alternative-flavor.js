// ======================
// Alternative Syntax
// ======================

//const items = ['item1', 'item2'];
//? Instead of defining the variable we go right away with module.export
module.exports.items = ['item1', 'item2'];

const person = {
  name: 'bob',
};

//? For 'person', module.export changing the name of the variable
module.exports.singlePerson = person;
