import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css'

function Expenses (props) {
    
    return (
        <Card className="expenses">
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
        </Card>
    )
}

export default Expenses;