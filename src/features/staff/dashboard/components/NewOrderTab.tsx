import { Check } from 'lucide-react'
import { LuBell } from 'react-icons/lu'

const NewOrderTab = () => {
  return (
        <main className='bg-white flex items-center justify-between w-lg rounded-lg shadow-sm px-3 py-5'>
        <div className='flex items-center justify-center gap-3'>
            <LuBell size={20} color='#C1785A'/>
            <div>
              <p className='text-[#C1785A] font-medium text-sm'>New Request Order</p>
              <p className='text-base  text-[#2A1F1A] font-bold'>Blue Ankara Gown, size: L, Due: Jul 12</p>
            </div>

        </div>

        <button className='bg-green-600 text-white flex items-center justify-center gap-2 text-sm rounded-md cursor-pointer px-4 py-3 font-bold'>
        <Check size={18} /> Accept
        </button>
    </main>
  )
}

export default NewOrderTab