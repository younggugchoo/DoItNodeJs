var util = require('util');

var EventEmitter = require('events').EventEmitter;

var Calc= function(){
    var self = this;

    this.on('stop', function(){
       console.log('calc에 stop 이벤트 전달');
    });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b){
    return a+b;
}

module.exports = Calc;
module.exports.title= 'calculator';
