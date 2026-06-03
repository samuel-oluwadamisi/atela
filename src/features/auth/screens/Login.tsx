import Image from 'next/image'
import React from 'react'

const LoginScreen = () => {
  return (
    <div className='flex h-screen'>
        <div className='hidden md:block relative h-screen w-2/5 overflow-hidden'>
            <Image src={'/images/loginImage.jpg'} alt="Login-image" fill className='object-top'/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#994C00] to-transparent" />

            <div className='absolute bottom-14 left-20 z-10'>
                <div  className="flex items-center gap-2 mb-2">
                   <div className='bg-white p-1 rounded-lg'> 
                    <Image src={'/images/atela-logo.png'} alt="Atela-logo" width={24} height={24}  /> 
                    </div>
                    <p className='text-white font-poppins font-black text-2xl'>ATELA</p>
                </div>
                <p className='text-white font-bold text-xl max-w-[380px]'>The Single Source of Truth for your factory floor</p>
            </div>
        </div>

        <div className='bg-[#F7F4F0] w-full md:w-3/5 flex  justify-center mt-34'>
            <div>
                <h2 className='font-black text-2xl text-center'>Welcome Back</h2>
                <p className='text-[#6E5F54] text-sm text-center my-2'>Sign in to access your dashboard</p>

                <div className='bg-white w-90 md:w-105 p-5 md:p-7 rounded-[40px] mt-5'>
                    <p className='text-[#6E5F54] font-bold text-xs'>Admin Email</p>
                    <input type="text" placeholder='admin@fashionhouse.com' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />

                     <p className='text-[#6E5F54] font-bold text-xs mt-4'>Password/ Pin</p>
                    <input type="password" placeholder='••••••••' className='border-1 border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-2.5 w-full mt-2 text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-xs placeholder:font-bold focus:outline-none'  />

                    <button className='py-2.5 w-full bg-[#C1785A] mt-6 rounded-3xl text-white'>Access Dashboard</button>
                </div>

                <p className='text-[#6E5F54] text-sm text-center mt-4'>Don't have an account? <a href="#" className='text-[#C1785A] font-bold'>Create One</a></p>
            </div>
            
        </div>
    </div>
  )
}

export default LoginScreen