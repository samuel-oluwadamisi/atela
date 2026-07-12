'use client'
import { useState } from "react"
import { Check } from 'lucide-react'

const OrderInProgress = () => {
      const [isAccepted, setIsAccepted ] = useState(false)
  return (
<section className={`${isAccepted ? 'shadow-md' : 'border-[#C1785A] border'} transition-all duration-75 ease-in  text-[#2A1F1A] text-sm font-bold mt-7 w-ful md:w-[90%] md:px-3 h-47 md:h-37`}>
    <div className=" pt-3 pl-3 mb-3">
        <div className=" flex flex-col md:flex-row md:items-center md:justify-between mb-1">
            <div>
                <p className="text-[#C1785A]">In Progress</p>
                <p className="text-base font-black">Green Aso-ebi set, Mrs. Chidinma</p>
            </div>
            <div>
                <p className="text-[#C1785A]">Time on Task</p>
                <p className="text-base font-black">01:42:07</p>
            </div>
        </div>
        <p>Size: 42, Deadline: Jul 10</p>

    </div>

   <div className="flex items-center justify-center">
     <button onClick={()=> setIsAccepted(!isAccepted)} className={`${isAccepted ? 'bg-[#C1785A]': 'bg-green-600'} transition-all duration-75 ease-in w-[90%] md:w-[70%] h-10 text-white flex items-center justify-center gap-2 text-lg rounded-md cursor-pointer font-bold`}>
        {isAccepted ? '' : <Check size={20} />} {isAccepted ? 'Done': 'Mark as done'}
    </button>
    </div>
</section>
  )
}

export default OrderInProgress