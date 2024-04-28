import React, { useEffect } from "react";
import Cards from "./Cards";
import { useGlobalContext } from "../../utils/globalContext";

export default function UserModel() {
  // get user from local storage
  const user = JSON.parse(localStorage.getItem("selectedUser"));
  const {
    getIncome,
    getExpense,
    getGoals,
    getFeedback,
    expenses,
    incomes,
    goals,
    feedback,
  } = useGlobalContext();
  useEffect(() => {
    getIncome(user.id);
    getExpense(user.id);
    getGoals(user.id);
    getFeedback(user.id);
  }, [
    user.id,
    getIncome,
    getExpense,
    getGoals,
    getFeedback,
    expenses,
    incomes,
    goals,
    feedback,
  ]);
  const totalIncomes = incomes.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalGoals = goals.reduce((acc, item) => acc + item.amount, 0);
  return (
    <>
      <div className="flex items-center w-full">
        <header className="space-y-3 m-5 text-white">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "Kaushan Script" }}
          >
            Single User Preview
          </h1>
          <p className="text-lg">
            This is a single user page, view user's incomes, expenses and goals
            here
          </p>
        </header>
        <div className="ml-auto p-6">
          <h1
            className="text-4xl font-bold  text-[#07271f]"
            style={{ fontFamily: "Kaushan Script" }}
          >
            {user.name}
          </h1>
        </div>
      </div>

      <Cards
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
        totalGoals={totalGoals}
       />
    </>
  );
}
