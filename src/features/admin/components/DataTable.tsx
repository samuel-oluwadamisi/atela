"use client";
import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

interface FilterOption {
  label: string;
  value: string;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filters?: {
    columnId: string;
    options: FilterOption[];
  };
  button?: {
    show: boolean;
    label: string;
    fn: ()=>void
  }
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filters,button
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const [activeFilter, setActiveFilter] = useState("");

  function handleFilter(value: string) {
    const next = value === activeFilter ? "" : value;
    setActiveFilter(next);
    table.getColumn(filters!.columnId)?.setFilterValue(next);
  }

  return (
    <>
    <div className="flex items-center mb-4">

   
      {filters && (
        <div className="flex items-center gap-2">
          {filters.options.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilter(filter.value)}
              className={`w-30 h-10 rounded-md text-xs cursor-pointer font-bold transition-colors
                ${
                  activeFilter === filter.value
                    ? "bg-[#C1785A] text-white"
                    : "bg-white text-[#6E5F54] hover:bg-[#C1785A]"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

     { button && <button className="bg-[#2A1F1A] ml-auto flex items-center justify-center gap-1 w-30 h-10 text-white text-xs rounded-xl text-center"> <span className=" text-base text-center">+</span>{button.label} </button>}

       </div>

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
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 [&:last-child_td]:border-0"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-b border-[#E8E1D9] px-3 py-4 text-[13px] text-[#2A1F1A] font-bold"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
