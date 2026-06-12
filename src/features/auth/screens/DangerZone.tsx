"use client";
import Button from "@/shared/components/Button";
import { useState } from "react";

const DangerZoneScreen = () => {
      const [factoryName, setFactoryName] = useState("");
  return (
        <>
      <div className="bg-white border border-[#E8E1D9] rounded-4xl p-8">
        <p className="font-black text-[17px] text-[#2A1F1A]">Danger Zone</p>
        <p className="font-medium text-xs text-[#6E5F54]">
          Irreversible actions. Proceed with caution.
        </p>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Display Name</p>
          </div>

          <input
            value={factoryName}
            onChange={(e) => setFactoryName(e.target.value)}
            placeholder="Admin User"
            className="border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none
             placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)] "
            type="text"
          />
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Admin Email</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              Used for login and system notifications
            </p>
          </div>

          <input
            value={factoryName}
            onChange={(e) => setFactoryName(e.target.value)}
            placeholder="admin@fashionhouse.com"
            className="border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none 
            placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)]"
            type="email"
          />
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] pt-4">
            <div>
                <p className='font-bold text-sm text-[#2A1F1A]'>Avatar Initials</p>
                <p className='font-medium text-xs text-[#6E5F54]'>Auto-generated from your display name</p>
            </div>

            <div className="flex items-center gap-1">
                <div className=' mx-auto flex items-center justify-center my-1 md:my-2 border-2 border-[#FFFFFF] bg-[#2A1F1A] rounded-lg shadow-sm w-11 h-11 '>
                <p className='text-white font-black text-sm'>AS</p> 
                </div>
                <p className="text-xs text-[#6E5F54]">Auto-generated</p>
            </div>
            </div>
        </div>

      <div className="text-right mt-4">
        <Button label="Save Changes" variant="primary" />
      </div>
    </>
  )
}

export default DangerZoneScreen