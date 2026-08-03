

export type StaffMember = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  paymentType: "Salary" | "Commission";
  activeTasks:number;
  output: number;
};

export const staffMembers: StaffMember[] = [
  {
    id: 'asd6as',
    firstName: "Sarah",
    lastName: 'Jenkins',
    email: "sarah.j@fashionhouse.com",
    role: "Pattern Maker",
    paymentType: "Salary",
    activeTasks: 3,
    output: 5,
  },
  {
    id: 'asd6jsdbsas',
    firstName: "Mije",
    lastName: 'Digban',
    email: "marcus.t@fashionhouse.com",
    role: "Head Cutter",
    paymentType: "Salary",
    activeTasks: 2,
    output: 4,
  },
  {
    id: 'assvdtyasfd67q2d6as',
    firstName: "Sarah",
    lastName: 'Jenkins',
    email: "elena.r@fashionhouse.com",
    role: "Senior Tailor",
    paymentType: "Commission",
    activeTasks: 1,
    output: 3,
  },
  {
    id: 'asqwe7t3q87ed6as',
    firstName: "Sarah",
    lastName: 'Jenkins',
    email: "david.c@fashionhouse.com",
    role: "Tailor",
    paymentType: "Commission",
    activeTasks: 0,
    output: 0,
  },
];

export function getDemoStaffById(id: string): StaffMember | undefined {
    return staffMembers.find((member) => member.id === id);
}