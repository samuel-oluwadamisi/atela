'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLogin } from '../hooks/useAuth'
import { loginSchema } from '../schema/loginSchema'

const LoginScreen = () => {

    const {mutate, isPending} = useLogin()
    const [form, setForm ] = useState({
        email: '',
         password: ''
    })
    const [formError, setFormError] = useState<string | null >()
    const router = useRouter()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        const result = loginSchema.safeParse(form)

           if(!result.success){
      setFormError(result.error.issues[0].message);
      return
    }

        setFormError(null)

        mutate(result.data ,{
            onSuccess: ()=> {
                router.push('/admin')
            }
        } )
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className='flex h-screen'>
        <div className='hidden md:block relative h-screen w-2/5 overflow-hidden'>
            <Image src={'/images/factory-image-2.jpeg'} alt="Login-image" fill className='object-cover'/>
              <div className="absolute inset-0 bg-linear-to-t from-[#994C00] to-transparent" />

            <div className='absolute bottom-14 left-20 z-10'>
                <div  className="flex items-center gap-2 mb-2">
                   <div className='bg-white p-1 rounded-lg'> 
                    <Image src={'/images/atela-logo.png'} alt="Atela-logo" width={24} height={24}  /> 
                    </div>
                    <p className='text-white font-poppins font-black text-2xl'>ATELA</p>
                </div>
        <p className='text-white font-bold text-xl max-w-95'>The Single Source of Truth for your factory floor</p>
            </div>
        </div>

        <div className='bg-[#F7F4F0] w-full md:w-3/5 flex justify-center  pt-34'>
            <div>
                <h2 className='font-black text-3xl md:text-2xl text-center'>Welcome Back</h2>
                <p className='text-[#6E5F54] text-xl md:text-sm text-center my-2'>Sign in to access your dashboard</p>

               <form onSubmit={handleSubmit}>
                    <div className='bg-white w-90 md:w-105 px-5 py-8 rounded-[40px] mt-5'>
                        <p className='text-[#6E5F54] font-bold text-lg md:text-xs'> Email</p>
                        <input
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                         type="text" placeholder='admin@fashionhouse.com' className='border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-4 md:py-2.5 w-full mt-2 text-base md:text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-base md:placeholder:text-xs placeholder:font-bold focus:outline-none'  />

                        <p className='text-[#6E5F54] font-bold text-lg md:text-xs mt-4'>Password/ Pin</p>
                        <input
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                         type="text" placeholder='••••••••' className='border border-[#E8E1D999] rounded-xl bg-[#F7F4F0] px-3 py-4 md:py-2.5 w-full mt-2 text-base md:text-xs font-bold text-black placeholder:text-[rgba(42, 31, 26, 0.5)] placeholder:text-base md:placeholder:text-xs  placeholder:font-bold focus:outline-none'  />

                         {formError && <p className="text-red-500 text-xs font-bold mt-2">{formError}</p>}

                        <button type='submit' disabled= { isPending} className='py-4 md:py-2.5 w-full bg-[#C1785A] font-bold mt-6 rounded-3xl text-white'>{ isPending ? 'Loading...': 'Access Dashboard' } </button>
                    </div>

                </form>
            </div>
            
        </div>
    </div>
  )
}

export default LoginScreen
