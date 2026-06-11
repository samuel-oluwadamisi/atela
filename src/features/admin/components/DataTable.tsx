'use client'
import { ColumnDef, flexRender, useReactTable,  getCoreRowModel, } from "@tanstack/react-table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>) {

    const table = useReactTable({data, columns,getCoreRowModel: getCoreRowModel(),})
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#E8E1D9]">
    <table className="w-full border-separate border-spacing-0">
        <thead className="bg-[rgba(247, 244, 240, 0.5)]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="border-b border-[#E8E1D9] px-4 py-2 text-left cursor-pointer select-none text-11px] text-[#6E5F54] font-bold"
                >
                {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-b border-[#E8E1D9] last:border-0 px-4 py-2 text-[13px] text-[#2A1F1A] font-bold">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
