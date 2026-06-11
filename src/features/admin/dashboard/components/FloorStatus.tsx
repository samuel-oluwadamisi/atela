import React from 'react'
import FloorStatusTab from './FloorStatusTab'
import { FiFileText, FiScissors } from "react-icons/fi";
import { RiStackLine } from "react-icons/ri";

const FloorStatus = () => {

    const staffStatus = [
        {staff: "Pattern", bgColor: 'bg-[#D4A3731A]', color: '#D4A373', number: 1, Icon: FiFileText},
        {staff: "Cutting", bgColor: 'bg-[#3A5A8C1A]', color: '#3A5A8C', number: 2, Icon: FiScissors},
        {staff: "Tailoring", bgColor: 'bg-[#4A7C591A]', color: '#4A7C59', number: 2, Icon: RiStackLine},
    ]
  return (
    <main className=' w-1/3 mt-3'>
        <p className='text-[#2A1F1A] text-lg font-black mb-1 pl-2'>Floor Status</p>
        <div className='bg-white border border-[#E8E1D9] w-full h-full rounded-4xl p-4'>
           { staffStatus.map((data, index) =>(
            <FloorStatusTab {...data} key={index} />
            ))}
        </div>
    </main>
  )
}

export default FloorStatus