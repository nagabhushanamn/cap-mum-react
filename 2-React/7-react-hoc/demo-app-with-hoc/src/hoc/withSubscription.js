import React, {
    Component
} from 'react';

import DataSource from '../ds/DataSource';


function withSubscription(WrappedComponent, callback) {

    class WithSubscription extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: callback(DataSource, props)
            }
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
                data: callback(DataSource, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} />
        }

    }

    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;


    return WithSubscription;

}

export { withSubscription };