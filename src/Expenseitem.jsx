import { useState,useEffect } from 'react'

 const Expenseitem = ({item,ondelete}) => {
  return (
     <div className="expense-item">
          <span>{item.title}</span>
          <span>${item.amount}</span>
          <button onClick={()=>ondelete(item.id)}>❌</button>
        </div>
  )
}
export default Expenseitem;
