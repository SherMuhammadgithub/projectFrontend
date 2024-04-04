import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from './GlobalData/globalContext'
import { dateFormat } from './GlobalData/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expense} = useGlobalContext()

    // Merge and sort dates from incomes and expenses
    const dates = [...incomes, ...expense]
        .map(item => dateFormat(item.date))
        .sort((a, b) => new Date(a) - new Date(b));

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: expense.map((expense) => expense.amount),
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

    return (
        <div className='flex justify-center items-center mx-56 p-4 h-96 bg-white rounded-md shadow-2xl'>
            <Line data={data} />
        </div>
    )
}

export default Chart