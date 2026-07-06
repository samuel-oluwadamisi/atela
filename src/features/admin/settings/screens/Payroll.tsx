"use client";
import Button from "@/shared/components/Button";
import { useState } from "react";

const PayrollScreen = () => {
  const [factoryName, setFactoryName] = useState("");
  return (
    <>
      <div className="bg-white border border-[#E8E1D9] rounded-4xl p-8">
        <p className="font-black text-[17px] text-[#2A1F1A]">
          Payment Defaults
        </p>
        <p className="font-medium text-xs text-[#6E5F54]">
          Set default compensation rates for task assignments. These can be
          overridden per order.
        </p>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Pattern Rate</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              Default cost per pattern (commission workers).
            </p>
          </div>

          <input
            value={factoryName}
            onChange={(e) => setFactoryName(e.target.value)}
            placeholder="₦2500"
            className="border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none
             placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)] "
            type="text"
          />
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Cutting Rate</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              Default cost per cut batch (commission workers).
            </p>
          </div>

          <input
            value={factoryName}
            onChange={(e) => setFactoryName(e.target.value)}
            placeholder="₦1200"
            className="border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none 
            placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)]"
            type="email"
          />
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] mt-1 pt-6 pb-4 ">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Tailoring Rate</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              Default cost per garment (commission workers).
            </p>
          </div>

          <input
            value={factoryName}
            onChange={(e) => setFactoryName(e.target.value)}
            placeholder="₦1800"
            className="border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none 
            placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)]"
            type="email"
          />
        </div>

        <div className="flex items-center justify-between border-t border-[#E8E1D9] pt-4">
          <div>
            <p className="font-bold text-sm text-[#2A1F1A]">Pay Schedule</p>
            <p className="font-medium text-xs text-[#6E5F54]">
              How often commission workers receive payment.
            </p>
          </div>

            <input
            value={factoryName}
            onChange={(e) => setFactoryName(e.target.value)}
            placeholder="Weekly"
            className="border-[#E8E1D9] border rounded-xl w-75 p-2 h-10 bg-[#F7F4F0] text-[rgba(42, 31, 26, 0.5)] text-sm font-bold focus:outline-none 
            placeholder:text-xs placeholder:font-bold focus:outline-none placeholder:text-[rgba(42, 31, 26, 0.5)]"
            type="email"
          />
        </div>

      </div>

      <div className="text-right mt-4">
        <Button label="Save Changes" variant="primary" />
      </div>
    </>
  );
};

export default PayrollScreen;
