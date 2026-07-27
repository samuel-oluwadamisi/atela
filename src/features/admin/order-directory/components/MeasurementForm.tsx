"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AccordionSection from "./AccordionSection";
import { CreateOrderPayload, MeasurementsType } from "../api/order.api";
import { useStartOrder } from "../context/CreateOrderContext";
import { measurementsSchema } from "../schema/MeasurementsSchema";
import { useCreateOrder } from "../hooks/useOrder";


type FieldConfig = {
  key: keyof MeasurementsType; // must match a real key, TS enforces this
  label: string;
}

export type Section = {
  id: string;
  title: string;
 fields: FieldConfig[];
};
 
const SECTIONS: Section[] = [
  {
    id: "upperBody",
    title: "Upper Body",
    fields: [
     { key: 'bust' , label: "Bust / Chest"},
     { key: 'underBust' , label: "Under Bust"},
      { key: 'acrossChest' , label: "Across Chest"},
      { key: 'acrossBack' , label: "Across Back"},
      { key: 'shoulderWidth' , label: "Shoulder Width"},
      { key: 'neckCircumference' , label: "Neck Circumference"},
    ],
  },
  {
    id: "torso",
    title: "Torso",
    fields: [
      { key: 'bustPointToBustPoint' , label: "Bust Point to Bust Point"},
      { key: 'shoulderToBustPoint' , label: "Shoulder to Bust Point"},
      { key: 'shoulderToWaist' , label: "Shoulder to Waist"},
      { key: 'frontWaistLength' , label: "Front Waist Length"},
      { key: 'backWaistLength' , label: "Back Waist Length"},
      { key: 'waist' , label: "Waist"},
      { key: 'highHip' , label: "High Hip"},
      { key: 'fullHip' , label: "Full Hip"},
      { key: 'waistToHip' , label: "Waist to Hip"},
    ],
  },
  {
    id: "arms",
    title: "Arms",
    fields: [
      { key: 'armhole' , label: "Armhole"},
      { key: 'bicepCircumference' , label: "Bicep Circumference"},
      { key: 'sleeveLength' , label: "Sleeve Length"},
      { key: 'elbowCircumference' , label: "Elbow Circumference"},
      { key: 'wristCircumference' , label: "Wrist Circumference"},
    ],
  },
  {
    id: "legs",
    title: "Legs",
    fields: [
      { key: 'thighCircumference' , label: "Thigh Circumference (trousers)"},
      { key: 'kneeCircumference' , label: "Knee Circumference"},
      { key: 'calfCircumference' , label: "Calf Circumference"},
      { key: 'ankleCircumference' , label: "Ankle Circumference"},
      { key: 'crotch' , label: "Crotch"},
      { key: 'trouserInseam' , label: "Trouser In-seam (Crotch to Ankle)"},
      { key: 'trouserOutseam' , label: "Trouser Out-seam (Waist to Ankle)"},
    ],
  },
  {
    id: "garmentLength",
    title: "Garment Length",
    fields: [
      { key: 'waistToKnee' , label: "Waist to Knee"},
      { key: 'fullDressLength' , label: "Full Dress Length"},
      { key: 'waistToFloor' , label: "Waist to Floor (dress/skirt length)"},
    ],
  },
];
 



const MeasurementForm = ({closeModal, moveBack }:{ closeModal: () => void; moveBack: () => void;}) => {

  const [openSection, setOpenSection] = useState("upperBody");
  const [formError, setFormError ] = useState<string | null>(null)
  const { register, handleSubmit} = useForm<MeasurementsType>()
  const { data, clearData } = useStartOrder()
  const { mutate, isPending,} = useCreateOrder()

  function onSubmit(form: MeasurementsType){

        const result = measurementsSchema.safeParse(form);
    
        if (!result.success) {
          setFormError(result.error.issues[0].message);
          return;
        }
    
      const fullPayload = { ...data, ...form } as CreateOrderPayload;
      console.log(fullPayload)
      mutate(fullPayload, {onSuccess: ()=> {
        clearData()
        closeModal()
        moveBack()
      }})
      
  }

  return (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-3">
      {SECTIONS.map((section) => (
        <AccordionSection
          key={section.id}
          section={section}
          register= {register}
          isOpen={openSection === section.id}
          onToggle={() => setOpenSection(section.id)}
        />
      ))}

      {formError && <p className="text-red-500 text-xs font-bold mt-2">{formError}</p>}
      
    <div className="sticky bottom-0 flex justify-end gap-2 mt-2 px-3">
              <button
                type="button" // ← important: prevents form submit
                onClick={moveBack}
                className="flex-1 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-sm font-bold text-[#6E5F54] bg-[#E8E1D9] rounded-xl hover:bg-[#C1785A] hover:text-white transition-colors"
              >
                {isPending ? 'Creating...' : 'Submit'}
              </button>
            </div>
    </form>
  );
};

export default MeasurementForm;
