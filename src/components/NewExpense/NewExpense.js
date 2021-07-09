import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [editable, setEditable] = useState(false);

    const onSubmitFormHandler = (expenseData) => {
        const expenseDataReceived = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.addNewExpense(expenseDataReceived);
    };

    const addNewExepenseHandler = e => {
        setEditable(true);
    };

    const cancelFormHandler = () => {
        setEditable(false);
    };

    return (
        <div className="new-expense">
            { !editable && <button onClick={addNewExepenseHandler}>Add New Expense</button>}
            {editable && <ExpenseForm cancelEdit = {cancelFormHandler} onSubmitForm = {onSubmitFormHandler} />}
        </div>
    );
}

export default NewExpense;