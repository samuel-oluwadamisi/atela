'use client'
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "../../components/DataTable"
import { OrderTableTypes } from '../../types/adminTypes';
import { useState } from "react";



  export const columns: ColumnDef<OrderTableTypes>[] = [
    {
      accessorKey: "code",       // maps to user.name
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
    const stage = getValue<string>()

    const colors: Record<string, string> = {
      "Cutting":    "bg-[#3A5A8C1A] text-[#3A5A8C]",
      "Pattern":     "bg-[#D4A3731A] text-[#D4A373]",
      "Tailoring":     "bg-[#4A7C591A] text-[#4A7C59]",
    }

    const colorClass = colors[stage] ?? "bg-[#F3F4F6] text-[#374151]"

    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
        {stage}
      </div>
    )
  }
    },
    {
    accessorKey: "progress",           // no accessorKey — this is a custom column
    header: "Progress",
      cell: ({ getValue }) => {

    const value = getValue<number>()  // expects a number 0–100

    return (
      <div className="flex items-center gap-2 min-w-[120px]">

         <span className="text-xs text-[#6E5F54] w-8 text-right">{value}%</span>
        {/* Track */}
        <div className="flex-1 h-1.5 bg-[#E8E1D9] rounded-full overflow-hidden">
          {/* Fill */}
          <div
            className="h-full bg-[#2A1F1A] rounded-full transition-all"
            style={{ width: `${value}%` }}
          />
        </div>
       
      </div>
    )
  }
  }
  ]

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

  const [showDialogue, setShowDialogue ] = useState(false)



  return (
    <>
      <DataTable columns={columns} data={orders} filters={{
        columnId: "currentStage", 
        options: [
          { label: "All",         value: "" },
          { label: "Pattern Making",   value: "Pattern" },
          { label: "In Cutting Room",    value: "Cutting" },
          { label: "In Tailoring",    value: "Tailoring" },
        ],
      }} button = {{ show : true, label: 'New Order',fn : ()=> setShowDialogue(true) }} />

    </>
  )
}

export default OrderDirectoryScreen