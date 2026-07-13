"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSignup } from "../hooks/useAuth";
import { signupSchema } from "../schema/signupSchema";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignupScreen = () => {

  const { mutate, isPending } = useSignup()
  const [form, setForm] = useState({
    email: "",
    factoryName: "",
    password: "",
    confirmPassword: "",
    teamSize: 0,
    currency: 'NGN'
  });
  const [formError, setFormError] = useState<string | null >(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = signupSchema.safeParse(form)

    if(!result.success){
      setFormError(result.error.issues[0].message);
      return
    }

    setFormError(null)

    mutate(result.data, {
      onSuccess: ()=> {
        router.push(`/signup/confirm?email=${form.email}`);
      }
    })
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const isValid = signupSchema.safeParse(form).success


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="font-black text-2xl text-center">Create Workspace</h2>
        <p className="text-[#6E5F54] font-medium text-base md:text-sm text-center mb-0 md:my-1">
          Set up your factory account
        </p>

        <div className="bg-white w-90 md:w-105 p-5 rounded-[40px] mt-1 md:mt-3">
          <p className="text-[#6E5F54] font-bold text-lg md:text-xs">Factory Name</p>
          <input
          name="factoryName"
            value={form.factoryName}
            onChange={handleChange}
            type="text"
            placeholder="e.g,, Karen Ubani"
            className="border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-4 md:py-2.5 w-full mt-2 text-base md:text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-base md:placeholder:text-xs placeholder:font-bold focus:outline-none"
          />

          <p className="text-[#6E5F54] font-bold text-lg md:text-xs mt-3">Admin Email</p>
          <input
          name="email"
            value={form.email}
            onChange={handleChange}
            type="text"
            placeholder="admin@fashionhouse.com"
            className="border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-4 md:py-2.5 w-full mt-2 text-base md:text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-base md:placeholder:text-xs placeholder:font-bold focus:outline-none"
          />
          

          <p className="text-[#6E5F54] font-bold text-lg md:text-xs mt-3">Password/ Pin</p>
          <div className="relative">
          <input
          name="password"
            value={form.password}
            onChange={handleChange}
            type={showPassword ? 'text' : "password"}
            placeholder="••••••••"
            className=" border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-4 md:py-2.5 w-full mt-2 text-base md:text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-base md:placeholder:text-xs placeholder:font-bold focus:outline-none"
          />
          {showPassword ? (
          <BsEye
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#6E5F54]"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <BsEyeSlash
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#6E5F54]"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
        </div>


        <p className="text-[#6E5F54] font-bold text-lg md:text-xs mt-3">Confirm Password</p>
        <div className="relative">
          <input
          name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            type={showConfirmPassword ? 'text' : "password"}
            placeholder="••••••••"
            className="border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-4 md:py-2.5 w-full mt-2 text-base md:text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-base md:placeholder:text-xs placeholder:font-bold focus:outline-none"
          />
            {showConfirmPassword ? (
            <BsEye
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#6E5F54]"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <BsEyeSlash
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#6E5F54]"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
          </div>

          <p className="text-[#6E5F54] font-bold text-lg md:text-xs mt-3">Team Size</p>
          <input
          name="teamSize"
            value={form.teamSize}
            onChange={(e) => setForm((prev) => ({
            ...prev,
            teamSize: Number(e.target.value),
          }))}
            type="text"
            placeholder="1-10"
            className="border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-4 md:py-2.5 w-full mt-2 text-base md:text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-base md:placeholder:text-xs placeholder:font-bold focus:outline-none"
          />

          {formError && <p className="text-red-500 text-base md:text-xs font-bold mt-2">{formError}</p>}

          <button
            type="submit"
            className={`py-4 md:py-2.5 w-full ${isValid ? 'opacity-100' : 'opacity-70'} bg-[#C1785A] mt-3 md:mt-5 text-base md:text-sm rounded-3xl text-white font-bold`}
          >
            {isPending ? 'Signing you up ' : 'Create Workspace'}
          </button>
        </div>

        <p className="text-[#6E5F54] text-base md:text-sm text-center mt-1 md:mt-4">
          Already have a workspace?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-[#C1785A] cursor-pointer font-bold"
          >
            Log in
          </span>
        </p>
      </form>
    </>
  );
};

export default SignupScreen;
