

// export type StaffMember = {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   role: string;
//   paymentType: "Salary" | "Commission";
//   activeTasks:number;
//   output: number;
//   lastMonth: number;
//   thisMonth: number;
// };

export type StaffMember = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  paymentType: "Salary" | "Commission";
  status: "Active" | "On Leave" | "Inactive";
  dateJoined: string; // ISO date
  activeTasks: number;
  output: number; // today's output
  lastMonth: number;
  thisMonth: number;
  activeTaskList: {
    id: string;
    orderRef: string;
    stage: string;
    dueDate: string; // ISO date
  }[];
  recentOutputHistory: {
    date: string; // ISO date
    count: number;
  }[];
  totalEarningsThisMonth: number; // calculated & sent from backend
};

export const staffMembers: StaffMember[] = [
  {
    id: "asd6as",
    firstName: "Ngozi",
    lastName: "Amaka",
    email: "ngozi.a@atelafashion.com",
    phone: "+234 803 123 4567",
    role: "Pattern Maker",
    paymentType: "Salary",
    status: "Active",
    dateJoined: "2024-03-11",
    activeTasks: 3,
    output: 5,
    lastMonth: 200000,
    thisMonth: 130000,
    activeTaskList: [
      { id: "tsk_101", orderRef: "ORD-2045", stage: "Pattern Drafting", dueDate: "2026-08-06" },
      { id: "tsk_102", orderRef: "ORD-2049", stage: "Cutting", dueDate: "2026-08-08" },
      { id: "tsk_103", orderRef: "ORD-2051", stage: "Pattern Drafting", dueDate: "2026-08-10" },
    ],
    recentOutputHistory: [
      { date: "2026-07-29", count: 4 },
      { date: "2026-07-30", count: 6 },
      { date: "2026-07-31", count: 3 },
      { date: "2026-08-01", count: 5 },
      { date: "2026-08-02", count: 0 },
      { date: "2026-08-03", count: 5 },
      { date: "2026-08-04", count: 5 },
    ],
    totalEarningsThisMonth: 130000,
  },
  {
    id: "asd6jsdbsas",
    firstName: "Mije",
    lastName: "Digban",
    email: "mije.d@atelafashion.com",
    phone: "+234 806 234 5678",
    role: "Head Cutter",
    paymentType: "Salary",
    status: "Active",
    dateJoined: "2023-11-20",
    activeTasks: 2,
    output: 4,
    lastMonth: 150000,
    thisMonth: 120000,
    activeTaskList: [
      { id: "tsk_204", orderRef: "ORD-2047", stage: "Cutting", dueDate: "2026-08-05" },
      { id: "tsk_205", orderRef: "ORD-2052", stage: "Cutting", dueDate: "2026-08-09" },
    ],
    recentOutputHistory: [
      { date: "2026-07-29", count: 3 },
      { date: "2026-07-30", count: 5 },
      { date: "2026-07-31", count: 4 },
      { date: "2026-08-01", count: 4 },
      { date: "2026-08-02", count: 0 },
      { date: "2026-08-03", count: 4 },
      { date: "2026-08-04", count: 4 },
    ],
    totalEarningsThisMonth: 120000,
  },
  {
    id: "assvdtyasfd67q2d6as",
    firstName: "Emmanuella",
    lastName: "Olusegun",
    email: "emmanuella.o@atelafashion.com",
    phone: "+234 812 345 6789",
    role: "Senior Tailor",
    paymentType: "Commission",
    status: "Active",
    dateJoined: "2024-09-02",
    activeTasks: 1,
    output: 3,
    lastMonth: 100000,
    thisMonth: 80000,
    activeTaskList: [
      { id: "tsk_301", orderRef: "ORD-2050", stage: "Sewing", dueDate: "2026-08-07" },
    ],
    recentOutputHistory: [
      { date: "2026-07-29", count: 2 },
      { date: "2026-07-30", count: 3 },
      { date: "2026-07-31", count: 4 },
      { date: "2026-08-01", count: 3 },
      { date: "2026-08-02", count: 0 },
      { date: "2026-08-03", count: 3 },
      { date: "2026-08-04", count: 3 },
    ],
    totalEarningsThisMonth: 80000,
  },
  {
    id: "asqwe7t3q87ed6as",
    firstName: "Jumoke",
    lastName: "Abraham",
    email: "jumoke.a@atelafashion.com",
    phone: "+234 701 456 7890",
    role: "Tailor",
    paymentType: "Commission",
    status: "On Leave",
    dateJoined: "2025-05-14",
    activeTasks: 0,
    output: 0,
    lastMonth: 0,
    thisMonth: 0,
    activeTaskList: [],
    recentOutputHistory: [
      { date: "2026-07-29", count: 0 },
      { date: "2026-07-30", count: 0 },
      { date: "2026-07-31", count: 0 },
      { date: "2026-08-01", count: 0 },
      { date: "2026-08-02", count: 0 },
      { date: "2026-08-03", count: 0 },
      { date: "2026-08-04", count: 0 },
    ],
    totalEarningsThisMonth: 0,
  },
];

// export const staffMembers: StaffMember[] = [
//   {
//     id: 'asd6as',
//     firstName: "Ngozi",
//     lastName: 'Amaka',
//     email: "ngozi.a@atelafashion.com",
//     role: "Pattern Maker",
//     paymentType: "Salary",
//     activeTasks: 3,
//     output: 5,
//     lastMonth: 200000,
//     thisMonth: 130000,
//   },
//   {
//     id: 'asd6jsdbsas',
//     firstName: "Mije",
//     lastName: 'Digban',
//     email: "mije.d@atelafashion.com",
//     role: "Head Cutter",
//     paymentType: "Salary",
//     activeTasks: 2,
//     output: 4,
//     lastMonth: 150000,
//     thisMonth: 120000,
//   },
//   {
//     id: 'assvdtyasfd67q2d6as',
//     firstName: "Emmanuella",
//     lastName: 'Olusegun',
//     email: "emmanuella.o@atelafashion.com",
//     role: "Senior Tailor",
//     paymentType: "Commission",
//     activeTasks: 1,
//     output: 3,
//     lastMonth: 100000,
//     thisMonth: 80000,
//   },
//   {
//     id: 'asqwe7t3q87ed6as',
//     firstName: "Jumoke",
//     lastName: 'Abraham',
//     email: "jumoke.a@atelafashion.com",
//     role: "Tailor",
//     paymentType: "Commission",
//     activeTasks: 0,
//     output: 0,
//     lastMonth: 0,
//     thisMonth: 0,
//   },
// ];

export function getDemoStaffById(id: string): StaffMember | undefined {
    return staffMembers.find((member) => member.id === id);
}