import Link from 'next/link';
import React from 'react'

type Props = {
    name: string;
    num: number;
}
const InfoCard = ({info}: {info:Props}) => {
  const show = info.name === 'Earnings' ? true : false
  return (
    <div className='flex flex-col flex-1 md:justify-between gap-5 md:gap-0 w-full h-22 md:h-30 bg-white border border-[#E8E1D9] shadow-sm rounded-xl md:rounded-3xl p-2 md:p-4'>
        <p className='font-bold text-[#2A1F1A] text-sm  '>{info.name}</p>
        <p className='text-[#2A1F1A] font-bold text-xl md:text-3xl '> <span className=' font-medium'>{show && '₦'}</span> {info?.num?.toLocaleString('en-US')} </p>
    </div>
  )
}

export default InfoCard