import { ChartTheme } from "@/types/dashboard";

export const lightTheme: ChartTheme = {
  axis: {
    stroke: "hsl(var(--border))",
    fill: "hsl(var(--foreground))"
  },
  grid: {
    stroke: "hsl(var(--border))"
  },
  text: {
    fill: "hsl(var(--foreground))"
  },
  tooltip: {
    background: "hsl(var(--background))",
    border: "hsl(var(--border))",
    text: "hsl(var(--foreground))"
  }
} as const;

export const formatEuro = (value: number) => 
  new Intl.NumberFormat('fr-FR', { 
    style: 'currency', 
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);