import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { saveExpenseAPI } from "../../actions/index";

// Container Component for Expenses List
class ExpensesList extends Component {
  render() {
    const { expenses, saveExpense } = this.props;

    return (
      <Page
        expenses={expenses}
        onSaveExpense={saveExpense}
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
    saveExpense: (category, text, value) => {
      dispatch(saveExpenseAPI(category, text, value));
    }
  };
};

export default withRouter(
  // High order Component to get access to history properties
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExpensesList)
);
