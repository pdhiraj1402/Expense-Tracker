import ExpenseItem from "./ExpenseItem"


function ExpenseList({expenses, deleteExpense}) {

    if(expenses.length === 0) 
    return (
        <div className="no-expense">No Expenses Found</div>
    )

    return (
            <div className="expense-list">
                {
                    expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense}/>    
                    ))
                }
            </div>
    )
}

export default ExpenseList