import react, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


/* React Component is just a JavaScript function*/
function ExpenseItem(props){

  const [title, setTitle] = useState(props.title);



const clickHandler = () => {
  setTitle('Updated!!!')
  console.log(title);
}

return (

    <Card className = "expense-item">
    {/* Here we are passing date as props to ExpenseDate Component. */}
      <ExpenseDate date = {props.date} />
      <div className = "expense-item__description">
      <h2>{title}</h2>
      <div className = "expense-item__price">{props.amount}</div>
      </div>

      {/* 1st way of onclick
      <button onClick = {() => {console.log("Clicked!")}}>Change the title</button>*/}

      {/* 2nd way of onClick */}
      <button onClick ={clickHandler}>Change the title</button>

    </Card>);
}

/* To use this Component , we have to export it from here and import in another file. */
export default ExpenseItem;

{/* In ExpenseItem custom component we are displaying the data for title and Amount. */}
