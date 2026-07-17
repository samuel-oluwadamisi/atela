"use client";

import { useState } from "react";
import AccordionSection from "./AccordionSection";


export type Section = {
  id: string;
  title: string;
  fields: string[];
};
 
const SECTIONS: Section[] = [
  {
    id: "upperBody",
    title: "Upper Body",
    fields: [
      "Bust / Chest",
      "Under Bust",
      "Across Chest",
      "Across Back",
      "Shoulder Width",
      "Neck Circumference",
    ],
  },
  {
    id: "torso",
    title: "Torso",
    fields: [
      "Bust Point to Bust Point",
      "Shoulder to Bust Point",
      "Shoulder to Waist",
      "Front Waist Length",
      "Back Waist Length",
      "Waist",
      "High Waist",
      "Full Waist",
      "Waist to Hip",
    ],
  },
  {
    id: "arms",
    title: "Arms",
    fields: [
      "Armhole",
      "Bicep Circumference",
      "Sleeve Length",
      "Elbow Circumference",
      "Wrist Circumference",
    ],
  },
  {
    id: "legs",
    title: "Legs",
    fields: [
      "Thigh Circumference (trousers)",
      "Knee Circumference",
      "Calf Circumference",
      "Ankle Circumference",
      "Crotch",
      "Trouser In-seam (Crotch to Ankle)",
      "Trouser Out-seam (Waist to Ankle)",
    ],
  },
  {
    id: "garmentLength",
    title: "Garment Length",
    fields: [
      "Waist to Knee",
      "Full Dress Length",
      "Waist to Floor (dress/skirt length)",
    ],
  },
];
 

 

const MeasurementForm = ({closeModal, moveBack }:{ closeModal?: () => void; moveBack?: () => void;}) => {

  const [openSection, setOpenSection] = useState("upperBody");

  return (
  <form className="flex flex-col gap-4 w-full mt-3">
      {SECTIONS.map((section) => (
        <AccordionSection
          key={section.id}
          section={section}
          isOpen={openSection === section.id}
          onToggle={() => setOpenSection(section.id)}
        />
      ))}

    <div className="sticky bottom-0 flex justify-end gap-2 mt-2 px-3">
              <button
                type="button" // ← important: prevents form submit
                onClick={closeModal}
                className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={moveBack}
                className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
              >
                Submit
              </button>
            </div>
    </form>
  );
};

export default MeasurementForm;
