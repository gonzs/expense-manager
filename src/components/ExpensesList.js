import React from 'react'
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { expense } from '../actions/index'

const Expenses = ({ expenses }) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Text</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {expenses.map(line =>
                    <Table.Row key={line.id}>
                        <Table.Cell>{line.category}</Table.Cell>
                        <Table.Cell>{line.text}</Table.Cell>
                        <Table.Cell>{line.value}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    )
}

const mapStateToProps = state => {
    return {
        expenses: state.expenses
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const ExpensesList = connect(mapStateToProps, mapDispatchToProps)(Expenses)

export default ExpensesList