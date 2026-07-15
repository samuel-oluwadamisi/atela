import Image from "next/image";

export default function SignupLayout({ children}: { children: React.ReactNode }) {
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

            <div className='bg-[#F7F4F0] w-full md:w-3/5 flex  justify-center pt-14 md:pt-15'>
            {children}
            </div> 

        </div>
    )
  }