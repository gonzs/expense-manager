import React from 'react'
import './App.css'
import AddExpense from './containers/AddExpense'
import ExpensesList from './components/ExpensesList';

const App = () => (
  <div className="App">
    <AddExpense />
    <ExpensesList/>
  </div>
)
export default App
