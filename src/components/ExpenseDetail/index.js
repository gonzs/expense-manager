import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import findCurrentExpense from '../../actions/findCurrentExpense'
import Page from './page'

class ExpenseDetail extends Component {
    componentDidMount() {
        const { expenses } = this.props
        this.props.findCurrentExpense(parseInt(this.props.match.params.itemId),expenses)
    }

    render() {
        const { currentExpense } = this.props
        return (
            <Page
                currentExpense={currentExpense}
                goTo={(path) => {
                    this.props.history.push(path)
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentExpense: state.currentExpense,
        expenses: state.expenses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findCurrentExpense: (id,expenses) => dispatch(findCurrentExpense(id,expenses)),
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ExpenseDetail)
)