'use client'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { useGetUser } from '@/features/user/hooks/useUser'

const Navbar = () => {

    const {data: user, isPending, isError} = useGetUser()
    const pathname = usePathname()
    const getPageTitle = () => {
      const segments = pathname.split('/').filter(Boolean)

      const afterAdmin = segments[1] 

      if (!afterAdmin) return 'Dashboard'

      // Capitalise first letter
      return afterAdmin.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    const name = user?.tenant.tenantName
    const initials = name?.split(' ').map((word)=> word[0])

  return (
    <nav className='flex items-center justify-between h-20 bg-white px-2 md:px-5 w-full border-b border-b-[#E8E1D9]'>
        <div className='flex items-center justify-center gap-3'>
        <p className='text-[#2A1F1A] text-xl font-black'>{getPageTitle()}</p>
        </div>
        {/* <p className='text-[#6E5F54] text-sm font-black'>{isPending? '...' : name} </p> */}



        <div className='flex items-center gap-2'>

            <div className=' mx-auto flex items-center justify-center my-1 md:my-2 border border-[#E8E1D9] rounded-lg shadow-sm w-10 h-10 '>
                <Image src={'/images/notification.png'} alt='Notifications' width={20} height={20} />
            </div>

              <div className=' mx-auto flex items-center justify-center my-1 md:my-2 border-2 border-[#FFFFFF] bg-[#2A1F1A] rounded-lg shadow-sm w-10 h-10 '>
               {isError ? 'error' : <span className='text-white font-black text-xs'>{isPending? '...' : initials}</span> }
              </div>
        </div>
    </nav>
  )
}

export default Navbar