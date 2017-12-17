var url = require('url');

var curURL = url.parse("https://docs.spring.io?test=sfsdf");

var curStr = url.format(curURL);

var queryString = require('querystring');

var param = queryString.parse(curURL.query);

console.log(param.test);
console.log(queryString.stringify(param));


//console.log(curStr);
//console.dir(curURL);
