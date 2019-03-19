import React from 'react'
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Expenses = ({ expenses }) => {
    let totalValue = 0
    let incomeType = false
    let expenseType = false
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
                {expenses.map(line => {
                    if (line.category === 'Income') {
                        totalValue = totalValue + parseFloat(line.value)
                        incomeType = true
                        expenseType = false
                    } else {
                        totalValue = totalValue - parseFloat(line.value)
                        expenseType = true
                        incomeType = false
                    }

                    return (
                        <Table.Row key={line.id} positive={incomeType} negative={expenseType}>
                            <Table.Cell>{line.category}</Table.Cell>
                            <Table.Cell>{line.text}</Table.Cell>
                            <Table.Cell>{line.value}</Table.Cell>
                        </Table.Row>
                    )
                }
                )}
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell textAlign="right">Total</Table.HeaderCell>
                    <Table.HeaderCell>{totalValue}</Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
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