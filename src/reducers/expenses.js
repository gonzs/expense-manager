import { EXPENSE } from '../actions/addExpense'

const defaultState = [
    {
        id: 1,
        category: 'Income',
        text: 'sueldo',
        value: 1000,
    },
    {
        id: 2,
        category: 'Expense',
        text: 'kiosco',
        value: 10,
    }
]

const expenses = (state = defaultState, action) => {
    switch (action.type) {
        case EXPENSE:
            return [
                ...state,
                {
                    id: action.id,
                    category: action.category,
                    text: action.text,
                    value: action.value,
                }
            ]
        default:
            return state
    }
}
export default expenses