'use client'
import { useState} from 'react'

const ToggleButton = () => {

    const [isOn, setIsOn] = useState(true)
  return (
    <div onClick={()=> setIsOn(!isOn)} className={`relative w-12 h-7 ${isOn ? 'bg-[#C1785A]' : 'bg-[#E8E1D9] '} transition-all duration-500 delay-75 rounded-full`}>
        <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full text-right transition-transform duration-500 delay-75 ${isOn ? 'translate-x-5' : ''}`} />
    </div>
  )
}

export default ToggleButton