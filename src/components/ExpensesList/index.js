import React, { Component } from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import addExpense from '../../actions/addExpense'

class ExpensesList extends Component {

    render() {
        const { expenses,
            addExpense,
        } = this.props

        return (
            <Page
                expenses={expenses}
                onAddExpense={addExpense}
                goTo={(path) => {
                    this.props.history.push(path)
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (category, text, value) => dispatch(addExpense(category, text, value)),
    }

}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ExpensesList)
)