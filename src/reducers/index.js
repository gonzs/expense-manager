import { EXPENSE } from '../actions'
import { createStore } from 'redux'

const expenses = (state, action) => {
    switch (action.type) {
        case EXPENSE:
            return {
                ...state,
                expenses: state.expenses.concat({
                    id: action.id,
                    category: action.category,
                    text: action.text,
                    value: action.value
                })
            }
        default:
            return state
    }
}
export default createStore(expenses, { expenses: [] })