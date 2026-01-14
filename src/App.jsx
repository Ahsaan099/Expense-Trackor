import React, { useState } from 'react'
import './App.css';
import Expenseform from './Expenseform';
import Expenselist from './Expenselist';
function App() {

  const [expenses,setexpenses]=useState([]);

  const addexpense = (expense)=>{
setexpenses((prev)=>[...prev,expense])
  }

  const deleteexpense = (id)=>{
    setexpenses((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
<Expenseform onAddExpense={addexpense}/>

      <h3 className="total">Total Expense: $750.00</h3>
<Expenselist expenses={expenses} ondelete={deleteexpense}/>
     
    </div>
  )
}

export default App;
