'use client'
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "../../components/DataTable"


type ReviewTypes = {
  code: string
  dress: string
  staff: string
}

  export const columns: ColumnDef<ReviewTypes>[] = [
  {
    accessorKey: "code",       // maps to user.name
    header: "Code",
  },
  {
    accessorKey: "dress",
    header: "Dress",
  },
  {
    accessorKey: "staff",
    header: "Staff",
  },
  {
  id: "actions",           // no accessorKey — this is a custom column
  header: "Actions",
  cell: ({ row }) => {
    const user = row.original   // the full data object for this row
    return (
      <div className="flex items-center justify-center rounded-xl gap-2 w-16 h-10 bg-white border border-[#E8E1D9]">
        <button className="cursor-pointer text-xs font-bold text-[#2A1F1A]">Review</button>
      </div>
    )
  }
}
]

const data:ReviewTypes[] =[
  {code: 'A7B2', dress: 'Maison Claire', staff: 'Marcus Tavenier'},
  {code: 'L2P9', dress: 'Boutique 11', staff: 'Marcus Tavenier'}
]


const ActionRequired = () => {
  return (
    <main className="w-2/3">
      <div className="flex items-center justify-between mb-1 p-2">
        <p className="text-lg font-black text-[#2A1F1A]">Action Required</p>
        <p className="text-xs font-bold text-[#C1785A]">View All Inbox </p>
      </div>
      <DataTable columns={columns} data={data} />
    </main>
  )
}

export default ActionRequired