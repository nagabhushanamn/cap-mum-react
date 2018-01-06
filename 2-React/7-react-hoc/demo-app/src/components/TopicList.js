
import React, { Component } from 'react';
import DataSource from '../ds/DataSource'

class TopicList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: DataSource.getTopics()
        };
    }
    
    componentDidMount() {
        // Subscribe to changes
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        // Clean up listener
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        // Update component state whenever the data source changes
        this.setState({
            comments: DataSource.getComments()
        });
    }

    render() {
        let { topics } = this.state;
        let { onTopicSelect } = this.props;
        let topicElements = topics.map((topic, idx) => <div onClick={() => { onTopicSelect(topic)}} key={idx} className="list-group-item">{topic}</div>);
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

export default TopicList;