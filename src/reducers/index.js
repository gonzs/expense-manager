import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expenses from "./expenses";
import currentExpense from "./currentExpense";

// Combine reducers functions
const reducer = combineReducers({
  expenses, // All Expenses
  currentExpense // Expense which was selected
});

// Store Creation
const store = createStore(reducer, applyMiddleware(thunk));

// Export Store to index.js
export default store;
