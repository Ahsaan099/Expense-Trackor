import { useState, useEffect } from 'react'
import Expenseitem from './Expenseitem'

function Expenselist({ expenses, ondelete }) {

  if (!expenses || expenses.length === 0) {
    return <p className="no-expense">No Expense Yet</p>
  }

  return (
    <div className="expense-list">
      {expenses.map(item => (
        <Expenseitem key={item.id} item={item} ondelete={ondelete} />
      ))}
    </div>
  )
}

export default Expenselist;
