import { ChevronDown } from "lucide-react";
import { Section } from "./MeasurementForm";

const AccordionSection = ({ section,isOpen, onToggle}: { section: Section; isOpen: boolean; onToggle: () => void;}) => { 

    const inputClasses = "border border-[#E8E1D9] bg-[#F7F4F0] rounded-xl px-3 py-2 text-sm text-[#2A1F1A] font-bold placeholder:text-xs placeholder:text-[#2A1F1A80] placeholder:font-bold outline-none focus:border-[#2A1F1A] transition-colors";
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-2"
      >
        <span className="text-sm font-bold text-[#6E5F54]">
          {section.title} ({section.fields.length})
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
 
      {/* grid-rows trick: animates to the content's real height, not a fixed max-height */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="mt-2 grid grid-cols-2 gap-2 pl-2">
            {section.fields.map((field) => (
              <div key={field} className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#6E5F54]">
                  {field}
                </label>
                <input type="text" className={inputClasses} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionSection