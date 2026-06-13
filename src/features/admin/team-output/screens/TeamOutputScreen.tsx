'use client'
import { useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "../../components/DataTable"
import { InventoryTypes } from "../../inventory/types/inventoryTypes";



type ColorTypes = {
    bg: string;
    text: string;
    dot: string
}

export type StaffMember = {
  name: string;
  email: string;
  role: string;
  payType: "Salary" | "Commission";
  activeTasks: number;
  outputToday: number;
  efficiency: number;
};

  export const columns: ColumnDef<StaffMember>[] = [
    {
      accessorKey: "name",       // maps to user.name
      header: "Name",
      cell: ({getValue }) => {
        const name = getValue<string>()
        return (
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold`}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-[#E8E1D9] bg-[#F7F4F0] `}>
                {name.charAt(0).toUpperCase()}
            </div>
            <div className="font-bold text-sm text-[#2A1F1A]">{name}</div>
        </div>
    )
      }
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
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



export const staffMembers: StaffMember[] = [
  {
    name: "Sarah Jenkins",
    email: "sarah.j@fashionhouse.com",
    role: "Pattern Maker",
    payType: "Salary",
    activeTasks: 2,
    outputToday: 1,
    efficiency: 98,
  },
  {
    name: "Marcus Torres",
    email: "marcus.t@fashionhouse.com",
    role: "Head Cutter",
    payType: "Salary",
    activeTasks: 1,
    outputToday: 4,
    efficiency: 94,
  },
  {
    name: "Elena Rostova",
    email: "elena.r@fashionhouse.com",
    role: "Senior Tailor",
    payType: "Commission",
    activeTasks: 1,
    outputToday: 2,
    efficiency: 99,
  },
  {
    name: "David Chen",
    email: "david.c@fashionhouse.com",
    role: "Tailor",
    payType: "Commission",
    activeTasks: 0,
    outputToday: 3,
    efficiency: 91,
  },
];
const TeamOutputScreen = () => {

      const filters = ['Staff Directory', 'Output Reports', 'Payroll CSV']

    const [ showDialogue, setShowDialogue ] = useState(false)
    const [activeFilter, setActiveFilter] = useState('Staff Directory')
  return (
    <>
    <div className='flex items-center justify-between'>
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`w-30 h-10 rounded-md text-xs cursor-pointer font-bold transition-colors
                ${
                  activeFilter === filter
                    ? "bg-[#C1785A] text-white"
                    : "bg-white text-[#6E5F54] hover:bg-[#C1785A]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

               <button className="bg-[#2A1F1A] ml-auto flex items-center justify-center gap-1 w-30 h-10 text-white font-bold text-xs rounded-xl text-center"> <span className=" text-base text-center">+</span>Add Member </button>
     </div>
       
           <div className="mt-4">
              {activeFilter === 'Staff Directory' ?  <DataTable columns={columns} data={staffMembers}/> : activeFilter === 'Output Reports' ? 
              (<p>OutPut Reports</p>): activeFilter === 'Payroll CSV' ?
               (<p>Payroll CSV</p>) : (<p>How did you get here??</p>)}
           </div>
    </>
  )
}

export default TeamOutputScreen