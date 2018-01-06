import React, { Component } from 'react';

import { addNewReviewAsync } from '../actions/products'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value,
        };
        let { productId, actions } = this.props;
        actions.addNewReviewAsync(newReview, productId);
        this.setState({
            isOpen: false
        })
    }
    toggleForm() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (
                <button className="btn btn-default" onClick={this.toggleForm.bind(this)}>
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
            )
        } else {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading"> Review Form </div>
                    <div className="panel-body">
                        <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                            <div className="form-group">
                                <label> stars </label>
                                <select className="form-control" ref="stars">
                                    {[1, 2, 3, 4, 5].map((n, idx) => {
                                        return <option key={idx}>{n}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label> author </label>
                                <input type="email" className="form-control" ref="author" />
                            </div>
                            <div className="form-group">
                                <label> body </label>
                                <textarea className="form-control" ref="body"></textarea>
                            </div>
                            <button className="btn btn-primary">submit</button>
                            <button onClick={this.toggleForm.bind(this)} className="btn btn-danger">cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ addNewReviewAsync }, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(ReviewForm);