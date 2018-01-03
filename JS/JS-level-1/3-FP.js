

// 1. function declaration
//---------------------------

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//---------------------------------------------------------------


// 2. function Expression
//---------------------------

// console.log(add(12,13)); // error
// var add = function(n1, n2) { return n1 + n2 };
// console.log(add(12,13));

//----------------------------------------------------------------

// let userType;
// let action;
// function login(){
//     //..
//     userType="admin";
// }
// if(userType==="admin"){
//     action=function(){}
// }else{
//     action=function(){}
// }

//----------------------------------------------------------------



// ==> A function can be stored in a variable or value

// function greet(){
//     console.log('Hello...');
// }

// let sayHello=greet;
// sayHello();

//----------------------------------------------------------------

// ==> A parameter of a function can be a function

// function greet(f){
//     if(f){
//         f(); return;
//     }
//     console.log('Hello..');
// }

// // greet();
// greet(function(){console.log('Ola...');});


// e.g

// var arr=[1,3,5,7,9,2,4,6,8,10];
// // arr.sort();
// arr.sort(function(a,b){return a-b;});



//----------------------------------------------------------------


// ==> The return value of a function can be a function

// function doTeach(){
//     console.log('teaching.....');
//     let doLearn=function(){
//         console.log('Learning.....');
//     }
//     //doLearn();
//     return doLearn;
// }

// let doLearnFunc=doTeach();
// doLearnFunc()
// doLearnFunc();

//----------------------------------------------------------


// function reflect(a,b,c) {
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12,13,14));


//----------------------------------------------------------


// function getFood(arg){
//     return "No Food"
// }
// // var getFood=new Function();

// function getFood(pay){
//     //if(arguments.length===0)return "No Food"
//     return "Biryani"
// }
// // var getFood=new Function();

// console.log(getFood1(150));

//----------------------------------------------------------

// ES6  ==> function with default params

// function func(a = 1, b = 2) {
//     // if (!a) a = 1
//     // if (!b) b = 2
//     // a = a || 1;
//     // b = b || 2;
//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);

//----------------------------------------------------------

// ES6  ==> function with rest param

// function func(a, b, ...r) {
//     console.log(a);
//     console.log(b);
//     console.log(Array.isArray(r));
//     console.log(r);
// }

// func(1, 2, 3, 4, 5, 6, 7, 8);

//----------------------------------------------------------


