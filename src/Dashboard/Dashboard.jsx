import React, { useEffect } from 'react'
import { useGlobalContext } from './GlobalData/globalContext'
import { dollar } from './GlobalData/Icons';
import Chart from './Chart';
import ChartExample from './Chart';
import History from './History';



export default function Dashboard() {

  const { user, totalIncome, getIncomes, totalExpense, getExpenses, totalBalance } = useGlobalContext();
  useEffect(() => {
    getIncomes()
    getExpenses()
  }, 10)

  return (
    <section className="animate__animated animate__fadeIn">
      <div className="header flex items-center justify-between p-6  border border-b-white">
        <div className=''>
          <h1 className="text-4xl text-white" >Welcome <span className='text-[#07271f]' style={{ fontFamily: 'Kaushan Script' }}>{user.name}</span></h1>
        </div>
        <div className=''>
          <form class="flex items-center max-w-sm mx-auto">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                </svg>
              </div>
              <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500  focus:border-green-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search branch name..." required />
            </div>
            <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-[#07271f] rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="bell-icon flex justify-center items-center">
          <h1 className='text-2xl'>Support</h1>
          <img src="https://cdn-icons-png.flaticon.com/128/15184/15184701.png" className='w-14 h-14' alt="" />
        </div>
      </div>
      <div className="chartbar-container flex flex-col md:flex-row justify-center items-center mx-16 mt-10 mb-4">
        <div className="col01 w-[75%] h-auto flex justify-center items-center">

          <ChartExample />
        </div>
        <div className="col02 w-[40%] h-auto">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="income flex justify-center items-center space-x-10 bg-green-500 p-8 w-72 rounded-md shadow-2xl mx-4 text-white">
              <h1 className='text-2xl'>Income</h1>
              <h1 className='text-2xl'>{dollar}{totalIncome()}</h1>
            </div>
            <div className="expense flex justify-center items-center space-x-10 bg-red-500 p-8 w-72 rounded-md shadow-2xl mx-4 text-white">
              <h1 className='text-2xl'>Expense</h1>
              <h1 className='text-2xl'>{dollar}{totalExpense()}</h1>
            </div>
            <div className="balance flex justify-center items-center space-x-10 bg-blue-500 p-8 w-72 rounded-md shadow-2xl mx-4 text-white">
              <h1 className='text-2xl'>Balance</h1>
              <h1 className='text-2xl'>{dollar}{totalBalance()}</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="recent-activity mx-16 flex justify-center items-center space-x-16 mb-4 relative">


        <div class=" col01 p-5 w-full border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll h-48"
        style={{ scrollbarWidth: "none" }}
        >
          <time class="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</time>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700 ">
           
           <History/>
          </ol>
        </div>
        <div className=" absolute bottom-5 right-6">
          <img src="https://cdn-icons-png.flaticon.com/256/6009/6009244.png" className='' alt="" />
        </div>
      </div>
           
    </section>
  )
}
