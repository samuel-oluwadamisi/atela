'use client'
import { useRouter } from "next/navigation"

const SignupScreen = () => {
    const router = useRouter()
  return (
    <>
        <h2 className='font-black text-2xl text-center'>Create Workspace</h2>
        <p className='text-[#6E5F54] text-sm text-center my-2'>Set up your factory account</p>

        <div className='bg-white w-90 md:w-105 p-5 md:p-7 rounded-[40px] mt-5'>

        <p className='text-[#6E5F54] font-bold text-xs'>Factory Name</p>
        <input type="text" placeholder='e.g,, Karen Ubani' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />
        
        <p className='text-[#6E5F54] font-bold text-xs mt-4'>Admin Email</p>
        <input type="text" placeholder='admin@fashionhouse.com' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />

        <p className='text-[#6E5F54] font-bold text-xs mt-4'>Password/ Pin</p>
        <input type="password" placeholder='••••••••' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />

        <button onClick={ ()=> router.push('/signup/confirm')} className='py-2.5 w-full bg-[#C1785A] mt-6 rounded-3xl text-white'>Create Workspace</button>
        </div>

        <p className='text-[#6E5F54] text-sm text-center mt-4'>Already have a workspace? <span onClick={()=> router.push('/login')} className='text-[#C1785A] cursor-pointer font-bold'>Log in</span></p>
            
    </>
  )
}

export default SignupScreen