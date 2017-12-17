var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flag:'r'});

infile.on('data', function(data){
   console.log(data);

   console.log(data.toString());
   //colsole.
});


var test = function(aaa){
  console.log(aaa);
};


test('asfsadfa')


function test1(aaa, callback){
    console.log(aaa);

    callback(aaa + "/adfadsfsaf");
}


test1('asdfadsfasdf', function(test){
        console.log(test);
    }
);