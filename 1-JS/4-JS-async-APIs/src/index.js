

var Rx = require('rxjs/Rx');

// const stream = Rx.Observable.create((observer) => {
//     let n = 0;
//     setInterval(function () {
//         n++;
//         observer.next(n); // event/data
//         if (n === 10)
//             observer.complete()
//     }, 100);
// });
// let evensStream = stream.filter(n => n % 2 == 0);


// evensStream.subscribe((e) => {
//     console.log('subscribing - ' + e);
// }, (error) => {
//     console.log('oops ' + e);
// }, () => {
//     console.log('completed..');
// });

//--------------------------------------



const input = document.getElementById('search');
var eventStream = Rx.Observable.fromEvent(input, 'keyup');
var newStream=eventStream.debounceTime(2000);

newStream.subscribe((e) => {
    console.dir(e);
});