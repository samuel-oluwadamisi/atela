import React from 'react'

const SettingsScreen = () => {
  return (
    <div className='bg-white border border-[#E8E1D9] rounded-4xl p-8'>

        <p className='font-black text-base text-[#2A1F1A]'>Workspace</p>
        <p className='font-medium text-xs text-[#6E5F54]'>Configure your factory identity and regional defaults</p>
        
        <div className='flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 '>
            <div>
                <p className='font-bold text-sm text-[#2A1F1A]'>Factory Name</p>
                <p className='font-medium text-xs text-[#6E5F54]'>Shown across all documents and exports</p>
            </div>

            <input className='border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none '
            type="text"  />
        </div>



        <div className='flex items-center justify-between border-t border-[#E8E1D9] pt-4 '>
            <div>
                <p className='font-bold text-sm text-[#2A1F1A]'>Team Size</p>
            </div>

            <input className='border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none '
            type="text"  />
        </div>

    </div>
  )
}

export default SettingsScreen