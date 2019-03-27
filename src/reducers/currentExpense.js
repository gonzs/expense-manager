import { CURRENT_EXPENSE } from "../actions/types";

const defaultState = {};

const currentExpense = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENT_EXPENSE:
      if (!action.id) {
        return null;
      }

      return action.expenses.find(n => n.id === action.id);
    default:
      return state;
  }
};
export default currentExpense;
