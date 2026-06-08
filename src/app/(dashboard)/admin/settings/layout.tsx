import SettingsSidebar from "@/features/admin/settings/components/Sidebar";


export default function  SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex  gap-5'>
        <div className="w-1/5">
            <SettingsSidebar />
        </div>


        <div className="w-4/5">
        {children}
        </div>

    </div>
  )
}