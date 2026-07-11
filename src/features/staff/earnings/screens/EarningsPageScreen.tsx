import React from 'react'
import InfoCard from '../../components/InfoCard'
import RecentCommissionsTab from '../components/RecentCommissionsTab'


    const data = [
        {name: 'Total This Week', num: 54500, money: true},
        {name: 'Total This Month', num: 120000, money: true},
        {name: 'Pending Payout', num: 3500, money: true},
    ]

    const recentCommissions = [
        {name: 'Green Aso Ebi Set, Mrs Chidinma', amount: 3500, status: 'in Progress', date: ''},
        {name: 'Agbada, Mr Ade', amount: 5200, status: 'Completed',date: 'Jul 3'},
        {name: 'Blouse Mrs Eze', amount: 2000, status: 'Completed', date: 'June 29'},
        {name: 'Green Aso Ebi Set, Mrs Chidinma', amount: 3500, status: 'Completed', date: 'June 28'},
    ]

const EarningsPageScreen = () => {
  return (
    <>
        <div className='flex items-center gap-1 md:gap-3 mb-3 w-full md:w-[90%]'>
            {data.map((info, index)=> (
                <InfoCard key={index} info={info} />
            ))}
        </div>

        <p className='text-sm font-medium mt-3'>Recent Commissions</p>
        {
            recentCommissions.map((data, index)=> (
                 <RecentCommissionsTab key={index} data= {data} />
            ))
        }
       
    </>
  )
}

export default EarningsPageScreen