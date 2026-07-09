import Navbar from '@/features/staff/components/Navbar'
import Sidebar from '@/features/staff/components/Sidebar'

export default function  StaffLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen overflow-hidden'>
        <div className='w-1/5 h-full'>
            <Sidebar /> 
        </div>
        <div className='w-4/5 h-full bg-[#F7F4F0] overflow-y-auto'>
            <Navbar />
            <div className='p-5'>
             {children}
            </div>
            
        </div>
        
    </div>
  )
}
