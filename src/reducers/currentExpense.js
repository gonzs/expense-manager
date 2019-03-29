import { CURRENT_EXPENSE } from "../actions/types";

let defaultState = {
  // id
  // category
  // text
  // value
};

// Reducer function for Current Expense
const currentExpense = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENT_EXPENSE: // Get current expense
      if (!action.id) {
        return null;
      }
      return action.expenses.find(n => n.id === action.id);
    default:
      return state;
  }
};
export default currentExpense;
