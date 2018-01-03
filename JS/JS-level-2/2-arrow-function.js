

// let getPrice = function () {return 100 + 200;}
// let getPrice = () => { return 100 + 200; }
// let getPrice = () => 100 + 200;
// let getPrice = (count) => count * 100;
// let getPrice = count => count * 100;
// let getPrice = (count, gst) => count * 100 + gst;
// let getPrice = (count, gst) => {
//     let cost = count * 100;
//     let total = cost + gst
//     return total
// };

//-------------------------------------------------------

/*

    why/where we need arrow-functions ?

    ==> for compact function-arg
    ==> to capture 'this'

*/

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b });
// nums.sort((a, b) => a - b);

//---------------------------------------------------

// limitations with regular-function

/*

    ==> by default , func bound to global-obj
    or
    ==> we bind to any other object dynamically

*/

// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }
//         console.log(this.name + " teaching .js end");
//         return askQues;
//     }
// }

// let askQues = tnr.doTeach();
// askQues("Q1");
// let newTnr = { name: 'praveen' }
// askQues.call(newTnr, "Q2")


//--------------------------------------------------------------


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed...");
//     }
// };

// let invoice = {
//     num: 123,
//     process: () => {
//         console.log("INV-" + this.num + " processed...");
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed partially");
//         let self=this;
//         return function () {
//             console.dir(this);
//             console.log("INV-" + self.num + " processed completly");
//         }
//     }
// };


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed partially");
//         return () => {
//             console.dir(this);
//             console.log("INV-" + this.num + " processed completly");
//         }
//     }
// };

// let complete = invoice.process();
// complete();


//----------------------------------------------------------



function Person(name, age) {
    this.name = name;
    this.age = age;
    // let self=this;
    // let incAge = function () {
    //     self.age++;
    //     console.log(self.name + " -> " + self.age);
    // }
    let incAge = () => {
        this.age++;
        console.log(this.name + " -> " + this.age);
    }
    window.setInterval(incAge, 1000);
}

var p = new Person('Ria', 0);