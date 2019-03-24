
import { createStore, combineReducers } from 'redux'
import expenses from './expenses'
import currentExpense from './currentExpense'

const reducer = combineReducers({
    expenses,
    currentExpense,
})

const store = createStore(reducer)

export default store