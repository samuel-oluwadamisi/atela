'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { TbActivityHeartbeat } from "react-icons/tb";
import { GoStack } from "react-icons/go";
import { PiCube } from "react-icons/pi";
import { LuSettings, LuLogOut } from "react-icons/lu";
import Image from "next/image";
import { IconType } from "react-icons";
import { useAuth } from "@/shared/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type SidebarTypes = {
    name: string
    path: string
    Icon: IconType
}


const MobileSidebar = () => {
    const pathname = usePathname()
    const active = (path: string) => {
       if (path === '/admin') return pathname === '/admin'
    return pathname.startsWith(path)
  }

  const {logout} = useAuth()
  const router = useRouter()
  const handleLogout = ()=> {
    logout()
    toast.success('Logged Out Successfully')
    router.push('/login')
  }

    const routes: SidebarTypes[] = [ 
        { name: 'Dashboard', path: '/staff', Icon: TbActivityHeartbeat },
        { name: 'Task Manager', path: '/staff/task-manager', Icon: GoStack  },
        { name: 'Earnings', path: '/staff/earnings', Icon: PiCube  },
        {name: 'Settings', path: '/staff/settings', Icon: LuSettings }
    ]


  return (
    <div className="px-1 h-16 w-full bg-white border-[#E8E1D9] border">

        <div className="w-full h-full flex items-center justify-between px-4">
            {
                routes.map((route, index) => {
                    const isActive = active(route.path)
                    const Icon = route.Icon
                  return(  
                    <div key={index} >
                        <Link href={route.path} className={`w-10 h-10 rounded-full flex items-center justify-center  gap-3 mt-1 cursor-pointer p-3 transition-all delay-75 duration-500  ${isActive ? 'bg-[#C1785A]' : ''}`}>
                        <div> <Icon className= {`{ ${isActive ? 'text-white' : 'text-black'} w-6 h-6 text-center`} /> </div>
                        </Link>
                        <p className={`{ ${isActive ? 'text-[#2A1F1A]' : 'text-black' } text-xs font-bold`}>{route.name}</p>
                    </div>
                  )
            })
            }
            <div>
            <div onClick={()=> handleLogout()}  className='w-10 h-10 rounded-full flex items-center justify-center  gap-3 mt-1 cursor-pointer p-3'>
                <div> <LuLogOut className= 'text-black w-6 h-6 text-center' /> </div>
                
            </div>
            <p className='text-[#2A1F1A] text-xs font-bold'>Logout</p>
            </div>

        </div>



    </div>
  )
}

export default MobileSidebar