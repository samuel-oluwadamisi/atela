

type Props = {
    name: string;
    num: number;
    money?: boolean
}
const InfoCard = ({info}: {info:Props}) => {
  return (
    <div className='flex flex-col flex-1 md:justify-between gap-5 md:gap-0 w-full h-22 md:h-30 bg-white border border-[#E8E1D9] shadow-sm rounded-xl md:rounded-3xl p-1 pl-2 md:p-4'>
        <p className='font-bold text-[#C1785A] text-base  '>{info.name}</p>
        <p className='text-[#2A1F1A] font-bold text-2xl md:text-3xl '>{info?.money && '₦'}{info?.num?.toLocaleString('en-US')} </p>
    </div>
  )
}

export default InfoCard