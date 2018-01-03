

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let fun = "bla bla bla";
//     let learn = function () {
//         console.log('learning with ' + notes);
//     }
//     //learn();
//     console.log('teaching end...');
//     return learn;
// }


// let learnFunc = teach('.js');  // teach-contexy with given args & locals
// learnFunc();

//----------------------------------------------------------


// ==> to abstract public-behav of any module to other


// e.g counter module


const counter = (function () {
    var count = 0;  // private
    // public
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    return {
        inc: doCount,
        get: getCount
    };
})()
