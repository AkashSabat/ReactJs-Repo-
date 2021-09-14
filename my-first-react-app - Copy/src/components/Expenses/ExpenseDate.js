import './ExpenseDate.css';

function Expensedate(props){

  const day = props.date.toLocaleString('en-US' , {day : '2-digit'});
  const month = props.date.toLocaleString('en-US' , {month : 'long'});
  const year = props.date.getFullYear();

  return (
    <div className = "expense-date">

    {/* ExpenseDate Component is returning the date value and the data is sent to ExpenseItem Component. */}

  <div className="expense-date__day">{day}</div>
  <div className="expense-date__month">{month}</div>
  <div className="expense-date__year">{year}</div>
  </div>
);

}

export default Expensedate;
