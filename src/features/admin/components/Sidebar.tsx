'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"


const Sidebar = () => {
    const pathname = usePathname()
    const active = (path: string) => {
       if (path === '/admin') return pathname === '/admin'
    return pathname.startsWith(path)
  }
    const routes = [ 
        { name: 'Dashboard', path: '/admin', image: '/images/atela-logo.png' },
        { name: 'Order Directory', path: '/admin/order-directory', image: '/images/atela-logo.png'  },
        { name: 'Inventory', path: '/admin/inventory', image: '/images/atela-logo.png'  },
        { name: 'Team Output', path: '/admin/team-output', image: '/images/atela-logo.png' },
        {name: 'Settings', path: '/admin/settings', image: '/images/atela-logo.png' },
        {name: 'Logout', path: '/admin/logout', image: '/images/atela-logo.png' },
    ]


  return (
    <div className="px-4 h-full w-full bg-white border-[#E8E1D9] border">
        <div className="border-b border-b-[#E8E1D9] w-full h-20 flex items-center ">
            <div className="flex items-center gap-2 mb-2">
                <div className='bg-[#2A1F1A] rounded-lg w-8 h-8 flex items-center justify-center'> 
                <Image src={'/images/logo-white.png'} alt="Atela-logo" width={24} height={24}  /> 
                </div>
                <p className='text-[#2A1F1A] font-poppins font-black text-2xl'>ATELA</p>
            </div>
        </div>

        <div>
            {
                routes.map((route, index) => {
                    const isActive = active(route.path)
                  return(  
                    <Link href={route.path} key={index} className={`w-[227px] h-[49px] rounded-xl flex  gap-3 mt-1 cursor-pointer pt-3.5 px-4 ${isActive ? 'bg-[#C1785A]' : ''}`}>
                       <div> <Image src={route.image} alt={`${route.name}-icon`} width={18} height={18} /> </div>
                        <p className={`{ ${isActive ? 'text-white' : 'text-[#2A1F1A]' } text-sm font-bold`}>{route.name}</p>
                    </Link>
                  )
            })
            }

        </div>



    </div>
  )
}

export default Sidebar