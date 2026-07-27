"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/DataTable";
import { OrderTableTypes } from "../../types/adminTypes";
import { orders } from "../../data/orders";
import { useState } from "react";
import Dialogue from "@/shared/components/Dialogue";
import { GoStack } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import Link  from 'next/link'
import ClientForm from "../components/ClientForm";
import MeasurementForm from "../components/MeasurementForm";

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
        <div className="flex items-center gap-2 min-w-30">
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
  {
  id: "actions",
  header: "",
  cell: ({ row }) => (
    <Link
      href={`/admin/order-directory/${row.original.code}`}
      className="px-3 py-1 text-xs font-bold border border-[#E8E1D9] rounded-lg hover:border-[#C1785A]"
    >
      View
    </Link>
  ),
  },
];



const OrderDirectoryScreen = () => {
  const [showDialogue, setShowDialogue] = useState(false);
  const [modal, setModal ] = useState('start')

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

          <p className="text-lg text-center font-bold text-[#2A1F1A]">
            {modal === 'start' ? 'Client and Order Details' : 'Client Measurements'}
          </p>

          {modal === 'start' ? 
          <ClientForm closeModal = {()=> setShowDialogue(false) } moveNext = {()=> setModal('end')}/> : 
           <MeasurementForm closeModal = {()=> setShowDialogue(false) } moveBack = {()=> setModal('start')} />  }
        </Dialogue>
      )}
    </div>
  );
};

export default OrderDirectoryScreen;
