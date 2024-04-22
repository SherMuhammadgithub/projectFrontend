import React from "react";
import Chart from "../Chart";
import GoalsAside from "./GoalsAside";
import GoalsChart from "./GoalsChart";
import Goals from "./Goals";

export default function GoalsLayout() {
  return (
    <main className="animate__animated animate__fadeIn">
      <div className="flex justify-center items-center w-full space-x-10 my-16">
        <div className="chart-container">
          <GoalsChart />
        </div>
        <div className="total-goals-container">
          <GoalsAside />
        </div>
      </div>
      <footer>
        <div
          className="goals-container bg-transparent overflow-y-scroll p-10 h-60 rounded-md mx-10 shadow-2xl"
          style={{ scrollbarWidth: "none" }}
        >
          <header className="flex justify-center items-center  ">
            <div className="title">
              <h1
                className="text-4xl font-bold"
                style={{ fontFamily: "Kaushan Script" }}
              >
                Goals
              </h1>
            </div>
            <div className="button ml-auto">
              <button className="btn text-white text-sm bg-[#07271f]">
                Add Goals
              </button>
            </div>
          </header>
          <div class="relative overflow-x-auto shadow-2xl sm:rounded-lg mx-32">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead
                class="text-base
         text-white uppercase bg-[#07271f] dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <Goals />
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </main>
  );
}
