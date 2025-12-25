

function ExpenseItem({expense, deleteExpense}) {

   

    return (
            <div>
                <div className="expense-item" >
                    <span>{expense.title}</span>
                    <span>₹{expense.amount}</span>
                    <button onClick={() => deleteExpense(expense.id)}>❌</button>
                </div>    
            </div>
    )
}

export default ExpenseItem