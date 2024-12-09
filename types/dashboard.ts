export interface RevenueData {
  month: string;
  revenue: number;
  expenses: number;
}

export interface StatCardData {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}

export interface Invoice {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
}

export interface ChartTheme {
  axis: {
    stroke: string;
    fill: string;
  };
  grid: {
    stroke: string;
  };
  text: {
    fill: string;
  };
  tooltip: {
    background: string;
    border: string;
    text: string;
  };
}

export interface ChartDimensions {
  width?: string | number;
  height?: string | number;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export interface FinancialSummary {
  quarterly: {
    revenue: number;
    expenses: number;
    profit: number;
    taxRate: number;
    estimatedTax: number;
  };
  annual: {
    revenue: number;
    expenses: number;
    profit: number;
    taxRate: number;
    estimatedTax: number;
  };
}

export interface BusinessMetrics {
  clientCount: number;
  averageInvoiceAmount: number;
  paymentDelay: number;
  profitMargin: number;
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
  taxDeductible: boolean;
  paymentMethod: 'card' | 'transfer' | 'cash';
  receipt?: string;
}