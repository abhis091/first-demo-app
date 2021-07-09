import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setYear] = useState('2021');

    const dropdownChangeHandler = (selectedYear) => {
        setYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onDropdownChange={dropdownChangeHandler} />
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;