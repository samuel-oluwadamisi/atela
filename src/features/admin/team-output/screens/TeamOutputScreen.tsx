"use client";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/DataTable";
import Dialogue from "@/shared/components/Dialogue";
import { IoCloseSharp } from "react-icons/io5";
import { UserPlus } from "lucide-react";
import { useCreateStaff, useGetStaff } from "../hooks/useStaff";
import { createStaffSchema } from "../schema/createStaffSchema";
import { Staff } from "../api/team.api";
import Link from "next/link";




export const columns: ColumnDef<Staff>[] = [
  {
    accessorKey: "firstName",
    header: "Name",
    cell: ({ getValue,row }) => {
       const firstName = getValue<string>();
      const lastName = row.original.lastName; 
      const name = firstName + ' ' + lastName
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
    accessorKey: "paymentType",
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
    accessorKey: "output",
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
  id: "actions",
  header: "",
  cell: ({ row }) => (
    <Link
      href={`/admin/team-output/${row.original.id}`}
      className="px-3 py-1 text-xs font-bold border border-[#E8E1D9] rounded-lg hover:border-[#C1785A]"
    >
      View
    </Link>
  ),
  },
];


const TeamOutputScreen = () => {

   const {mutate, isPending:isLoadingCreate} = useCreateStaff()
   const { data: staffData } = useGetStaff()
  const filters = ["Staff Directory", "Output Reports", "Payroll CSV"];

  const [showDialogue, setShowDialogue] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Staff Directory");
  const [formError, setFormError] = useState<string | null>(null)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    paymentType: "",
    password: 'Praise1#'
  });

  const firstName = form.firstName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const result = createStaffSchema.safeParse(form)

    if(!result.success){
      setFormError(result.error.issues[0].message)
      return
    }

    mutate(result.data , {onSuccess: ()=>{
      setShowDialogue(false)
    }} )
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    e.preventDefault()
    setForm((prev)=> (
      {...prev, [e.target.name]: e.target.value }
    ))
  }

 

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
          <span className=" text-base text-center">+</span>Create Staff{" "}
        </button>
      </div>
          {/* Tables and Data Dashboards */}
      <div className="mt-4">
        {activeFilter === "Staff Directory" ? (
          <DataTable columns={columns} data={staffData ?? []} />
        ) : activeFilter === "Output Reports" ? (
          <p>OutPut Report</p>
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 mt-3">
              <label className="text-xs font-bold text-[#6E5F54]">
                First Name
              </label>
              <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
                type="text"
                placeholder="e.g. John"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

             <div className="flex flex-col gap-1 mt-3">
              <label className="text-xs font-bold text-[#6E5F54]">
                Last Name
              </label>
              <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
                type="text"
                placeholder="e.g. Doe"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">
                Email address
              </label>
              <input
              name="email"
              value={form.email}
              onChange={handleChange}
                type="text"
                placeholder="johndoe@gmail.com"
                className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">Role</label>
              <select
              name="role"
              value={form.role}
              onChange={handleChange}
               className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold bg-white transition-colors">
                <option className="text-sm text-[#2A1F1A]" value="">
                  Select role
                </option>
                <option value="PATTERN MAKER">Pattern Maker</option>
                <option value="CUTTER">Cutter</option>
                <option value="TAILOR">Tailor</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">
                Payment Type
              </label>
              <select 
              name="paymentType"
              value={form.paymentType}
              onChange={handleChange}
              className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold bg-white transition-colors">
                <option className="text-sm text-[#2A1F1A]" value="">
                  Select payment Type
                </option>
                <option value="Commission">Commission</option>
                <option value="Salary">Salary</option>
              </select>
            </div>

            {formError && <p className="text-red-500 text-xs font-bold mt-2">{formError}</p>}

            <div className="flex justify-end gap-2 mt-2 px-3">
              <button
                type="button" 
                onClick={() => setShowDialogue(false)}
                className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
              >
                {isLoadingCreate ? 'Creating Staff Profile': "Create Staff"}
              </button>
            </div>
          </form>
        </Dialogue>
      )}
    </>
  );
};

export default TeamOutputScreen;
