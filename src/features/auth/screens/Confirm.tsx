'use client'

import { useRouter } from 'next/navigation'
import { ConfirmEmailForm } from '../components/ConfirmEmailForm'
import Image from 'next/image'

const ConfirmScreen = () => {
  const router = useRouter()

  return (
        <>
          <button onClick={() => router.back()} className="text-[#6E5F54] text-sm">
            ❮ Back
          </button>

          <div className='flex flex-col items-center '>

          
            <div className='flex items-center justify-center my-2 border border-[#E8E1D9] rounded-full shadow-sm w-16 h-16 '>
                <Image src={'/images/brown-check.png'} alt='Brown-Check' width={32} height={32} />
            </div>
          <h2 className="font-black text-3xl text-[#2A1F1A]"> Verify Email</h2>
          <p className="text-[#6E5F54] font-medium text-sm  mt-2">
            We've sent a 6-digit security code to
          </p>
          <p className='font-bold text-sm'>user@email.com</p>

          <div className="bg-white w-90 md:w-105 p-5 md:p-7 rounded-[40px] mt-5 flex flex-col items-center">
            <ConfirmEmailForm />
          <button onClick={ ()=> router.push('/signup/configure')} className='py-5 w-9/10 bg-[#C1785A] mt-6 rounded-3xl text-white font-bold text-sm'>
            Verify & Create Workspace
          </button>

        <button
        onClick={() => {
          /* trigger resend API call */
        }}
        className="text-xs mt-3 font-bold text-[#6E5F54] hover:underline"
      >
        Didn&apos;t receive it? <span className='text-sm text-[#C1785A] font-medium'>Resend Code</span>
      </button>
          </div>

    </div>

        </>
  )
}

export default ConfirmScreen
