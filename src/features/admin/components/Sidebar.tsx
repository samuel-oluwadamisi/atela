'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { TbActivityHeartbeat } from "react-icons/tb";
import { GoStack } from "react-icons/go";
import { PiCube } from "react-icons/pi";
import { LuUsers, LuSettings, LuLogOut } from "react-icons/lu";
import Image from "next/image";
import { IconType } from "react-icons";

type SidebarTypes = {
    name: string
    path: string
    Icon: IconType
}


const Sidebar = () => {
    const pathname = usePathname()
    const active = (path: string) => {
       if (path === '/admin') return pathname === '/admin'
    return pathname.startsWith(path)
  }
    const routes: SidebarTypes[] = [ 
        { name: 'Dashboard', path: '/admin', Icon: TbActivityHeartbeat },
        { name: 'Order Directory', path: '/admin/order-directory', Icon: GoStack  },
        { name: 'Inventory', path: '/admin/inventory', Icon: PiCube  },
        { name: 'Team Output', path: '/admin/team-output', Icon: LuUsers },
        {name: 'Settings', path: '/admin/settings', Icon: LuSettings },
        {name: 'Logout', path: '/admin/logout', Icon: LuLogOut },
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

        <div className="mt-3">
            {
                routes.map((route, index) => {
                    const isActive = active(route.path)
                    const Icon = route.Icon
                  return(  
                    <Link href={route.path} key={index} className={`w-[227px] h-[49px] rounded-xl flex justify-start  gap-3 mt-1 cursor-pointer pt-3.5 px-4 transition-all delay-75 duration-500  ${isActive ? 'bg-[#C1785A]' : ''}`}>
                       <div> <Icon className= {`{ ${isActive ? 'text-white' : 'text-black'} w-6 h-6 text-center`} /> </div>
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