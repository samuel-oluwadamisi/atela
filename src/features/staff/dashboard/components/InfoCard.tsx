import React from 'react'

type Props = {
    name: string;
    num: number;
    icon: string;
}
const InfoCard = ({info}: {info:Props}) => {
  return (
    <div className='w-full h-20 bg-white border border-[#E8E1D9] shadow-sm rounded-3xl px-4 py-4'>
        <p className='font-bold text-[#C1785A]'>{info.name}</p>
        <p className='text-[#2A1F1A]  font-bold text-lg'>{info.num}</p>
    </div>
  )
}

export default InfoCard