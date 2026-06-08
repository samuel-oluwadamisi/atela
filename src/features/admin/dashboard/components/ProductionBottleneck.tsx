import Image from "next/image"


const ProductionBottleneck = () => {
  return (
    <div className=" bg-[linear-gradient(90deg,rgba(193,120,90,0.1)_0%,rgba(0,0,0,0)_100%)] relative w-full h-22 flex items-center  border border-[#F8F4F1] rounded-3xl shadow-sm overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#C1785A] " />
        <div className="flex items-center gap-1 ml-3">

            <div className="w-8 h-8 rounded-full bg-[rgba(193, 120, 90, 0.2)] flex items-center justify-center">
                <Image src={'/images/notification.png'} alt="notification" width={24} height={24} />
            </div>
            <div>
                <p className="font-bold text-[15px] text-[#2A1F1A]">Production Bottleneck Detected</p>
                <p className="font-medium text-xs text-[#6E5F54] ">Tailoring tasks are backing up. You have 12 cut batches awaiting assembly. Consider reassigning available cutters to assembly prep.</p>
            </div>
        </div>
    </div>
  )
}

export default ProductionBottleneck