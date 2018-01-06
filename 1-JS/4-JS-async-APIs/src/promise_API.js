




//-----------------------------------------
// swiggy
let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setTimeout(() => {
                    //reject('No delivery boys');
                    setTimeout(() => {
                        resolve('Biryani');
                        console.log('swiggy promise resolved');
                    }, 3000)
                }, 2000)
            }, 2000);
        });
        return promise;
    }
}

let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('BEER');
                console.log('bar promise resolved');
            }, 2000);
        });
        return promise;
    }
}

//-----------------------------------------
// Trainer

let person = {
    doWork: function () {
        console.log('person working...');
        console.log('person feels hungry...req food on swiggy');
        let promise = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise from swiggy & bar..defering my actions to future');
        Promise.race([promise, promise2])
            .then((result) => {
                console.log('yummy ' + result);
            }, (error) => {
                console.log('oops ' + error);
            });
        console.log('person cont.. with other work.. finisehd');

    }
}

//-----------------------------------------

setTimeout(() => {
    person.doWork();
}, 2000);