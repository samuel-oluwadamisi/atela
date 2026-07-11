'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'
import { LuBell } from 'react-icons/lu'

const NewOrderTab = () => {
  const [isAccepted, setIsAccepted ] = useState(false)
  return (
        <main className={`bg-white flex flex-col  md:flex-row md:items-center md:justify-between w-full md:w-lg rounded-lg shadow-sm px-3 py-2 md:py-5 transition-all duration-75 ease-in ${isAccepted && 'border-2 border-[#C1785A]'} `}>
        <div className='flex items-center md:justify-center gap-3 mb-1'>
            <LuBell size={20} color='#C1785A'/>
            <div>
              <p className='text-[#C1785A] font-bold text-sm md:text-sm mb-.5'>New Request Order</p>
              <p className='text-sm md:text-base  text-[#2A1F1A] font-bold'>Blue Ankara Gown, size: L, Due: Jul 12</p>
            </div>

        </div>

  
        <button onClick={()=> setIsAccepted(!isAccepted)} className={`${isAccepted ? 'bg-[#C1785A]': 'bg-green-600'} transition-all duration-75 ease-in w-[90%] md:w-23 h-10  text-white flex items-center justify-center gap-1 text-[15px] rounded-md cursor-pointer font-bold`}>
       {isAccepted ? '' : <Check size={18} />} {isAccepted ? 'Accepted': 'Accept'}
        </button>
    </main>
  )
}

export default NewOrderTab