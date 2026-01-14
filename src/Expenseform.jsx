import { useState,useEffect, useRef } from 'react'

 function Expenseform({onAddExpense}) {
const [title,settitle] = useState();
const [amount,setamount] = useState();

const handlesubmit = (e)=>{
    e.preventDefault()
    if(!title || !amount) return alert("please fill the form");

    const newexpense = {
        id:Date.now(),
        title,
        amount:parseFloat(amount),
    }

            onAddExpense(newexpense);
            setamount("")
            settitle("")
}
  return (
<>
<form className="expense-form" onSubmit={handlesubmit}>
        <input placeholder="Expense Title" type="text" value={title} onChange={(e)=>settitle(e.target.value)} />
        <input placeholder="Amount $" type="number" value={amount} onChange={(e)=>setamount(e.target.value)} />
        <button type="submit">Add Expense</button>
      </form>
</>
)
}
export default Expenseform;