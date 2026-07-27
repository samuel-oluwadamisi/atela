"use client";
import { useForm } from "react-hook-form";
import { useStartOrder } from "../context/CreateOrderContext";
import { useState } from "react";
import { clientDetailsSchema } from "../schema/clientDetailsSchema";
import { CreateOrderPayload } from "../api/order.api";

type Props = {
  closeModal: () => void;
  moveNext: () => void;
};

export type CreateOrderType = {
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientAddress: string;
  garmentType: string;
  quantity: number;
  deadline: string;
  description: string;
};

const ClientForm = ({ closeModal, moveNext }: Props) => {
  const [formError, setFormError] = useState<string | null>(null);
  const { data, updateData } = useStartOrder();
  const { register, handleSubmit } = useForm<CreateOrderType>({
    defaultValues: data as Partial<CreateOrderPayload> // used to persist data on component change
  });

  const onSubmit = (form: CreateOrderType) => {
    const result = clientDetailsSchema.safeParse(form);

    if (!result.success) {
      setFormError(result.error.issues[0].message);
      return;
    }
    updateData(result.data);
    moveNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <div className="flex flex-col gap-1 mt-3">
        <label className="text-xs font-bold text-[#6E5F54]">Client Name</label>
        <input
          type="text"
          {...register("clientName")}
          placeholder="e.g. Maison Claire"
          className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Phone No</label>
          <input
            type="text"
            {...register("clientPhone")}
            placeholder="e.g. 081325872367"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Email</label>
          <input
            {...register("clientEmail")}
            type="text"
            placeholder="e.g. client@gmail.com"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Address</label>
          <input
            type="text"
            {...register("clientAddress")}
            placeholder="e.g. Ikoyi Lagos Island"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">
            Garment Type
          </label>
          <input
            type="text"
            {...register("garmentType")}
            placeholder="e.g. Silk Blouse"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-[#6E5F54]">Description</label>
        <textarea
          {...register("description")}
          rows={2}
          placeholder="e.g. Silk Blouse"
          className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Quantity</label>
          <input
            type="number"
            {...register("quantity", { valueAsNumber: true })}
            placeholder="0"
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-[#6E5F54]">Deadline</label>
          <input
            type="date"
            {...register("deadline")}
            className="border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors"
          />
        </div>
      </div>

        {formError && <p className="text-red-500 text-xs font-bold mt-2">{formError}</p>}

      {/* <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#6E5F54]">
                Select Stage to Start
              </label>
              <select className="border border-[#E8E1D9] rounded-lg px-3 py-2 text-sm text-[#2A1F1A] outline-none focus:border-[#2A1F1A] placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold bg-white transition-colors">
                <option className="text-sm text-[#2A1F1A]" value="">
                  Select stage
                </option>
                <option value="Pattern">Pattern</option>
                <option value="Cutting">Cutting</option>
                <option value="Tailoring">Tailoring</option>
              </select>
            </div> */}

      <div className="flex justify-end gap-2 mt-2 px-3">
        <button
          type="button" // ← important: prevents form submit
          onClick={closeModal}
          className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ClientForm;
