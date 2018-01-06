
// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let self = this;
//         let doLearn = function () {
//             console.log(this.name + ' learning .js from ' + self.name);
//         }
//         //doLearn();
//         let emp = { name: 'Cap' };
//         doLearn.call(emp);
//     }
// }
// tnr.doTeach();

// let newTnr = { name: 'Kannan' };
// tnr.doTeach.call(newTnr);

//------------------------------------------------------


function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching..");
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning from " + self.name)
            }
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer('Nag');  // constructor invocation
    let e1 = new Employee('A');
    let e2 = new Employee('B');
    let learn = tnr.doTeach(); // method invocation
    learn.call(e1); // call/apply/bind invocation
    learn.call(e2);

}

sessionStart();  // function invocation

