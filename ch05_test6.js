var http = require('http');
var fs = require('fs');

var server = http.createServer();

var port = 3000;


server.listen(port,function(){
    console.log("server started");
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('client connected ip:%s,%d', addr.address, addr.port);
});


server.on('request', function(req, res){
    console.log('request from client');

    var filename = "DSC_0079.JPG";

    var infile = fs.createReadStream(filename, {flags:'r'});
    var filelength = 0;
    var curlength = 0;

    fs.stat(filename, function(err,stats){
       filelength = stats.size;
       console.log('total file size:%d', filelength);
    });

    res.writeHead(200, {"Cotents-Type":"image/png"});

    infile.on('readable', function(){
        var chunk;
        while(null != (chunk= infile.read())){
            console.log('read data size:%d bytes', chunk.length);

            curlength += chunk.length;
            res.write(chunk, 'utf-8', function (err) {
               console.log('file patition write completed : %d, filesize: %d', curlength, filelength );

               if (curlength >=filelength){
                   res.end();
               }
            });
        }
    });

});

server.on('close', function(){
    console.log('server closed');
});