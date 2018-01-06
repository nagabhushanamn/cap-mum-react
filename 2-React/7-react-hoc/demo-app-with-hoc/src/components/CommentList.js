import React, { Component } from 'react';
import Comment from './Comment';
import DataSource from '../ds/DataSource';

import { withSubscription } from '../hoc/withSubscription'


class CommentList extends Component {
 
 constructor(props) {
        super(props);
        this.state = {
            //"DataSource" is some global data source
            comments: DataSource.getComments()
        };
    }    

 render() {
     let { data:comments } = this.props;
        let commentElements = comments.map((comment, idx) => <Comment comment={comment} key={idx}/>);
        return (
            <div className="col-md-6 col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading">All Comments </div>
                    <div className="panel-body">
                        <div className="list-group">
                            {commentElements}
                        </div>
                    </div>   
                </div>  
            </div>    
        );
    }
}

export default withSubscription(CommentList, (DataSource, props) => { return DataSource.getComments() });