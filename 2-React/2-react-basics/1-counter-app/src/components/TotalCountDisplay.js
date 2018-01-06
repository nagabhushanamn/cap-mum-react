import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalCountDisplay :: constructor()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        let { total } = this.props;
        return (
            <div className="well">
                Total Hits: <span className="badge">{total}</span>
            </div>
        );
    }
}

export default TotalCountDisplay;