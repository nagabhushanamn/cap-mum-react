"use strict"

// let person={
//     name:'Nag',
//     age:33
// }
// Object.defineProperty(person,'name',{configurable:false,writable:false})

// // delete person.name;
// // person.name="";

//------------------------------------------


// let person={
//     name:'Nag',
//     age:33
// }

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);


// person.newProp="new value";
// delete person.name
// person.name="";

//------------------------------------------


let person = {
    _name: 'Nag',
    _age: 33,
    set name(name) {
        if (name) this._name = name
    },
    get name() {
        return this._name
    }
}

person.name = "";  // set
console.log(person.name); // get

