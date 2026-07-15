'use client'
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/features/admin/components/DataTable";
import Link from "next/link";
import { tasks } from "../../data/tasks";
import { TaskDataType } from "../../types/staffDataTypes";


export const columns: ColumnDef<TaskDataType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "dress",
    header: "Dress",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
    {
    accessorKey: "deadline",
    header: "Deadline",
  },
    {
    accessorKey: "commission",
    header: "Commission",
    cell: ({getValue}) =>{
        const amount = getValue<number>()
        return (
        <div className="">
            <p className="text-green-600 pl-3">₦{amount.toLocaleString()}</p>
        </div>)
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const stage = getValue<string>();

      const colors: Record<string, string> = {
        "In Progress": "bg-[#D4A3731A] text-[#D4A373]",
        Completed: "bg-[#4A7C591A] text-[#4A7C59]",
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
  id: "actions",
  header: "",
  cell: ({ row }) => (
    <Link
      href={`/staff/task-manager/${row.original.id}`}
      className="px-3 py-1 text-xs font-bold border border-[#E8E1D9] rounded-lg hover:border-[#C1785A]"
    >
      View
    </Link>
  ),
  },
];
const TaskManagerPageScreen = () => {
  return (
        <div className=" w-full h-full">
          <DataTable
            columns={columns}
            data={tasks}
            filters={{
              columnId: "status",
              options: [
                { label: "All", value: "" },
                { label: "Active Orders", value: "In Progress" },
                { label: "Completed", value: "Completed" },
              ],
            }}
          />
          </div>
  )
}

export default TaskManagerPageScreen