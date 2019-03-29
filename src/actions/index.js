import {
  SAVE_EXPENSE,
  FETCH_EXPENSES,
  CURRENT_EXPENSE,
  DELETE_EXPENSE
} from "./types";

import axios from "axios";

const apiUrl = "http://localhost:4000/api"; // Server URL

// Save expense API
export const saveExpenseAPI = (category, text, value) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/save-expense`, { category, text, value })
      .then(response => {
        // Trigger Save Expense action creator for Redux
        dispatch(saveExpenseState(response.data.expense));
      })
      .catch(err => {
        alert(err);
        //throw err;
      });
  };
};

// Save Expense into State
export const saveExpenseState = data => {
  return {
    type: SAVE_EXPENSE,
    id: data.id,
    category: data.category,
    text: data.text,
    value: data.value
  };
};

// Get all Expenses API
export const fetchAllExpensesAPI = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/expenses`)
      .then(response => {
        // Trigger find all expenses action creator for redux
        dispatch(findAllExpensesState(response.data.expenses));
      })
      .catch(err => {
        alert(err);
        //throw err;
      });
  };
};

// Get all Expenses into state
export const findAllExpensesState = expenses => {
  return {
    type: FETCH_EXPENSES,
    expenses
  };
};

// Get an Expense API
export const fetchExpenseAPI = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/expense/${id}`)
      .then(response => {
        let id = response.data.expense[0].id;
        // Trigger find Expense action creator for redux
        dispatch(findExpenseState(id, response.data.expense));
      })
      .catch(err => {
        alert(err);
        //throw err;
      });
  };
};

// Find Expense into State
export const findExpenseState = (id, expenses) => {
  return {
    type: CURRENT_EXPENSE,
    id,
    expenses
  };
};

// Delete Expense API
export const deleteExpenseAPI = id => {
  return dispatch => {
    return axios
      .delete(`${apiUrl}/expense/${id}`)
      .then(response => {
        // Trigger delete expense action creator for redux
        dispatch(deleteExpense(response.data.expense.id));
      })
      .catch(err => {
        alert(err);
        //throw err;
      });
  };
};

// Delete Expense into State
export const deleteExpense = id => {
  return {
    type: DELETE_EXPENSE,
    id
  };
};
