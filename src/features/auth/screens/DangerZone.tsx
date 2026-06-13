"use client";
import { useState } from "react";

const DangerZoneScreen = () => {
      const [factoryName, setFactoryName] = useState("");
  return (
        <>
      <div className="bg-white border border-[#E8E1D9] rounded-4xl p-8">
        <p className="font-black text-[17px] text-[#E7000B]">Danger Zone</p>
        <p className="font-medium text-xs text-[#6E5F54]">
          Irreversible actions. Proceed with caution.
        </p>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Export all Data</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              Download a full backup of orders, staff, and inventory.
            </p>
          </div>

            <button className="border border-[#E8E1D9] rounded-xl text-xs text-[#2A1F1A] text-bold h-10 w-30">Export CSV</button>
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] pt-4 pb-4">
            <div>
                <p className='font-bold text-sm text-[#2A1F1A]'>Reset All Orders</p>
                <p className='font-medium text-xs text-[#6E5F54]'>Clear all production orders while keeping staff and inventory.</p>
            </div>

            <button className="border border-[#FFC9C9] rounded-xl text-xs text-[#FB2C36] text-bold h-10 w-30">Reset Orders</button>
        </div>


        <div className="flex items-center justify-between border-t border-[#E8E1D9] pt-4 pb-4">
            <div>
                <p className='font-bold text-sm text-[#2A1F1A]'>Delete Workspace</p>
                <p className='font-medium text-xs text-[#6E5F54]'>Permanently delete this workspace and all associated data. This cannot be undone.</p>
            </div>
        </div>

        <button className="bg-[#FB2C36] rounded-xl text-xs text-white text-bold h-10 w-30 mt-4 font-bold">Reset Orders</button>
    
    </div>


        
    </>
  )
}

export default DangerZoneScreen