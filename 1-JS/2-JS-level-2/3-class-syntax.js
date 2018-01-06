
// Es5 class
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old..");
// }
// es6 class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person :: constructor');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old..");
    }
}
// let p1 = new Person('Nag',33);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee :: constructor');
    }
    saySalary() {
        console.log('i get ' + this.salary + " only");
    }
    getBonus() {
        //console.log(this.salary * 0.02);
        return this.salary * 0.02;
    }
}
// var e1 = new Employee('Nag', 33, 1000.00);

class Boss extends Employee {
    getBonus() {
        console.log(this.salary * 0.2 + super.getBonus());
    }
}
// var b1 = new Boss('Nag', 33, 1000.00);



// class Abc {
//     static staMethod() {
//         console.log('sta-method..');
//     }
// }
// Abc.staVar = 123;

// in react

// class UIComp extends React.Component{
//     render(){
//         //...
//     }..
// }