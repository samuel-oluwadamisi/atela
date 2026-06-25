'use client'
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "../../components/DataTable"
import { InventoryTypes } from '../types/inventoryTypes'

type ColorTypes = {
    bg: string;
    text: string;
    dot: string
}

  export const columns: ColumnDef<InventoryTypes>[] = [
    {
      accessorKey: "name",       // maps to user.name
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
    const stage = getValue<string>()

    const colors: Record<string, ColorTypes> = {
      Healthy: { 
        bg: "bg-[#4A7C591A]", 
        text: "text-[#4A7C59]",
        dot: "bg-[#4A7C59]"
    },
      "Low Stock" :{ 
        bg: "bg-[#D4A3731A]", 
        text: "text-[#D4A373]",
        dot: "bg-[#D4A373]"
    },
        
    }

    const colorClass = colors[stage] ?? "bg-[#F3F4F6] text-[#374151]"

    return (
      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${colorClass.text} ${colorClass.bg}`}>
        <div className={`w-2 h-2 rounded-full ${colorClass.dot} `}></div>{stage}
      </div>
    )
  }
    }
  ]

const data: InventoryTypes[] =[
  {name: 'Raw Silk',color: 'Ivory', stock: 105, unit: 'Meters', status: 'Healthy'},
  {name: 'Linen', color: 'Navy', stock: 15, unit: 'Meters', status: 'Low Stock'},
  {name: 'Cotton Thread', color: 'Black', stock: 50, unit: 'Spools', status: 'Healthy'},
  {name: 'Interfacing', color: 'Medium', stock: 85, unit: 'Meters', status: 'Healthy'},
  
]
const InventoryScreen = () => {
  return (
    <>
    <div className='flex items-center justify-between'>
        <p className='font-black text-[#2A1F1A] text-lg '>Raw Materials</p>
        <button className="bg-[#2A1F1A] ml-auto flex items-center justify-center gap-1 w-30 h-10 text-white font-bold text-xs rounded-xl text-center"> <span className=" text-base text-center">+</span>Add Inventory </button>
    </div>

    <div>
        <DataTable columns={columns} data={data}/>
    </div>
    </>
  )
}

export default InventoryScreen