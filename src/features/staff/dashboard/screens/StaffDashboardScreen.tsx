'use client'
import InfoCard from "../components/InfoCard"
import NewOrderTab from "../components/NewOrderTab"
import OrderInProgress from "../components/OrderInProgress"
import { useGetUser } from '@/features/user/hooks/useUser'


    const data = [
        {name: 'Active Orders', num: 3},
        {name: 'Pending Tasks ', num: 12},
        {name: 'Earnings', num: 120000},
    ]
const StaffDashboardScreen = () => {
        const {data: user, isPending} = useGetUser()
        const name = user?.tenant.tenantName.split(' ')[0]
  return (
    <main>
        <p className='text-[#6E5F54] text-sm md:text-sm font-black mb-1'> Welcome: <span className="text-xl md:text-2xl">{isPending? '...' : name} </span> </p>
        <div className='flex items-center gap-1 md:gap-3 mb-3 w-full md:w-[90%]'>
            {data.map((info, index)=> (
                <InfoCard key={index} info={info} />
            ))}
        </div>
         <NewOrderTab />
         <OrderInProgress />
    </main>
  )
}

export default StaffDashboardScreen