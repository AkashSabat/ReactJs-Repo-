import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  {/* Storing data in a Array */}
  const expenses = [
    {title:'Car Insurance', amount:100 , date: new Date(2021, 2, 28)},
    {title:'Health Insurance', amount:500 , date: new Date(2021, 2, 29)},
    {title:'Vehicle Insurance', amount:650 , date: new Date(2021, 2, 30)},
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
  };

return (
    <div className="App">
      <p> Expense Tracker Project. </p>

      <NewExpense onAddExpense = {addExpenseHandler} />

      {/*Expenses is the custom Component which will be loaded.*/}
      {/* Here we are passing expenses array data to Expenses Custom Component. */}
        <Expenses items={expenses}/>
      </div>
  );
}

export default App;
