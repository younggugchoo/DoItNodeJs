// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')
    , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
    , static = require('serve-static');


var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended:false}))


app.use(bodyParser.json())

app.use(static(path.join(__dirname, 'public')));


app.use(function(req, res, next){

    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var paramId= req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {"Content-Type":"text/html;charset=utf-8"});
    res.write('<h1> Express 응답결과</h1>');

    res.write('<div><p>paramId:' + paramId + '</p></div>');
    res.write('<div><p>parampassword:' + paramPassword + '</p></div>');

    res.end();

});

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
