'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const ConfigureScreen = () => {

    const router = useRouter()
  return (
    <>
        <div className=' mx-auto flex items-center justify-center my-1 md:my-2 border border-[#E8E1D9] rounded-full shadow-sm w-16 h-16 '>
            <Image src={'/images/brown-settings.png'} alt='Brown-Settings' width={32} height={32} />
        </div>

        <h2 className='font-black text-2xl text-center'>Workspace Setup</h2>
        <p className='text-[#6E5F54] text-sm text-center my-2'>Configure your factory environment</p>

        <div className='bg-white w-90 md:w-105 p-5 md:p-7 rounded-[40px] mt-5'>

        <p className='text-[#6E5F54] font-bold text-xs'>Factory Name</p>
        <input type="text" placeholder='e.g,, Karen Ubani' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />
        
        <p className='text-[#6E5F54] font-bold text-xs mt-4'>Currency</p>
        <input type="text" placeholder='NGN' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />

        <p className='text-[#6E5F54] font-bold text-xs mt-4'>Team Size</p>
        <input type="text" placeholder='1-10' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />

        <button onClick={ ()=> router.push('/')} className='py-2.5 w-full bg-[#C1785A] mt-6 rounded-3xl text-white'>Launch Workspace</button>
        </div>

    </>
  )
}

export default ConfigureScreen