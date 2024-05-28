import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "./GlobalData/globalContext";
import { dateFormat } from "./GlobalData/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expense } = useGlobalContext();

  // Merge and sort dates from incomes and expenses
  const dates = [...incomes, ...expense]
    .map((item) => dateFormat(item.date))
    .sort((a, b) => new Date(a) - new Date(b));

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Income",
        data: incomes.map((income) => income.amount),
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: expense.map((expense) => expense.amount),
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="chart-container shadow-2xl">
      <div className="bg-white rounded-md w-[38rem] h-80 p-4 flex justify-center items-center">
        <Line data={data} />
      </div>
    </div>
  );
}

export default Chart;
