import "./NewExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/Expensesfilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesCharts";

export default function NewExpenses(props) {
  const [year, setYear] = useState("2020");
  const filterChangeHandler = (selectYear) => {
    setYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={year} 
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
