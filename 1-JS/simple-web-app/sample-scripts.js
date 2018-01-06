

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42

//-----------------------------------



// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();

//-----------------------------------

// function foo(){ throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz();

//-----------------------------------

// function foo(){
//     foo();
// }
// foo();

//-----------------------------------

// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long...');
//         i++;
//     }
// }
// function shortRunning(){
//     console.log('short...');
// }
// longRunning();
// shortRunning();

//------------------------------------


// console.log('start...');

// $.on('.btn-danger','click',function nonVegHandler(e){
//     console.log('handling event on non-veg elements');
// });

// $.on('.btn-success','click',function nonVegHandler(e){
//     console.log('handling event on veg elements');
// });

// console.log('cont with other work...');

// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long...');
//         i++;
//     }
// }
// longRunning();

//----------------------------------------------------

// Non-Blocking IO

console.log('start..');

// e.g IO
setTimeout(function callback(){
    console.log('after timeout/io');
},5000)

console.log('cont oter work..');

function longRunning(){
    var i=0;
    while(i<500){
        console.log('long...');
        i++;
    }
}
longRunning();
