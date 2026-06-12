"use client";
import Button from "@/shared/components/Button";
import { useState } from "react";

const SecurityScreen = () => {
  const [factoryName, setFactoryName] = useState("");
  return (
    <>
      <div className="bg-white border border-[#E8E1D9] rounded-4xl p-8">
        <p className="font-black text-[17px] text-[#2A1F1A]">Security</p>
        <p className="font-medium text-xs text-[#6E5F54]">
          Manage access control and authentication settings.
        </p>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Change Password</p>
          </div>

          <div
            className="flex items-center border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none
                 placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)]"
          >
            <p className="text-xs font-bold text-[#2A1F1A] ">Update Password</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] pt-4">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Two-Factor Auth</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              Add an extra layer of security to your account.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <div className="bg-[#D4A3731A] h-7 w-30 flex items-center justify-center rounded-sm"> <p className="text-xs text-[#D4A373]">Not Configured</p> </div>
            <div className=" mx-auto flex items-center justify-center my-1 md:my-2 border-2 border-[#FFFFFF] bg-[#2A1F1A] rounded-lg shadow-sm w-14 h-11 ">
              <p className="text-white font-black text-xs">Enable</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Active Sessions</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              Devices currently logged into this workspace.
            </p>
          </div>

          <div
            className="flex items-center border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none
                 placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)]"
          >
            <div className="flex items-center">
                <p className="text-xs font-bold text-[#2A1F1A] ">Update Password</p>
                <div><span className="text-[8px]">Current</span></div>
            </div>
                
          </div>
        </div>


      </div>

      <div className="text-right mt-4">
        <Button label="Save Changes" variant="primary" />
      </div>
    </>
  );
};

export default SecurityScreen;
