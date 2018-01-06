import React, { Component } from 'react';
import PropTypes from 'proptypes'

class ViewCart extends Component {
    renderItems() {
        let { items } = this.props;
        return items.map((item, idx) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div class="panel panel-default">
                <div class="panel-heading">Items in cart</div>
                <div class="panel-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.renderItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

ViewCart.propTypes = {
    items: PropTypes.array
}

export default ViewCart;