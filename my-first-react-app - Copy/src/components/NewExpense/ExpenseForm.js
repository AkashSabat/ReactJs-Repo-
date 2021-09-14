import React , {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  {/* In useState first time nothing was entered. */}
  {/* first argument i.e enteredTitle is the currently entered title. */}
  {/* second element i.e setEnteredTitle is the function for Updating the state. */}

  {/* Here we are having multiple state i.e  useState in one Component. */}
  const [enteredTitle , setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate , setEnteredDate] = useState('');

  /* We can combine all the above multiple useState into one state. */
  {/* const [userInput , setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  }) */}

  const titleChangeHandler = (event) => {


    {/*here we are storing our data in state , so no matters how many times these
      Component function executes , these state is stored and it survives. */}
    setEnteredTitle(event.target.value);
    {/*console.log(" Event ", event.target.value);*/}

      {/*setUserInput({
        ...userInput,
        setEnteredTitle:event.target.value,
      });*/}

      {/* If our State Update depending on the previous state,
        then we should write the below code */}

        {/* setUserInput((previousState) => {
          return {...previousState , enteredTitle:event.target.value};
        }); */}

  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    {/*setUserInput((previousState) => {
      return {...previousState, enteredAmount:event.target.value};
    }); */}

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    {/*setUserInput((previousState) => {
      return {...previousState, enteredDate:event.target.value};
    });*/}
  };

  /* Form Submit Handler */
  const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
      };

      props.onSaveExpenseData(expenseData);

      {/* Here we are clearing or reseting all the form Inputs after the user submits the form. */}
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
  };

  return(
  <form onSubmit = {submitHandler}>
  <div className= "new-expense__controls">

  <div className= "new-expense__controls">
  <label>Title</label>
  <input type = 'text' value={enteredTitle} onChange={titleChangeHandler}/>
  </div>

  <div className= "new-expense__controls">
  <label>Amount</label>
  <input type = 'number' min="1" value={enteredAmount} onChange= {amountChangeHandler}/>
  </div>

  <div className= "new-expense__controls">
  <label>Date</label>
  <input type = 'date' min ="2019-01-20" max = "2022-05-25" value={enteredDate} onChange= {dateChangeHandler}/>
  </div>

  </div>

  <div className="new-expense__actions">
  <button type="submit">Add Expense</button>
  </div>
  </form>

  )
}

export default ExpenseForm;
