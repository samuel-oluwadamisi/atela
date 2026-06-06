import Navbar from '@/features/admin/components/Navbar'
import Sidebar from '@/features/admin/components/Sidebar'

export default function  AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
        <div className='w-1/5 h-full'>
            <Sidebar /> 
        </div>
        <div className='w-4/5 px-5'>
            <Navbar />
            {children}
        </div>
        
    </div>
  )
}
