import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expenses from "./expenses";
import currentExpense from "./currentExpense";

const reducer = combineReducers({
  expenses,
  currentExpense
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
