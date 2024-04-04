import React from 'react'
import { bitcoin, book, card,  circle,  clothing,  comment,  dollar, food, freelance, medical, money, piggy, stocks, takeaway, tv, users, yt } from '../GlobalData/Icons';

export default function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type }) {



   
        const categoryIcon = () =>{
            switch(category) {
                case 'salary':
                    return money;
                case 'freelancing':
                    return freelance
                case 'investments':
                    return stocks;
                case 'stocks':
                    return users;
                case 'bitcoin':
                    return bitcoin;
                case 'bank':
                    return card;
                case 'youtube':
                    return yt;
                case 'other':
                    return piggy;
                default:
                    return ''
            }
        }
    
        const expenseCatIcon = () => {
            switch (category) {
                case 'education':
                    return book;
                case 'groceries':
                    return food;
                case 'health':
                    return medical;
                case 'subscriptions':
                    return tv;
                case 'takeaways':
                    return takeaway;
                case 'clothing':
                    return clothing;
                case 'travelling':
                    return freelance;
                case 'other':
                    return circle;
                default:
                    return ''
            }
        }
    
        console.log('type', type)
    return (
        
<>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 flex items-center">
                    <div className='mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center'> {type === 'Expense' ? expenseCatIcon() : categoryIcon()}</div>
                    <div>{description}</div>
                    
                    
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {title}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                       
                        
                           {date}
                        
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {dollar}-{amount}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => deleteItem(id) }>Remove</a>
                </td>
            </tr>
            </>
    )
}



     