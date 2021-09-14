import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const saveExpenseDataHandler =(enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    };
    //console.log(expenseData);
    {/* we are lifting our state up by passing data from NewExpense Component
      to App Component in the below line of code. */}
    props.onAddExpense(expenseData);
  };

  return(
    <div className = "new-expense">

  {/* Here we are passing data from Child Component i.e ExpenseForm to
      Parent Component i.e NewExpense */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
};

export default NewExpense;
