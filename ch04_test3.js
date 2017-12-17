process.on('myEvent', function(count){
    console.log('2 sec after evnet %s', count);
});



// setTimeout(function(){
//     console.log('2초후에 tick이벤트 전달 시도함');
//     process.emit('myEvent', 2);
//
// }, 2000);