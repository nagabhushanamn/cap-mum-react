

// step-1 : create component-class ( without JSX )

// class HelloWorld extends React.Component {
//     render() {
//         let h1Ele = React.createElement('h1', null, 'Hello World');
//         let divEle = React.createElement(
//             'div',
//             { className: "well" },
//             h1Ele
//         );
//         return divEle;
//     }
// }

// step-1 : create component-class ( with JSX )

class HelloWorld extends React.Component {
    render() {
        return (
            <div className="alert alert-danger">
                <h1> HelloWorld </h1>
            </div>
        );
    }
}


// step-2 : Instantiate component-class & render to virtual-dom
// let helloWorld = React.createElement(HelloWorld, null, null);
let helloWorld=<HelloWorld />
ReactDOM.render(helloWorld, document.getElementById('root'));