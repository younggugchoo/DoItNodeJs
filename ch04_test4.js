var Calc = require('./Calc3');

var calc  = new Calc();

calc.emit('stop');

var result = calc.add(10, 102);

console.log(result);