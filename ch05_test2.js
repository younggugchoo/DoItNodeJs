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

   infile.pipe(res)

   // fs.readFile(filename, function(err, data){
   //    res.writeHead(200, {"Content-Type": "image/png"});
   //    res.write(data);
   //
   //     res.write('hello node js');
   //     res.end();
   //
   // });


   //console.dir(req);
});

server.on('close', function(){
   console.log('server closed');
});