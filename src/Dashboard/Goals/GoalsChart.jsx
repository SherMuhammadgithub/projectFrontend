import React from 'react'

export default function GoalsChart() {
  return (
   <main>
    <div className="chart-container shadow-2xl">
        <div className="h-80 w-[40rem] rounded-md bg-red-500 p-8 flex justify-center items-center">
            <div className='bg-white rounded-md w-[30rem] h-72 flex justify-center items-center'>
                <h1 className='text-4xl'>No data Yet</h1>
            </div>
        </div>
    </div>
   </main>
  )
}
