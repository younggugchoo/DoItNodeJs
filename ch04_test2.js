process.on('exit', function () {
   console.log('exit evnet');
});


setTimeout(function(){
    console.log('after 2 sec');

    process.emit('exit');
}, 2000);