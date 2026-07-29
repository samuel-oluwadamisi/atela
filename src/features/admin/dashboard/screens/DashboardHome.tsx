
import InfoCard from '../components/InfoCard'
import ProductionBottleneck from '../components/ProductionBottleneck'
import ActionRequired from '../components/ActionRequired'
import FloorStatus from '../components/FloorStatus'

const DashboardHomeScreen = () => {

    const data = [
        {name: 'ACTIVE ORDERS', num: 3, icon: '/images/atela-logo.png', extra: 'Action Required'},
        {name: 'PENDING TASKS ', num: 12, icon: '/images/atela-logo.png', extra: 'Action Required'},
        {name: 'LOW STOCK ITEMS', num: 1, icon: '/images/atela-logo.png', extra: 'Action Required'},
        {name: 'LOW STOCK ITEMS', num: 1, icon: '/images/atela-logo.png', extra: 'Action Required'}
    ]
  return (
    <main>
    <p>I have done somthing </p>
        <div className='flex items-center gap-3 mb-6'>
            {data.map((info, index)=> (
                <InfoCard key={index} info={info} />
            ))}
        </div>

        <ProductionBottleneck />

        <div className='flex mt-5 gap-4'>
            <ActionRequired />
            <FloorStatus />
        </div>    
    </main>
  )
}

export default DashboardHomeScreen