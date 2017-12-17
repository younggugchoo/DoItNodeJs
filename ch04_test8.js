var fs = require('fs');


fs.open('./output.txt', 'a+', function(err, fd){
    if (err) throw err;

    console.log('open');
    var buf = new Buffer('hi\n');

    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if (err) throw err;

        console.log(err, written, buffer);

        fs.close(fd, function(){
            console.log("close");
        });
    });
});