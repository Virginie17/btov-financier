import { RevenueData, Invoice } from "@/types/dashboard";

export const revenueData: RevenueData[] = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
];

export const invoiceData: Invoice[] = [
  {
    id: "INV-001",
    client: "Client A",
    amount: 1500,
    date: "2024-03-15",
    status: "paid",
  },
  {
    id: "INV-002",
    client: "Client B",
    amount: 2300,
    date: "2024-03-20",
    status: "pending",
  },
  {
    id: "INV-003",
    client: "Client C",
    amount: 950,
    date: "2024-03-25",
    status: "pending",
  },
];