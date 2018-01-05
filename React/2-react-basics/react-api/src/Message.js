import React, { Component } from 'react';
import PropTypes from 'proptypes'

class Message extends Component {
    constructor(props) {
        super(props);
        //this.state = {status: ''};
        console.log('Message :: constructor');
    }
    componentWillMount() {
        console.log('Message :: componentWillMount');
    }
    render() {
        console.log('Message :: render');
        return (
            <div className="alert alert-danger">
                <p>{this.props.message}</p>
                <hr />
                <button onClick={() => { this.forceUpdate() }}>
                    <span className="glyphicon glyphicon-refresh"></span>
                </button>
            </div>
        );
    }
    componentDidMount() {
        console.log('Message :: componentDidMount');
        //this.setState({status: 'message from server-side'});
    }

    componentWillReceiveProps(nextProps) {
        console.log('Message :: componentWillReceiveProps');
        // console.dir(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message :: shouldComponentUpdate');
        if (this.props.message === nextProps.message)
            return false;
        else
            return true;

    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Message :: componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Message :: componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('Message :: componentWillUnmount');
    }

}

Message.propTypes = {
    message: PropTypes.string
}
Message.defaultProps = {
    message: 'Nil'
}
Message.displayName = "Greet-Message"


export default Message;