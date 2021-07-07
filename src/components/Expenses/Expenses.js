import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem item={props.items[0]}></ExpenseItem>        
            <ExpenseItem item={props.items[1]}></ExpenseItem>        
            <ExpenseItem item={props.items[2]}></ExpenseItem>        
            <ExpenseItem item={props.items[3]}></ExpenseItem>        
        </Card>
    );
}

export default Expenses;