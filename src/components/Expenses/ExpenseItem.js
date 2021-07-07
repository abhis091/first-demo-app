import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';



const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.item.title);

    const clickHandler = () => {
        setTitle("UPDATED");
        console.log(title);
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.item.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.item.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    ); 
}

export default ExpenseItem;