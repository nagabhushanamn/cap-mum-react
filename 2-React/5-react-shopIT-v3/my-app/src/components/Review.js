import React, { Component } from 'react';
import PropTypes from 'proptypes';

class Review extends Component {
    render() {
        let { review } = this.props;
        return (
            <div className="alert alert-danger">
                <span>{review.stars}</span> &mdash; {review.author}
                <hr />
                <p>{review.body}</p>
            </div>
        );
    }
}
Review.propTypes = {
    review: PropTypes.object
}

export default Review;