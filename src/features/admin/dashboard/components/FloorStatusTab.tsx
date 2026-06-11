import { IconType } from "react-icons"



type FloorStatusTabType = {
    staff: string
    number : number
    bgColor: string
    color: string
    Icon: IconType
}


const FloorStatusTab = ({staff,bgColor, number, color, Icon}: FloorStatusTabType) => {
  return (
    <div className='w-full mb-1 last:mb-0 '>
        <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1">
                <div className={`${bgColor} w-7 h-7  flex items-center justify-center rounded-xl`}>
                    <Icon  color={color} size={14} />
                </div>
                <p className="text-[13px] text-[#2A1F1A] font-bold">{staff} Room</p>
            </div>
            <p className="text-[#2A1F1A] font-black text-sm"> 
                {number} <span className="font-medium text-[11px]">active</span>
            </p>
        </div>
        <div className="w-full h-1.5 bg-[#F7F4F0] rounded-2xl" >
            <div  style={{ backgroundColor: color }} className={`w-[30%] h-full rounded-2xl`} />
        </div>
    </div>
  )
}

export default FloorStatusTab