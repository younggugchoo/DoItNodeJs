function add(a, b, calllback) {

    console.log('2');
    var result = a+ b;

    console.log('3');
    calllback(result);

    console.log('4');
    var history = function () {
        console.log('5');
        return a + '+' + b + '=' + result;

    };

    console.log('6');
    return history();
    //console.log('7');
}


var add_history = add(10, 20, function (result) {
    console.log('1');
    console.log("result%d:", result);
});



console.log(add_history);
