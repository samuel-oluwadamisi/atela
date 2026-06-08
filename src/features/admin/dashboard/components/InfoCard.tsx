'use client'
import Image from "next/image"

    type InfoTypes = {
        name: string,
        num: number,
        icon:string,
        extra: string
    }

const InfoCard = ({info} : {info:InfoTypes}) => {
  return (
    <div className='w-full h-40 bg-white border border-[#E8E1D9] shadow-sm rounded-3xl px-4 py-4'>
        <div className='flex items-center justify-between mb-6'>
            <div className='bg-[#F7F4F0] rounded-lg w-10 h-10 flex items-center justify-center'> 
            <Image src={info.icon} alt="Atela-logo" width={20} height={20}  /> 
            </div>

            <div className='bg-[#F7F4F0] p-1.5 rounded-xl'> <p className="text-xs text-[#6E5F54] ">{info.extra}</p> </div>
        </div>

        <p className="text-[#2A1F1A] text-4xl font-black mb-2">{info.num}</p>

        <p className="text-[13px] font-bold">{info.name} </p>
    </div>
  )
}

export default InfoCard