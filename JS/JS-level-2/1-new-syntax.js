
//----------------------------------------------------------

// 3. String interpolation

// let tnr = {
//     name: 'Nag'
// }
// let sub = ".js";

// let message = "the trainer - " + tnr.name + ", killing with " + sub;
// let message = `the trainer ${'Mr.' + tnr.name} , teaching ${sub}`


// let template=`
//     <div>
//         <h1> ${tnr.name} </h1>
//     </div>
// `;

//----------------------------------------------------------

// 4. obj-literal enhancements

// let name = "Nag";
// let age = 33;

// let dynamicField = "office"; // home | office | vacation

// // ES5
// let person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         console.log('im  ' + this.name);
//     }
// };

// // ES6

// let prop = "name";

// let person2 = {
//     name,
//     age,
//     [dynamicField + "-address"]: '......',
//     sayName() {
//         console.log('im  ' + this.name);
//     },
//     ["say Age"]() {
//         console.log('im ?? old');
//     },
//     set [prop](name) {
//         console.log('setting ' + name);
//     }
// };
// // person2['say Age']();
// person2[prop] = "Nag";

//----------------------------------------------------------

// 5. destructuring

// a. array destructuring

// let nums = [1, 2, 3, 4];

// // let min=nums[0];
// // let avg=nums[1];
// // let max=nums[2];

// // let [min, avg, , max, other = 5] = nums;

// let min;
// let avg;
// let max;

// [min, avg, max] = nums;


// b. object destructuring

// let person = {
//     name: 'Nag',
//     age: 33
// };

// let name=person.name;
// let age=person.age;

// let { name: name, age: age } = person;
// let { name, age } = person;

// let { name: myName, age: myAge } = person;

// let myName;
// let myAge;

// ({ name: myName, age: myAge } = person);

// let p1=this.props.p1;
// let p2=this.props.p2;
// let p3=this.props.p3;

// let { p1, p2, p3 } = this.props;

//----------------------------------------------------------

// 6. spread operator

// function func(a, b, c, d) {
//     console.log(a)
//     console.log(d)
//     console.log(c)
//     console.log(d)
// }

// let nums = [1, 2, 3, 4]

// func(nums[0], nums[1], nums[2], nums[3]);
// func(...nums);

// let max=Math.max(nums[0], nums[1], nums[2], nums[3]);
// let max=Math.max(...nums);


// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];
// let arr3 = [...arr1, 4, 5, 6, ...arr2];

//----------------------------------------------------------

// 7. symbol data-type

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');


// let e1 = { name: 'A', [javaSymbol]: "java,spring" }
// let e2 = { name: 'B', [jsSymbol]: "js,react" }
// let e3 = { name: 'C' }
// let e4 = { name: 'D' }


// if (e1[javaSymbol]) {
//     console.log('java employee...');
//     console.log(e1[javaSymbol]);
// }




// 8. for-of loop  

// let menu = ['vada-pav', 'samosa'];

// for (let item of menu) {
//     console.log(item);
// }

// let newMenu=[...menu];
// let [item1, item2] = menu;

//-----------------------------------------------

// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 ++id;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         }
//     }
// }

// for(let id of idMaker){
//     console.log(id);
// }

// let ids=[...idMaker];

// let [id1, id2, id3] = idMaker;

//-----------------------------------------------

