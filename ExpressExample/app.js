var express = require('express'),
    http = require('http');

var app = express();

app.set('port', process.env.port || 3000);



http.createServer(app).listen(app.get('port'), function(){
   console.log('Start Express Server port:%d', app.get('port'));
});