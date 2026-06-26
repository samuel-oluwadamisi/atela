"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useResendOtp, useVerifyEmail } from "../hooks/useAuth";
import { useState } from "react";
import { verifyOtpSchema } from "../schema/verifyOtpSchema";
// import { ConfirmEmailForm } from "../components/ConfirmEmailForm";

type Props = {
  email: string;
};

const ConfirmScreen = ({ email }: Props) => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: email,
    code: "",
  });
  const [formError, setFormError] = useState<string | null >('')

  const { mutate, isPending } = useVerifyEmail();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  // const result = verifyOtpSchema.safeParse(form)

  // if(!result.success){
  //   setFormError(result.error.issues[0].message);
  //     return
  // }

  //     setFormError(null)

    mutate(form, {
      onSuccess: () => {
        router.push(`/admin`);
      },
    });
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          onClick={() => router.back()}
          className="text-[#6E5F54] text-sm"
        >
          ❮ Back
        </button>

        <div className="flex flex-col items-center ">
          <div className="flex items-center justify-center my-2 border border-[#E8E1D9] rounded-full shadow-sm w-16 h-16 ">
            <Image
              src={"/images/brown-check.png"}
              alt="Brown-Check"
              width={32}
              height={32}
            />
          </div>
          <h2 className="font-black text-3xl text-[#2A1F1A]"> Verify Email</h2>
          <p className="text-[#6E5F54] font-medium text-sm  mt-2">
            We`&apos;`ve sent a 6-digit security code to
          </p>
          <p className="font-bold text-sm">user@email.com</p>

          <div className="bg-white w-90 md:w-105 p-5 md:p-7 rounded-[40px] mt-5 flex flex-col items-center">
            {/* <ConfirmEmailForm /> */}
            <p className="text-[#6E5F54] font-bold text-xs">Factory Name</p>
            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              type="text"
              className="border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none"
            />

            {formError && <p className="text-red-500 text-xs font-bold mt-2">{formError}</p>}

            <button
              type="submit"
              disabled= { isPending}
              className="py-5 w-9/10 bg-[#C1785A] mt-6 rounded-3xl text-white font-bold text-sm"
            >
              { isPending ? 'Loading' : 'Verify & Create Workspace'}
            </button>


          </div>
        </div>
      </form>
    </>
  );
};

export default ConfirmScreen;
