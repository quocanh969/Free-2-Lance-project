import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class TransactionComponent extends Component {
    render() {
        return (
            <div>
                Transaction work !!!
            </div>
        )
    }
}

// Container
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Transaction = withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionComponent));
export default Transaction;