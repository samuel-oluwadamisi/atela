import InfoCard from "../components/InfoCard"
import NewOrderTab from "../components/NewOrderTab"


    const data = [
        {name: 'ACTIVE ORDERS', num: 3, icon: '/images/atela-logo.png', extra: 'Action Required'},
        {name: 'PENDING TASKS ', num: 12, icon: '/images/atela-logo.png', extra: 'Action Required'},
        {name: 'LOW STOCK ITEMS', num: 1, icon: '/images/atela-logo.png', extra: 'Action Required'},
    ]
const StaffDashboardScreen = () => {
  return (
    <main>
        <NewOrderTab />
        <div className='flex items-center gap-3 mb-6'>
            {data.map((info, index)=> (
                <InfoCard key={index} info={info} />
            ))}
        </div>
    </main>
  )
}

export default StaffDashboardScreen