'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { TbActivityHeartbeat } from "react-icons/tb";

const SettingsSidebar = () => {

    const pathname = usePathname()
    const active = (path: string) => {
        const exactPaths = ['/admin', '/admin/settings']
        if (exactPaths.includes(path)) return pathname === path
    return pathname.startsWith(path)
    }

    const routes = [
        {name: 'Workspace', path: '/admin/settings', Icon: TbActivityHeartbeat },
        {name: 'Account', path: '/admin/settings/account', Icon: TbActivityHeartbeat},
        {name: 'Notifications', path: '/admin/settings/notifications',Icon: TbActivityHeartbeat},
        {name: "Payroll", path: '/admin/settings/payroll',Icon: TbActivityHeartbeat},
        {name: 'Security', path: '/admin/settings/security',Icon: TbActivityHeartbeat},
        {name: 'Danger Zone', path: '/admin/settings/danger-zone',Icon: TbActivityHeartbeat},
    ]

  return (
    <div className='bg-white border border-[#E8E1D9] p-2 rounded-3xl'>
        {
             routes.map((route, index) => {
                    const isActive = active(route.path)
                    const Icon = route.Icon
                  return(  
                    <Link href={route.path} key={index} className={`w-full h-10 rounded-xl flex gap-3 mt-1 cursor-pointer pt-3.5 px-4 transition-all delay-75 duration-500 ${isActive ? 'bg-[#C1785A]' : ''}`}>
                        <div> <Icon className= {`{ ${isActive ? 'text-white' : 'text-black'} w-4 h-4 text-center`} /> </div>
                        <p className={`{ ${isActive ? 'text-white' : 'text-[#2A1F1A]' } text-xs font-bold`}>{route.name}</p>
                    </Link>
                  )
            })
        }
    </div>
  )
}

export default SettingsSidebar