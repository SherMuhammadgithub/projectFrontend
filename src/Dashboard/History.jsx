
import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './GlobalData/globalContext'
import Expense from './Expenses/Expense'

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()
    const srcIncome = "https://img.icons8.com/?size=80&id=lFYD3Yo9ave4&format=png";
    const srcExpense = "https://img.icons8.com/?size=80&id=xlaF32F7JR0P&format=png";
    return (
<>
          
            {history.map((item) =>{
                const {id, title, amount, type, description} = item
                return (
                    <li key={id}>
                    <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                      <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src={type == "Expense"?srcExpense:srcIncome}  alt="Bonnie Green image" />
                      <div>
                        <div class="text-base font-normal text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white ">{title}</span> - <span class={`font-medium ${type == "Expense"?"text-red-500": "text-green-500"}`}>{type}</span> </div>
                        <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                          {description} - ${amount}
                        </span>
                      </div>
                    </a>
                  </li>
                )
            })}
</>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History
