"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/DataTable";
import { InventoryTypes } from "../types/inventoryTypes";
import { useState } from "react";
import Dialogue from "@/shared/components/Dialogue";
import { IoCloseSharp } from "react-icons/io5";
import { GoStack } from "react-icons/go";

type ColorTypes = {
  bg: string;
  text: string;
  dot: string;
};

export const columns: ColumnDef<InventoryTypes>[] = [
  {
    accessorKey: "name", // maps to user.name
    header: "Name",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const stage = getValue<string>();

      const colors: Record<string, ColorTypes> = {
        Sufficient: {
          bg: "bg-[#4A7C591A]",
          text: "text-[#4A7C59]",
          dot: "bg-[#4A7C59]",
        },
        "Low Stock": {
          bg: "bg-[#D4A3731A]",
          text: "text-[#D4A373]",
          dot: "bg-[#D4A373]",
        },
      };

      const colorClass = colors[stage] ?? "bg-[#F3F4F6] text-[#374151]";

      return (
        <div
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${colorClass.text} ${colorClass.bg}`}
        >
          <div className={`w-2 h-2 rounded-full ${colorClass.dot} `}></div>
          {stage}
        </div>
      );
    },
  },
];

const data: InventoryTypes[] = [
  {
    name: "Raw Silk",
    color: "Ivory",
    stock: 105,
    unit: "Meters",
    status: "Sufficient",
  },
  {
    name: "Linen",
    color: "Navy",
    stock: 15,
    unit: "Meters",
    status: "Low Stock",
  },
  {
    name: "Cotton Thread",
    color: "Black",
    stock: 50,
    unit: "Spools",
    status: "Sufficient",
  },
  {
    name: "Interfacing",
    color: "Medium",
    stock: 85,
    unit: "Meters",
    status: "Sufficient",
  },
];

const InventoryScreen = () => {
  const [showDialogue, setShowDialogue] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-black text-[#2A1F1A] text-lg ">Raw Materials</p>
        <button
          onClick={() => setShowDialogue(true)}
          className="bg-[#2A1F1A] ml-auto flex items-center justify-center gap-1 w-30 h-10 text-white font-bold text-xs rounded-xl text-center"
        >
          {" "}
          <span className=" text-base text-center ">+</span>Add Inventory{" "}
        </button>
      </div>

      <div>
        <DataTable columns={columns} data={data} />
      </div>

      {showDialogue && (
        <Dialogue>
          <div className="flex items-center justify-between">
            <div className="bg-[#F7F4F0] w-10 h-10 rounded-xl flex items-center justify-center">
              <GoStack className="w-5 h-5 text-center" />{" "}
            </div>
            <p className="text-[#2A1F1A] text-2xl font-black">Log Inventory</p>
            <IoCloseSharp
              className="text-xl cursor-pointer w-5 h-5 text-[#6E5F54]"
              onClick={() => setShowDialogue(false)}
            />
          </div>

          <p className="text-sm font-normal text-[#6E5F54] text-center">
            Invite a new team member to the factory floor.
          </p>

          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 mt-3">
              <label className="text-xs font-bold text-[#6E5F54]">Material Type</label>
              <input
                type="text"
                placeholder="e.g. Chiffon"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">
                Material Color
              </label>
              <input
                type="text"
                placeholder="Blue"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">No of Stock</label>
              <input
                type="number"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">Unit</label>
              <input
                type="text"
                placeholder="yards"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex justify-end gap-2 mt-2 px-3">
              <button
                type="button"
                onClick={() => setShowDialogue(false)}
                className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </Dialogue>
      )}
    </>
  );
};

export default InventoryScreen;
