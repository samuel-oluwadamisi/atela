import { TaskDataType } from "../types/staffDataTypes";


export const tasks: TaskDataType[] = [
    {
   
    id: 1,
    client: "Aisha Bello",
    dress: "Red Corset Dress",
    size: "M",
    deadline: "Jul 10",
    commission: 4000,
    status: "In Progress",
  },
  {
    id: 2,
    client: "Chioma Okafor",
    dress: "Ruffle Mini Dress",
    size: "S",
    deadline: "Jul 12",
    commission: 5000,
    status: "In Progress",
  },
  {
    id:3,
    client: "Temilade Johnson",
    dress: "Kimono",
    size: "L",
    deadline: "Jul 15",
    commission: 3000,
    status: "Completed",
  },
  {
    id:4,
    client: "Fatima Musa",
    dress: "Green Aso Ebi",
    size: "XL",
    deadline: "Jul 18",
    commission: 6500,
    status: "Completed",
  },
  {
    id:5,
    client: "Zainab Ibrahim",
    dress: "Peplum Gown",
    size: "M",
    deadline: "Jul 20",
    commission: 4500,
    status: "Completed",
  }
]

export function getTaskById(id:number): TaskDataType | undefined{
  return tasks.find((task)=> task.id === id)
}