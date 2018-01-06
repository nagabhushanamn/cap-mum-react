
// ------------------------------------------------------------

// string
// var name="Nag";
// var selection='abc'

// ------------------------------------------------------------

// number
// var count=12;
// var cost=12.12;

// ------------------------------------------------------------

// boolean
// var found=true;

/*

 imp-note : falsy values

 ==> false,0,"",null,undefined,NAN

 ref : https://dorey.github.io/JavaScript-Equality-Table/

*/

// ------------------------------------------------------------

// undefined
// var v;

// ------------------------------------------------------------


// 

// var config=new Object();
// config.url="http://"  // string
// config.method="GET"   // string
// config.success=function(){}  // function prop

//delete config.method;


// ------------------------------------------------------------


// var config=new Object();
// config.url="http://"  // string
// config.method="GET"   // string
// config.success=function(){

// }  // function prop


// or

// var config={
//     url:"http://",
//     method:'GET',
//     success:function(){

//     }
// }

// ------------------------------------------------------------


// var arr=new Array();
// arr[0]="biryani";
// arr.push("poha");

// or


// var arr=["item1","item2"];

// ------------------------------------------------------------


// var re=new RegExp("\\d{10}");
// var ssn=new RegExp("\\d{3}-\\d{2}-\\d{4}");

// or

// var ssn=/\d{3}-\d{2}-\d{4}/;

// ------------------------------------------------------------


//var add=new Function("n1","n2","var r=n1+n2;return r;");

// or

// function add(n1,n2){
//     var r=n1+n2;
//     return r;
// }


// ------------------------------------------------------------

// how to access obj's properties ?

// var person={
//     "name":'Nag',
//     "full-name":"Nag N"
// }

// console.log(person.name);
// console.log(person['name']);

// console.log(person["full-name"]);

// ------------------------------------------------------------