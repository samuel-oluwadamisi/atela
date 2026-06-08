'use client'
import Image from 'next/image'
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()
    const getPageTitle = () => {
      const segments = pathname.split('/').filter(Boolean)
      // ['admin'] or ['admin', 'orders'] or ['admin', 'orders', '123']

      const afterAdmin = segments[1] // index 0 is 'admin', index 1 is what you want

      if (!afterAdmin) return 'Dashboard' // on /admin exactly

      // Capitalise first letter
      return afterAdmin.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

  return (
    <nav className='flex items-center justify-between h-20 bg-white px-5 w-full border-b border-b-[#E8E1D9]'>
        <div>
        <p className='text-[#2A1F1A] text-xl font-black'>{getPageTitle()}</p>
        <p className='text-[#6E5F54] text-xs'>Monday, 1 June 2026. Arnass' Factory Floor</p>
        </div>


        <div className='flex items-center gap-2'>
            <input className='border-[#E8E1D9] border-1 rounded-2xl w-[190px] p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold
            placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)]'
            type="text" placeholder='Search Ref...'  />

            <div className=' mx-auto flex items-center justify-center my-1 md:my-2 border border-[#E8E1D9] rounded-lg shadow-sm w-10 h-10 '>
                <Image src={'/images/notification.png'} alt='Notifications' width={20} height={20} />
            </div>

              <div className=' mx-auto flex items-center justify-center my-1 md:my-2 border-2 border-[#FFFFFF] bg-[#2A1F1A] rounded-lg shadow-sm w-10 h-10 '>
                <p className='text-white font-black text-sm'>AS</p> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar