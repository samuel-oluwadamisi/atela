"use client";
import { useState } from "react";
import { OrderTableTypes } from "../../types/adminTypes";

const OrderDirectoryFullPageScreen = ({
  order,
}: {
  order: OrderTableTypes;
}) => {
  const [form, setForm] = useState({
    dress: order.dress,
    garment: order.garment,
  });

  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="flex justify-end pr-20">
        <button
          onClick={() => setEdit(!edit)}
          className=" p-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
        >
          {edit ? "Save" : "Edit"}
        </button>
      </div>
      <form className="flex flex-col gap-4 w-full max-w-2xl">
        {/* Section 1: Order/Client Info */}
        <h2 className="text-lg font-black text-[#2A1F1A]">Order/Client Info</h2>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">
            Client Name
          </label>
          <input
            type="text"
            value={form.dress}
            onChange={(e) => setForm({ ...form, dress: e.target.value })}
            readOnly={!edit}
            placeholder="e.g. Maison Claire"
            className={`border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors ${
              edit ? "focus:border-[#2A1F1A]" : "cursor-not-allowed"
            }`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">
            Garment Type
          </label>
          <input
            type="text"
            value={form.garment}
            onChange={(e) => setForm({ ...form, garment: e.target.value })}
            readOnly={!edit}
            placeholder="e.g. Silk Blouse"
            className={`border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors ${
              edit ? " focus:border-[#2A1F1A]" : " cursor-not-allowed"
            }`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">
            Description
          </label>
          <textarea
            rows={4}
            placeholder="Describe the order..."
            className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">Deadline</label>
            <input
              type="date"
              className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              Select Stage to Start
            </label>
            <select className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold bg-white transition-colors">
              <option className="text-sm text-[#2A1F1A]" value="">
                Select stage
              </option>
              <option value="Pattern">Pattern</option>
              <option value="Cutting">Cutting</option>
              <option value="Tailoring">Tailoring</option>
            </select>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#C1785A] my-2" />

        {/* Section 3: Staff Assignment */}
        <h2 className="text-lg font-black text-[#2A1F1A]">Assign Staff</h2>

        <div className="flex gap-3 items-center">
          <div className="flex flex-1  flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              Assign Pattern Maker
            </label>
            <select className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] bg-white transition-colors">
              <option value="">Select staff</option>
            </select>
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              Commission
            </label>
            <input
              type="number"
              min={0}
              className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
            />
          </div>
        </div>

      <div className="flex gap-3 items-center">
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">
            Assign Cutter
          </label>
          <select className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] bg-white transition-colors">
            <option value="">Select staff</option>
          </select>
        </div>

        <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              Commission
            </label>
            <input
              type="number"
              min={0}
              className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
            />
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">
            Assign Tailor
          </label>
          <select className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] bg-white transition-colors">
            <option value="">Select staff</option>
          </select>
        </div>
        
        <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              Commission
            </label>
            <input
              type="number"
              min={0}
              className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
            />
        </div>

      </div>


        {/* Divider */}
        <hr className="border-t border-[#C1785A] my-2" />

        {/* Section 2: Cost and Payments */}
        <h2 className="text-lg font-black text-[#2A1F1A]">Cost and Payments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              Material Cost
            </label>
            <input
              type="text"
              placeholder="0"
              className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              First Client Payment
            </label>
            <input
              type="text"
              placeholder="0"
              className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#6E5F54]">
              Second Client Payment
            </label>
            <input
              type="text"
              placeholder="0"
              className="border border-[#E8E1D9] bg-white rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-[#2A1F1A]" />
          <label className="text-xs font-bold text-[#6E5F54]">
            Payment Complete?
          </label>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
          >
            Cancel Order
          </button>
          <button
            type="button"
            className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
          >
            Create Order
          </button>
        </div>
      </form>
    </>
  );
};

export default OrderDirectoryFullPageScreen;
