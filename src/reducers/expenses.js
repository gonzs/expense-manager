import { SAVE_EXPENSE, FETCH_EXPENSES, DELETE_EXPENSE } from "../actions/types";

let defaultState = [
  // Array of
  // id
  // category
  // text
  // value
];

// Reducer function for EXPENSES
const expenses = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_EXPENSE: // Add a new expense
      return [
        ...state,
        {
          id: action.id,
          category: action.category,
          text: action.text,
          value: action.value
        }
      ];

    case DELETE_EXPENSE: // Delete an expense
      return state.filter(expense => {
        return expense.id !== action.id;
      });

    case FETCH_EXPENSES: // Get all expenses
      return action.expenses;
    default:
      return state;
  }
};

export default expenses;
