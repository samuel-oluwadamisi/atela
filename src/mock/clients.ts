export type PastOrder = {
  id: string;
  garmentType: string;
  quantity: number;
  deadline: string;
  description: string;
  status: "Completed" | "Cancelled";
  completedDate: string;
  amount: number;
};

export type ClientProfile = {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientAddress: string;
  dateAdded: string;
  orderHistory: PastOrder[];
};

export const data: ClientProfile[] = [
  {
    id: "cln_001",
    clientName: "Adaeze Nwankwo",
    clientPhone: "+234 802 345 6712",
    clientEmail: "adaeze.n@gmail.com",
    clientAddress: "14 Adeola Odeku Street, Victoria Island, Lagos",
    dateAdded: "2025-02-18",
    orderHistory: [
      {
        id: "ord_h101",
        garmentType: "Ankara gown",
        quantity: 1,
        deadline: "2025-03-10",
        description: "Fitted A-line gown with cap sleeves, custom Ankara print",
        status: "Completed",
        completedDate: "2025-03-08",
        amount: 45000,
      },
      {
        id: "ord_h102",
        garmentType: "Two-piece skirt set",
        quantity: 1,
        deadline: "2025-06-20",
        description: "High-waist pencil skirt with matching peplum top",
        status: "Completed",
        completedDate: "2025-06-19",
        amount: 38000,
      },
      {
        id: "ord_h103",
        garmentType: "Agbada",
        quantity: 1,
        deadline: "2025-12-02",
        description: "Traditional agbada for husband, navy with gold embroidery",
        status: "Completed",
        completedDate: "2025-12-01",
        amount: 75000,
      },
    ],
  },
  {
    id: "cln_002",
    clientName: "Tunde Bakare",
    clientPhone: "+234 810 456 7823",
    clientEmail: "tunde.bakare@yahoo.com",
    clientAddress: "22 Allen Avenue, Ikeja, Lagos",
    dateAdded: "2025-05-04",
    orderHistory: [
      {
        id: "ord_h201",
        garmentType: "Native senator wear",
        quantity: 2,
        deadline: "2025-05-30",
        description: "Two senator sets, one plain white, one striped",
        status: "Completed",
        completedDate: "2025-05-28",
        amount: 60000,
      },
      {
        id: "ord_h202",
        garmentType: "Suit",
        quantity: 1,
        deadline: "2025-09-15",
        description: "Two-piece suit for a wedding, charcoal grey",
        status: "Cancelled",
        completedDate: "2025-09-05",
        amount: 0,
      },
    ],
  },
  {
    id: "cln_003",
    clientName: "Ifeoma Chukwu",
    clientPhone: "+234 703 567 8934",
    clientEmail: "ifeoma.chukwu@outlook.com",
    clientAddress: "5 Ligali Ayorinde Street, Lekki Phase 1, Lagos",
    dateAdded: "2025-07-22",
    orderHistory: [
      {
        id: "ord_h301",
        garmentType: "Bridal gown",
        quantity: 1,
        deadline: "2025-08-01",
        description: "Mermaid-style bridal gown with lace overlay and train",
        status: "Completed",
        completedDate: "2025-07-30",
        amount: 250000,
      },
    ],
  },
  {
    id: "cln_004",
    clientName: "Emeka Obi",
    clientPhone: "+234 816 678 9045",
    clientEmail: "emeka.obi@gmail.com",
    clientAddress: "9 Ndubuisi Kanu Street, Alausa, Ikeja, Lagos",
    dateAdded: "2026-01-10",
    orderHistory: [
      {
        id: "ord_h401",
        garmentType: "Kaftan",
        quantity: 1,
        deadline: "2026-02-05",
        description: "Casual kaftan in Ankara, loose fit",
        status: "Completed",
        completedDate: "2026-02-03",
        amount: 28000,
      },
      {
        id: "ord_h402",
        garmentType: "Agbada",
        quantity: 1,
        deadline: "2026-06-18",
        description: "Formal agbada for chieftaincy event, cream with embroidery",
        status: "Completed",
        completedDate: "2026-06-16",
        amount: 90000,
      },
    ],
  },
];


export function getClientById(clientId: string): ClientProfile | undefined {
  return data.find((client) => client.id === clientId);
}