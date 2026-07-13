import InfoCard from '../../components/InfoCard'
import RecentCommissionsTab from '../components/RecentCommissionsTab'


    const data = [
        {name: 'Pending', num: 3500, money: true},
        {name: 'Week', num: 54500, money: true},
        {name: 'Month', num: 120000, money: true},
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
        <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-1 md:gap-3 mb-3 w-full md:w-[90%] [&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1'>
            {data.map((info, index)=> (
                <InfoCard key={index} info={info} />
            ))}
        </div>

        <p className='text-lg font-medium mt-5'>Recent Commissions</p>
       <div className='mt-3'> 
        {
            recentCommissions.map((data, index)=> (
                 <RecentCommissionsTab key={index} data= {data} />
            ))
        }
        </div>
       
    </>
  )
}

export default EarningsPageScreen