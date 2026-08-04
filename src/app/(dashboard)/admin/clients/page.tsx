"use client";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import Dialogue from "@/shared/components/Dialogue";
import { IoCloseSharp, IoPersonAddOutline } from "react-icons/io5";
import { DataTable } from "@/features/admin/components/DataTable";
import Link from "next/link";
import { ClientProfile, data } from "@/mock/clients";


type ColorTypes = {
  bg: string;
  text: string;
  dot: string;
};

export const orderStatusColors: Record<string, ColorTypes> = {
  Completed: {
    bg: "bg-[#4A7C591A]",
    text: "text-[#4A7C59]",
    dot: "bg-[#4A7C59]",
  },
  Cancelled: {
    bg: "bg-[#D4A3731A]",
    text: "text-[#D4A373]",
    dot: "bg-[#D4A373]",
  },
};





export const columns: ColumnDef<ClientProfile>[] = [
  {
    accessorKey: "clientName", // maps to user.name
    header: "Name",
  },
  {
    accessorKey: "clientEmail",
    header: "Email",
  },
  {
    accessorKey: "clientPhone",
    header: "Phone",
  },
  {
    accessorKey: "clientAddress",
    header: "Address",
  },
  {
  id: "lastOrder",
  header: "Last Order",
  accessorFn: (row) => row.orderHistory[0],
  cell: ({ row }) => {
    const lastOrder = row.original.orderHistory[0];

    if (!lastOrder) {
      return <span className="text-xs text-[#6E5F54]">No orders yet</span>;
    }

    const style = orderStatusColors[lastOrder.status] ?? orderStatusColors.Completed;

    return (
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold text-[#2A1F1A]">
          {lastOrder.garmentType}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full text-xs font-bold ${style.bg} ${style.text}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          {lastOrder.status}
        </span>
      </div>
    );
  },
},
   {
  id: "actions",
  header: "",
  cell: ({ row }) => (
    <Link
      href={`/admin/clients/${row.original.id}`}
      className="px-3 py-1 text-xs font-bold border border-[#E8E1D9] rounded-lg hover:border-[#C1785A]"
    >
      View
    </Link>
  ),
  },
];

const ClientPage = () => {
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
           <span className=" text-base text-center ">+</span>Add Client{" "}
         </button>
       </div>
 
       <div>
         <DataTable columns={columns} data={data} />
       </div>
 
       {showDialogue && (
    <Dialogue>
      <div className="flex items-center justify-between">
        <div className="bg-[#F7F4F0] w-10 h-10 rounded-xl flex items-center justify-center">
          <IoPersonAddOutline className="w-5 h-5 text-center" />{" "}
        </div>
        <p className="text-[#2A1F1A] text-2xl font-black">Add Client</p>
        <IoCloseSharp
          className="text-xl cursor-pointer w-5 h-5 text-[#6E5F54]"
          onClick={() => setShowDialogue(false)}
        />
      </div>
 
      <p className="text-sm font-normal text-[#6E5F54] text-center">
        Add a new client to the system.
      </p>
 
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 mt-3">
          <label className="text-xs font-bold text-[#6E5F54]">Client Name</label>
          <input
            type="text"
            placeholder="e.g. Adaeze Nwankwo"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>
 
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Phone Number</label>
          <input
            type="tel"
            placeholder="+234 802 345 6712"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>
 
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Email</label>
          <input
            type="email"
            placeholder="client@email.com"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>
 
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Address</label>
          <textarea
            placeholder="14 Adeola Odeku Street, Victoria Island, Lagos"
            rows={2}
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors resize-none"
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
          onClick={() => setShowDialogue(false)}
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

export default ClientPage