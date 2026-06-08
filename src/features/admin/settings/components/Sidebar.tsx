'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

const SettingsSidebar = () => {

    const pathname = usePathname()
    const active = (path: string) => {
        const exactPaths = ['/admin', '/admin/settings']
        if (exactPaths.includes(path)) return pathname === path
    return pathname.startsWith(path)
    }

    const routes = [
        {name: 'Workspace', path: '/admin/settings', image: '/images/atela-logo.png' },
        {name: 'Account', path: '/admin/settings/account', image: '/images/atela-logo.png'},
        {name: 'Notifications', path: '/admin/settings/notifications',image: '/images/atela-logo.png'},
        {name: "Payroll", path: '/admin/settings/payroll',image: '/images/atela-logo.png'},
        {name: 'Security', path: '/admin/settings/security',image: '/images/atela-logo.png'},
        {name: 'Danger Zone', path: '/admin/settings/danger-zone',image: '/images/atela-logo.png'},
    ]

  return (
    <div className='bg-white border border-[#E8E1D9] p-2 rounded-3xl'>
        {
             routes.map((route, index) => {
                    const isActive = active(route.path)
                  return(  
                    <Link href={route.path} key={index} className={`w-full h-10 rounded-xl flex gap-3 mt-1 cursor-pointer pt-3.5 px-4 transition-all delay-75 duration-500 ${isActive ? 'bg-[#C1785A]' : ''}`}>
                       <div> <Image src={route.image} alt={`${route.name}-icon`} width={14} height={14} /> </div>
                        <p className={`{ ${isActive ? 'text-white' : 'text-[#2A1F1A]' } text-xs font-bold`}>{route.name}</p>
                    </Link>
                  )
            })
        }
    </div>
  )
}

export default SettingsSidebar