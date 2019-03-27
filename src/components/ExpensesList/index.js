import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createExpense } from "../../actions/index";

class ExpensesList extends Component {
  render() {
    const { expenses, createExpense } = this.props;

    return (
      <Page
        expenses={expenses}
        onCreateExpense={createExpense}
        goTo={path => {
          this.props.history.push(path);
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createExpense: (category, text, value) => {
      dispatch(createExpense(category, text, value));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExpensesList)
);
