import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  findExpenseState,
  fetchExpenseAPI,
  deleteExpenseAPI
} from "../../actions/index";
import Page from "./page";

// Container Component for Expense Detail
class ExpenseDetail extends Component {
  componentDidMount() {
    const { expenses } = this.props;
    this.props.findCurrentExpense(
      parseInt(this.props.match.params.itemId),
      expenses
    );
  }

  render() {
    const { currentExpense } = this.props;
    const { deleteExpense } = this.props;
    return (
      <Page
        currentExpense={currentExpense}
        goTo={path => {
          this.props.history.push(path);
        }}
        deleteExpense={(id, path) => {
          deleteExpense(id);
          this.props.history.push(path);
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentExpense: state.currentExpense,
    expenses: state.expenses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findCurrentExpense: (id, expenses) => {
      if (expenses.length > 0) {
        // In case the expense is into the state
        dispatch(findExpenseState(id, expenses));
      } else {
        // In case the expense is not into the state
        dispatch(fetchExpenseAPI(id));
      }
    },
    deleteExpense: id => {
      dispatch(deleteExpenseAPI(id));
    }
  };
};

export default withRouter(
  // High order Component to get access to history properties
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExpenseDetail)
);
