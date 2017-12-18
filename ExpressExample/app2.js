var express = require('express'),
    http = require('http');

var app = express();


app.use(function(req, res, next){
    console.log('call from #1 middleware');


    var userAgenet = req.header('User-Agent');
    var paramName = req.query.name

    var params = req.params;

    res.writeHead('200', {"Content-Type":"text/html;charset=utf-8"});
    res.write('<h1> Express 응답결과</h1>');
    res.write('<div><p>User-Agent:' + userAgenet + '</p></div>');
    res.write('<div><p>ParamName:' +  + '</p></div>');

    res.end();

});

app.use(function(req, res, next){


    console.log('call from #2 middleware');

    res.writeHead('200', {"Content-Type":"text/html;charset=utf-8"});
    res.end('<h1>Express [' + res  + '] 서버에서 응답한 결과입니다.</h1>');
});


http.createServer(app).listen(3000, function(){
    console.log('Express server start');
})