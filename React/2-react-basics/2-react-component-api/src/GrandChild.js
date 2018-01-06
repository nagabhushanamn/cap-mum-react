import React, { Component } from 'react';
import PropTypes from 'proptypes'
class GrandChild extends Component {
    render() {
        return (
            <div className="well">
                <span>{this.context.food}</span>
            </div>
        );
    }
}
GrandChild.contextTypes = { food: PropTypes.string };
export default GrandChild;