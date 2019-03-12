import React from 'react'
import './App.css'
import Add from './containers/Add'
import ExpensesList from './components/ExpensesList';

const App = () => (
  <div className="App">
    <Add />
    <ExpensesList/>
  </div>
)
export default App
