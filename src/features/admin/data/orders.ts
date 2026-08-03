import { OrderTableTypes } from '../types/adminTypes'

export const orders: OrderTableTypes[] = [
  {
    code: "AGB-001",
    customer: "Oluwaseun Adeyemi",
    dress: "Agbada",
    garment: "Guinea Brocade",
    volume: 1,
    currentStage: "Pattern",
    progress: 10,
    staff: "Tunde Akinyemi",
  },
  {
    code: "SEN-002",
    customer: "Chukwudi Okeke",
    dress: "Senator",
    garment: "Senator",
    volume: 2,
    currentStage: "Cutting",
    progress: 35,
    staff: "Sodiq Ibrahim",
  },
  {
    code: "KFT-003",
    customer: "Aisha Bello",
    dress: "Kaftan",
    garment: "Long Kaftan",
    volume: 1,
    currentStage: "Tailoring",
    progress: 75,
    staff: "Blessing Eze",
  },
  {
    code: "ANK-004",
    customer: "Ngozi Nwosu",
    dress: "Flare Ankara Gown",
    garment: "Ankara",
    volume: 3,
    currentStage: "Tailoring",
    progress: 90,
    staff: "Chioma Umeh",
  },
  {
    code: "TRD-005",
    customer: "Abdulrahman Musa",
    dress: "Senator",
    garment: "Atiku",
    volume: 1,
    currentStage: "Pattern",
    progress: 20,
    staff: "Adebayo Ogunleye",
  },
];
export function getOrderByCode(code: string): OrderTableTypes | undefined {
    return orders.find((order) => order.code === code);
    }