import React, { Fragment } from "react";
import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";
import AddExpense from "../AddExpense";

// Presentational Component for Expenses List
const Page = ({ expenses, onSaveExpense, goTo }) => {
  let totalValue = 0;
  let incomeType = false;
  let expenseType = false;

  return (
    <Fragment>
      <h1>Expenses</h1>

      {/* Show Component for adding new expense */}
      <AddExpense onSaveExpense={onSaveExpense} />

      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Text</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {expenses.map((expense, index) => {
            if (expense.category === "Income") {
              totalValue = totalValue + parseFloat(expense.value);
              expenseType = false;
              incomeType = true;
            } else {
              totalValue = totalValue - parseFloat(expense.value);
              expenseType = true;
              incomeType = false;
            }

            return (
              <Table.Row
                key={expense.id}
                positive={incomeType}
                negative={expenseType}
                onClick={() => goTo(`/expenses/${expense.id}`)}
              >
                <Table.Cell>{expense.id}</Table.Cell>
                <Table.Cell>{expense.category}</Table.Cell>
                <Table.Cell>{expense.text}</Table.Cell>
                <Table.Cell>{expense.value}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell textAlign="right">Total</Table.HeaderCell>
            <Table.HeaderCell>{totalValue}</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Fragment>
  );
};

// Props mapping
Page.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onSaveExpense: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
};

export default Page;
