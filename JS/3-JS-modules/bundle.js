(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

console.log('-main.js-');

//--------------------------------------------
// var app = app || {};

// app.mod1.doWork();
// app.mod2.doWork();
// app.mod3.doWork();

//--------------------------------------------

// let mod1 = require('./pack1');
// mod1.greet('en');
// mod1.greet('es');

//--------------------------------------------

let mod1=require('cap-mum-greet');
mod1.greet('es');
},{"cap-mum-greet":2}],2:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod1');
//     }
// };

// var app = app || {};

// (function () {

//     app.mod2.doWork();
//     app.mod3.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };

//     app.mod1 = o; // export

// })();

//------------------------------------------------


console.log('-pack1/mod1.js-');
// let message = "hello..";

let en = require('./mod2');
let es = require('./mod3');

function greet(lang) {
    // console.log(message);
    if (lang === "en")
        en();
    if (lang === "es")
        es();
}
// greet();
module.exports = {
    greet
};
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod1');
//     }
// };

// var app = app || {};

// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     app.mod2 = o;
// })();

//------------------------------------------


function greet(){
    console.log('hello...');
}
module.exports=greet

},{}],4:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod1');
//     }
// };

// var app = app || {};

// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     app.mod3 = o;
// })();

//------------------------------------------



function greet() {
    console.log('ola...');
}
module.exports = greet

},{}]},{},[1]);
