import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const submtHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };



  return (
    <form onSubmit={submtHandler}>
    <div className="new-expense__contols">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          min="0.01"
          step="0.01"
          onChange={handleAmountChange}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          value={date}
          min="2019-01-01"
          max="2023-07-25"
          onChange={handleDateChange}
        />
      </div>
    </div>
    <div className="container">
      <div type="button" className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </div>
  </form>
  )
}
