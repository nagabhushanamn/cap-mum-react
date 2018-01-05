import React, { Component } from 'react';

class ReviewForm extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"> Review Form </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label> stars </label>
                            <select className="form-control">
                                {[1, 2, 3, 4, 5].map((n, idx) => {
                                    return <option key={idx}>{n}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label> author </label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label> body </label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <button className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReviewForm;