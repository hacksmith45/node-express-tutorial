//CommonJS,every file is a module by default
//Modules - Encapsulated Code(only share minimum)

const names = require('./1-module')
const sayHi = require('./2-module')
const data =  require('./alternative-module')
require('./task')



console.log(data.items)
console.log(data.singlePerson)


//console.log(names)
 

sayHi('susan');
sayHi(names.name1);
sayHi(names.name2);

