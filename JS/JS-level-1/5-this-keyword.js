

// why we need 'this' keyword ?

//let pName = "GLOBAL";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         //console.log('im ' + pName); // context's hierarchy
//         //console.log('im ' + person.pName); // obj's property
//         //console.log('im ' + this.pName); // current context owner's property
//     }
// };
// // person.sayName();
// let p = person;
// person = { pName: 'CAP' }
// p.sayName();

//--------------------------------------------------------------

// a. static function-binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name)}}
// let p2={name:'Ria',sayName:function(){console.log('im '+this.name)}}


// function sayNameForAll() {
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll }
// let p2 = { name: 'Ria', sayName: sayNameForAll }

// sayNameForAll(); // im ?? //  function-invocation ( this ==> global-obj )
// p1.sayName(); // im Nag   //  method-invocation ( this ==> invoker-obj)
// p2.sayName(); // im Ria

//--------------------------------------------------------------


// b. dynamic function-binding

// 
let greetLib = {
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    }
};

// greetLib.sayName();

let p = { name: 'Nag' }
let e = { name: 'Cap' }

// // way-1 : call
// greetLib.sayName.call(p,"Hello","CHN");
// greetLib.sayName.call(e,"Dude","MUM");


// way-3 : apply
// greetLib.sayName.apply(p, ["Hello", "CHN"]);
// greetLib.sayName.apply(e, ["Dude", "MUM"]);

// way-3 : bind
// let pSayNameFunc=greetLib.sayName.bind(p,"hi","ind");
// pSayNameFunc();
// pSayNameFunc();
// let eSayNameFunc=greetLib.sayName.bind(e);
// eSayNameFunc('hey',"chn");
// eSayNameFunc('dde',"mum");



//--------------------------------------------------------------

// es5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () {
//         console.log('im ' + this.sayName);
//     }
//     this.sayAge = function () {
//         console.log('im ' + this.age + " old..");
//     }
// }

// let p1=new Person('Nag',33);
// let p2=new Person('Ria',3);
// //..

//------------------------------------------------------