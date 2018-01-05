import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div className="jumbotron">
                {this.props.children}
            </div>
        );
    }
}

export default Box;