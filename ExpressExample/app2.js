var express = require('express'),
    http = require('http');

var app = express();


app.use(function(req, res, next){
    console.log('call from #1 middleware');

    req.user = 'choo';

    next();

});

app.use(function(req, res, next){


    console.log('call from #2 middleware');

    res.writeHead('200', {"Content-Type":"text/html;charset=utf-8"});
    res.end('<h1>Express [' + req.user  + '] 서버에서 응답한 결과입니다.</h1>');
});


http.createServer(app).listen(3000, function(){
    console.log('Express server start');
})