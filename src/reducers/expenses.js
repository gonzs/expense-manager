import { ADD_EXPENSE, FETCH_EXPENSES } from "../actions/types";

/*const defaultState = [
  {
    id: 1,
    category: "Income",
    text: "sueldo",
    value: 1000
  },
  {
    id: 2,
    category: "Expense",
    text: "kiosco",
    value: 10
  }
];*/

let defaultState = [];

const expenses = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        {
          id: action.id,
          category: action.category,
          text: action.text,
          value: action.value
        }
      ];
    case FETCH_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};
export default expenses;
