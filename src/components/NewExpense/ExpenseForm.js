import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {


    const [changedTitle, setTitle] = useState('');
    const [changedAmount, setAmount] = useState('');
    const [changedDate, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();  
        const expenseData = {
            title : changedTitle,
            amount : changedAmount,
            date : new Date(changedDate)
        }

        props.onSubmitForm(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    const onCancelHandler = e => {
        props.cancelEdit();
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input required type="text" onChange={titleChangeHandler} value={changedTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input required type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={changedAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input required type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={changedDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="reset" onClick={onCancelHandler}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

