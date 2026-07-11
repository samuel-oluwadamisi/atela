 type Props = {
  name: string;
  amount: number;
  status: string;
  date: string;
 }

const RecentCommissionsTab = ({data}: {data: Props}) => {
  return (
    <div className='flex items-center justify-between border-b-[#C1785A] border-b w-full md:w-[90%] h-13 px-3 mt-3'>
        <div className="">
          <p className="text-base font-bold">{data.name}</p>
          <p className="text-xs font-medium">{data.status + ' ' + data.date}</p>
        </div>
        <p className="text-green-600 font-bold text-xl">₦{data.amount.toLocaleString()}</p>
    </div>
  )
}

export default RecentCommissionsTab