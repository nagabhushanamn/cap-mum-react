import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
    render() {
        return (
            <div className="well">
                <GrandChild />
            </div>
        );
    }
}

export default Child;