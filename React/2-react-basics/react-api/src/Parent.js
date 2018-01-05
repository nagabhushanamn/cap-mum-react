import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'proptypes'

class Parent extends Component {

    getChildContext() {
        return { food: "biryani" };
    }

    render() {
        return (
            <div className="well">
                <Child />
            </div>
        );
    }
}


Parent.childContextTypes = {
    food: PropTypes.string
};

export default Parent;