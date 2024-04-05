import React, { useEffect } from 'react'
import { useGlobalContext } from './GlobalData/globalContext'
import { dollar } from './GlobalData/Icons';
import Chart from './Chart';
import ChartExample from './Chart';



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
        <div className="col01 w-[60%] h-auto flex justify-center items-center">

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


      <div className="recent-activity mx-16 flex justify-center items-center space-x-16 relative">


        <div class=" col01 p-5 w-full border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <time class="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</time>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn-icons-png.flaticon.com/128/3135/3135706.png" alt="Jese Leos image" />
                <div class="text-gray-600 dark:text-gray-400">
                  <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Lorem ipsum dolor sit amet.</span></div>
                  <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                  <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    Public
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="https://cdn-icons-png.flaticon.com/128/10758/10758868.png" alt="Bonnie Green image" />
                <div>
                  <div class="text-base font-normal text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                  <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                      <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                      <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                    </svg>
                    Private
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>
        <div className=" absolute bottom-5 right-6">
          <img src="https://cdn-icons-png.flaticon.com/256/6009/6009244.png" className='' alt="" />
        </div>
      </div>

    </section>
  )
}
