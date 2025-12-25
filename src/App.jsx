import './expense.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import { useEffect, useState } from 'react'

function App() {

    const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem("expenses") || "[]"))
    const [totalExpense, setTotalExpense] = useState(0)

    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    }

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id))
    }

    useEffect(() => {
        const totalExpense = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0) 
        setTotalExpense(parseFloat(totalExpense).toFixed(2)) 
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])

    return (
        <>
          <div className="app-container">
            <h1>💰 Expense Tracker</h1>
            <ExpenseForm addExpense={addExpense}/>
            <h3 className="total">Total Expense: ₹{totalExpense}</h3>
            
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
          </div>
        </>
    )
}

export default App
