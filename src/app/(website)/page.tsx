'use client'
import Button from "@/shared/components/Button"
import { useRouter } from "next/navigation"


const HomePage = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen">
      <p>Atela Website</p>
   <button className="bg-[#C1785A] p-2 rounded-md" onClick={()=>router.push('/admin')}>Go to Dashboard</button>
   <button className="bg-[#C1785A] p-2 rounded-md" onClick={()=>router.push('/login')}>Go to Auth</button>
   
    </div>
  )
}

export default HomePage