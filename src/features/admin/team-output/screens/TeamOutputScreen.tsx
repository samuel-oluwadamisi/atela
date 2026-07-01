"use client";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/DataTable";
import Dialogue from "@/shared/components/Dialogue";
import { IoCloseSharp } from "react-icons/io5";
import { UserPlus } from "lucide-react";

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
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => {
      const name = getValue<string>();
      return (
        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold`}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border-[#E8E1D9] bg-[#F7F4F0] `}
          >
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="font-bold text-sm text-[#2A1F1A]">{name}</div>
        </div>
      );
    },
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
    accessorKey: "payType",
    header: "Pay",
  },
  {
    accessorKey: "activeTasks",
    header: "Active Task",
    cell: ({ getValue }) => {
      const task = getValue<number>();
      return (
        <div className="flex items-center justify-center">
          <p>{task}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "outputToday",
    header: "Output(Today)",
    cell: ({ getValue }) => {
      const output = getValue<number>();
      return (
        <div className="flex items-center justify-center">
          <p>{output}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "efficiency",
    header: "Efficiency",
    cell: ({ getValue }) => {
      const efficiency = getValue<number>();

      const getEfficiencyColor = (efficiency: number) => {
        if (efficiency <= 50) return "text-red-500";
        if (efficiency <= 70) return "text-orange-500";
        return "text-green-500";
      };
      const colorClass = getEfficiencyColor(efficiency) ?? "text-[#374151]";

      return (
        <p className={` text-xs font-semibold ${colorClass} `}>{efficiency}%</p>
      );
    },
  },
];

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
  const filters = ["Staff Directory", "Output Reports", "Payroll CSV"];

  const [showDialogue, setShowDialogue] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Staff Directory");
  return (
    <>
      <div className="flex items-center justify-between">
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

        <button
          onClick={() => setShowDialogue(true)}
          className="bg-[#2A1F1A] ml-auto flex items-center justify-center gap-1 w-30 h-10 text-white font-bold text-xs rounded-xl text-center"
        >
          {" "}
          <span className=" text-base text-center">+</span>Add Member{" "}
        </button>
      </div>

      <div className="mt-4">
        {activeFilter === "Staff Directory" ? (
          <DataTable columns={columns} data={staffMembers} />
        ) : activeFilter === "Output Reports" ? (
          <p>OutPut Reports</p>
        ) : activeFilter === "Payroll CSV" ? (
          <p>Payroll CSV</p>
        ) : (
          <p>How did you get here??</p>
        )}
      </div>

      {showDialogue && (
        <Dialogue>
          <div className="flex items-center justify-between">
            <div className="bg-[#F7F4F0] w-10 h-10 flex items-center justify-center rounded-xl">
              <UserPlus className="text-xl w-5 h-5 text-[#6E5F54]" />{" "}
            </div>
            <p className="text-[#2A1F1A] text-2xl font-black">
              Add Staff Member
            </p>
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
              <label className="text-xs font-bold text-[#6E5F54]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">
                Email address
              </label>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">Role</label>
              <select className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold bg-white transition-colors">
                <option className="text-sm text-[#2A1F1A]" value="">
                  Select role
                </option>
                <option value="Pattern">Pattern Maker</option>
                <option value="Cutting">Cutter</option>
                <option value="Tailoring">Tailor</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">
                Payment Type
              </label>
              <select className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold bg-white transition-colors">
                <option className="text-sm text-[#2A1F1A]" value="">
                  Select payment Type
                </option>
                <option value="Pattern">Commission</option>
                <option value="Cutting">Salary</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 mt-2 px-3">
              <button
                type="button" // ← important: prevents form submit
                onClick={() => setShowDialogue(false)}
                className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
              >
                Send Invite
              </button>
            </div>
          </form>
        </Dialogue>
      )}
    </>
  );
};

export default TeamOutputScreen;
