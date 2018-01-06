
import React, { Component } from 'react';
import DataSource from '../ds/DataSource'
import { withSubscription } from '../hoc/withSubscription'

class TopicList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //let { topics } = this.state;
        let { data: topics } = this.props;
        let { onTopicSelect } = this.props;
        let topicElements = topics.map((topic, idx) => <div onClick={() => { onTopicSelect(topic) }} key={idx} className="list-group-item">{topic}</div>);
        return (
            <div className="panel panel-default">
                <div className="panel-heading">All Topics</div>
                <div className="panel-body">
                    <div className="list-group col-md-6 col-sm-6">
                        {topicElements}
                    </div>
                </div>
            </div>

        );
    }
}

export default withSubscription(TopicList, (DataSource, props) => { return DataSource.getTopics() });