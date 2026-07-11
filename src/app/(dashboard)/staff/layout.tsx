import MobileSidebar from '@/features/staff/components/MobileSidebar'
import Navbar from '@/features/staff/components/Navbar'
import Sidebar from '@/features/staff/components/Sidebar'

export default function  StaffLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen overflow-hidden'>
        <div className='hidden md:block w-1/5 h-full'>
            <Sidebar /> 
        </div>
        <div className='w-full md:w-4/5 h-full bg-[#F7F4F0] overflow-y-auto'>
            <Navbar />
            <div className='px-3 pt-2 pb-20 md:p-5 md:pb-5'>
             {children}
            </div>
            
        </div>
        <div className='fixed bottom-0 left-0 right-0 lg:hidden'>
          <MobileSidebar />
        </div>
        
    </div>
  )
}
