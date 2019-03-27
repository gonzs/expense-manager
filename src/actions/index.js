import { ADD_EXPENSE, FETCH_EXPENSES, CURRENT_EXPENSE } from "./types";
import axios from "axios";

const apiUrl = "http://localhost:4000/api";

export const createExpense = (category, text, value) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/save-expense`, { category, text, value })
      .then(response => {
        dispatch(addExpense(response.data.expense));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const addExpense = data => {
  return {
    type: ADD_EXPENSE,
    id: data.id,
    category: data.category,
    text: data.text,
    value: data.value
  };
};

export const fetchExpenses = expenses => {
  return {
    type: FETCH_EXPENSES,
    expenses
  };
};

export const fetchAllExpenses = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/expenses`)
      .then(response => {
        dispatch(fetchExpenses(response.data.expenses));
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };
};

export const findCurrentExpense = (id, expenses) => {
  return {
    type: CURRENT_EXPENSE,
    id,
    expenses
  };
};
