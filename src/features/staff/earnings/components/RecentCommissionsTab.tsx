 type Props = {
  name: string;
  amount: number;
  status: string;
  date: string;
 }

const RecentCommissionsTab = ({data}: {data: Props}) => {
  return (
    <div className='flex items-center justify-between border-b-[#C1785A]/10 border-b border-opacity-5 w-full md:w-[90%] h-20 p-3 mt-3'>
        <div className="max-w-[70%]">
          <p className="text-lg font-bold">{data.name}</p>
          <p className="text-sm font-medium">{data.status + ' ' + data.date}</p>
        </div>
        <p className="text-green-600 font-bold text-xl">₦{data.amount.toLocaleString()}</p>
    </div>
  )
}

export default RecentCommissionsTab