import React, { useEffect } from 'react'
import { useGlobalContext } from './GlobalData/globalContext'
import { dollar } from './GlobalData/Icons';
import  Chart  from './Chart';
import ChartExample from './Chart';



export default function Dashboard() {
  
  const {user,totalIncome,getIncomes,totalExpense,getExpenses,totalBalance} = useGlobalContext();
  useEffect(() => {
    getIncomes() 
    getExpenses()
  },10)
  
  return (
    <section className = "animate__animated animate__fadeIn">

    <div className="header w-full border-b border-gray-300  p-8 flex  justify-center items-center text-white">
    <h1 className='  text-4xl mx-6' style={{fontFamily:'Kaushan Script'}}>Welcome</h1>
      <h1 className='font-bold text-4xl text-[#07271f]'>{user.name}</h1>
    </div>
        <div className=" p-10  flex flex-wrap flex-col w-full ">
            <div className="flex  w-full justify-center items-center space-y-10 md:space-y-0 md:space-x-10 flex-wrap">
              {/* card 01 */}
              <div className=" flex-col   bg-blue-100  w-56 h-28 sm:w-auto justify-start sm:justify-start border-b-2   inline-flex  leading-none tracking-wider rounded-t border  border-b-blue-600 shadow-2xl rounded-md">
                <a className="sm:px-6 py-3 p-4 tracking-wider mx-12 mt-0 title-font font-medium m-2"
                >
                Current Balance 
            </a>
            <div className="flex flex-row mx-6 justify-center items-center">
             
              <h2 className="text-2xl justify-center ">{totalBalance()}{dollar}</h2>
              
              <a className="w-12 justify-center ml-20 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon text-green-500 stroke-current" viewBox="0 0 512 512">
                  <rect x="48" y="144" width="416" height="288" rx="48" ry="48" fill="none" stroke-linejoin="round" stroke-width="32"/>
                  <path d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49" fill="none" stroke-linejoin="round" stroke-width="32"/>
                  <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"/>
                </svg>
              </a>
            </div>
            
              </div>  
              {/* card 02 */}
              <div className=" flex-col   bg-green-100  w-56 h-28 sm:w-auto justify-start sm:justify-start border-b-2   inline-flex  leading-none tracking-wider rounded-t border  border-b-green-600 shadow-2xl rounded-md">
                <a className="sm:px-6 py-3 p-4 tracking-wider text-center mt-0 title-font font-medium m-2"
                >
               Incomes
            </a>
            <div className="flex flex-row mx-6 justify-center items-center">
             
              <h2 className="text-2xl justify-center ">{totalIncome()}{dollar}</h2>
              
              <a className="w-12 justify-center ml-20 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon text-green-500 stroke-current" viewBox="0 0 512 512">
                  <rect x="48" y="144" width="416" height="288" rx="48" ry="48" fill="none" stroke-linejoin="round" stroke-width="32"/>
                  <path d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49" fill="none" stroke-linejoin="round" stroke-width="32"/>
                  <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"/>
                </svg>
              </a>
            </div>
            
              </div>  
                
                 {/* card 03 */}
             
                 <div className=" flex-col   bg-slate-100  w-56 h-28 sm:w-auto justify-start sm:justify-start border-b-2   inline-flex  leading-none tracking-wider rounded-t border  border-b-slate-500  shadow-2xl rounded-md">
                <a className="sm:px-6 py-3 p-4 tracking-wider mx-12 mt-0 title-font font-medium m-2"
                >
                Expenses
            </a>
            <div className="flex flex-row mx-6 justify-center items-center">
             
              <h2 className="text-2xl justify-center ">{totalExpense()}{dollar}</h2>
              
              <a className="w-12 justify-center ml-20 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon text-green-500 stroke-current" viewBox="0 0 512 512">
                  <rect x="48" y="144" width="416" height="288" rx="48" ry="48" fill="none" stroke-linejoin="round" stroke-width="32"/>
                  <path d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49" fill="none" stroke-linejoin="round" stroke-width="32"/>
                  <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"/>
                </svg>
              </a>
            </div>
            
              </div>  

    </div>
    </div>
       
<ChartExample/>

    </section>
  )
}
