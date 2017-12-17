var fs = require('fs');

fs.open ('./output.txt', 'r', function(err, fd){

    if (err) throw err;

    var buf = new Buffer(1);

    console.log(Buffer.isBuffer(buf));

    fs.read(fd, buf, 0,  buf.length, null, function(err, byteRead, buffer){
        if (err) throw err;

        var str = buffer.toString('utf-8', 0, byteRead);

        console.log(str);

        fs.close(fd, function(){
           console.log("close");
        });
    });
});