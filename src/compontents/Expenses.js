import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses (props) {
    
    return (
        <div className="expenses">
            {
              props.items.map((item) => (
                <ExpenseItem
                  key={item.id}
                  date={item.date}
                  amount={item.amount}
                  title={item.title}
                />
              ))
            }
        </div>
    )
}

export default Expenses;