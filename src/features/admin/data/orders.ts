import { OrderTableTypes } from '../types/adminTypes'

export const orders: OrderTableTypes[] = [
  {
    code: "A7B2",
    dress: "Maison Claire",
    garment: "Silk Blouse",
    volume: 45,
    currentStage: "Cutting",
    progress: 30,
    staff: "Marcus Tavenier",
  },
  {
    code: "X9K4",
    dress: "House of Zofu",
    garment: "Linen Trousers",
    volume: 120,
    currentStage: "Pattern",
    progress: 0,
    staff: "Marcus Tavenier",
  },
  {
    code: "B3M1",
    dress: "Atelier Roma",
    garment: "Wool Blazer",
    volume: 15,
    currentStage: "Tailoring",
    progress: 85,
    staff: "Marcus Tavenier",
  },
  {
    code: "J8R5",
    dress: "Maison Claire",
    garment: "Evening Gown",
    volume: 5,
    currentStage: "Tailoring",
    progress: 60,
    staff: "Marcus Tavenier",
  },
  {
    code: "L2P9",
    dress: "Boutique 11",
    garment: "Cotton Shirts",
    volume: 200,
    currentStage: "Cutting",
    progress: 10,
    staff: "Marcus Tavenier",
  },
];

export function getOrderByCode(code: string): OrderTableTypes | undefined {
    return orders.find((order) => order.code === code);
    }