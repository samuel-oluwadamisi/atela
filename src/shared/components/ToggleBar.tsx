import { ToggleBarProps } from "../types/ToggleBarTypes";
import ToggleButton from "./ToggleButton";



const ToggleBar = ({title, description}: ToggleBarProps) => {
  return (
    <div className="flex items-center justify-between border-b border-[#E8E1D9] pt-3 pb-3 ">
      <div>
        <p className="font-bold text-sm text-[#2A1F1A]">{title}</p>
        <p className="font-medium text-xs text-[#6E5F54]">
          {description}
        </p>
      </div>

      <ToggleButton />
    </div>
  );
};

export default ToggleBar;
