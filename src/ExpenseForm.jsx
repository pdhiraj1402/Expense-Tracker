import { useState, useRef } from "react"
function ExpenseForm({ addExpense}) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const titleRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        const expense = {
            id : Date.now(),
            title: title,
            amount: parseFloat(amount).toFixed(2)
        }
        addExpense(expense)
        setTitle("")
        setAmount("")
        titleRef.current.focus()
    }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <input placeholder="Expense Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} ref={titleRef}/>
        <input placeholder="Amount ₹" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm