export type ReviewTypes = {
  code: string
  dress: string
  staff: string
}

export type OrderTableTypes = {
  code: string;
  dress: string;
  garment: string;
  volume: number;
  currentStage: "Pattern" | "Cutting" | "Tailoring";
  progress: number;
  staff: string;
}

type Canvas = {
  getStaff: ()=> void,
  getStaffByID: (id:string)=> string
}