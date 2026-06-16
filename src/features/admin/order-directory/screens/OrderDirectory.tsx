"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/DataTable";
import { OrderTableTypes } from "../../types/adminTypes";
import { useState } from "react";
import Dialogue from "@/shared/components/Dialogue";
import { GoStack } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";

export const columns: ColumnDef<OrderTableTypes>[] = [
  {
    accessorKey: "code", // maps to user.name
    header: "Code",
  },
  {
    accessorKey: "dress",
    header: "Dress",
  },
  {
    accessorKey: "garment",
    header: "Garment",
  },
  {
    accessorKey: "volume",
    header: "Volume",
  },
  {
    accessorKey: "currentStage",
    header: "Current Stage",
    cell: ({ getValue }) => {
      const stage = getValue<string>();

      const colors: Record<string, string> = {
        Cutting: "bg-[#3A5A8C1A] text-[#3A5A8C]",
        Pattern: "bg-[#D4A3731A] text-[#D4A373]",
        Tailoring: "bg-[#4A7C591A] text-[#4A7C59]",
      };

      const colorClass = colors[stage] ?? "bg-[#F3F4F6] text-[#374151]";

      return (
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}
        >
          {stage}
        </div>
      );
    },
  },
  {
    accessorKey: "progress", // no accessorKey — this is a custom column
    header: "Progress",
    cell: ({ getValue }) => {
      const value = getValue<number>(); // expects a number 0–100

      return (
        <div className="flex items-center gap-2 min-w-[120px]">
          <span className="text-xs text-[#6E5F54] w-8 text-right">
            {value}%
          </span>
          {/* Track */}
          <div className="flex-1 h-1.5 bg-[#E8E1D9] rounded-full overflow-hidden">
            {/* Fill */}
            <div
              className="h-full bg-[#2A1F1A] rounded-full transition-all"
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      );
    },
  },
];

const orders: OrderTableTypes[] = [
  {
    code: "A7B2",
    dress: "Maison Claire",
    garment: "Silk Blouse",
    volume: 45,
    currentStage: "Cutting",
    progress: 30,
    staff: "Marcus Tavenier",
  },
  {
    code: "X9K4",
    dress: "House of Zofu",
    garment: "Linen Trousers",
    volume: 120,
    currentStage: "Pattern",
    progress: 0,
    staff: "Marcus Tavenier",
  },
  {
    code: "B3M1",
    dress: "Atelier Roma",
    garment: "Wool Blazer",
    volume: 15,
    currentStage: "Tailoring",
    progress: 85,
    staff: "Marcus Tavenier",
  },
  {
    code: "J8R5",
    dress: "Maison Claire",
    garment: "Evening Gown",
    volume: 5,
    currentStage: "Tailoring",
    progress: 60,
    staff: "Marcus Tavenier",
  },
  {
    code: "L2P9",
    dress: "Boutique 11",
    garment: "Cotton Shirts",
    volume: 200,
    currentStage: "Cutting",
    progress: 10,
    staff: "Marcus Tavenier",
  },
];

const OrderDirectoryScreen = () => {
  const [showDialogue, setShowDialogue] = useState(false);

  return (
    <div className=" w-full h-full">
      <DataTable
        columns={columns}
        data={orders}
        filters={{
          columnId: "currentStage",
          options: [
            { label: "All", value: "" },
            { label: "Pattern Making", value: "Pattern" },
            { label: "In Cutting Room", value: "Cutting" },
            { label: "In Tailoring", value: "Tailoring" },
          ],
        }}
        button={{
          show: true,
          label: "New Order",
          func: () => setShowDialogue(true),
        }}
      />

      {showDialogue && (
        <Dialogue>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="bg-[#F7F4F0] w-10 h-10 rounded-xl flex items-center justify-center">
                <GoStack className="w-5 h-5 text-center" />{" "}
              </div>
              <p className="text-2xl font-black text-[#2A1F1A]">Create Order</p>
            </div>
            <IoCloseSharp
              className="text-xl cursor-pointer w-5 h-5 text-[#6E5F54]"
              onClick={() => setShowDialogue(false)}
            />
          </div>

          <p className="text-sm font-regular text-[#6E5F54]">
            Initialize a new production run.
          </p>

          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 mt-3">
              <label className="text-xs font-bold text-[#6E5F54]">
                Client Name
              </label>
              <input
                type="text"
                placeholder="e.g. Maison Claire"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">
                Garment Type
              </label>
              <input
                type="text"
                placeholder="e.g. Silk Blouse"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#6E5F54]">
                  Volume
                </label>
                <input
                  type="text"
                  placeholder="0"
                  className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#6E5F54]">
                  Deadline
                </label>
                <input
                  type="date"
                  className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
                />
              </div>
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

            <div className="flex justify-end gap-2 mt-2 px-3">
              <button
                type="button" // ← important: prevents form submit
                onClick={() => setShowDialogue(false)}
                className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
              >
                Initialize
              </button>
            </div>
          </form>
        </Dialogue>
      )}
    </div>
  );
};

export default OrderDirectoryScreen;
