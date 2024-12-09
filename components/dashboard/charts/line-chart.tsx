"use client";

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { RevenueData } from "@/types/dashboard";
import { lightTheme, formatEuro } from "./theme";
import { ChartContainer } from "./chart-container";

interface LineChartProps {
  data: RevenueData[];
}

export function LineChart({ data }: LineChartProps) {
  return (
    <ChartContainer>
      <RechartsLineChart 
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke={lightTheme.grid.stroke}
          vertical={false}
        />
        <XAxis 
          dataKey="month"
          stroke={lightTheme.axis.stroke}
          tick={{ fill: lightTheme.text.fill }}
        />
        <YAxis
          stroke={lightTheme.axis.stroke}
          tick={{ fill: lightTheme.text.fill }}
          tickFormatter={formatEuro}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: lightTheme.tooltip.background,
            border: `1px solid ${lightTheme.tooltip.border}`,
            borderRadius: 'var(--radius)',
            padding: '8px 12px'
          }}
          formatter={(value: number) => [formatEuro(value)]}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="hsl(var(--chart-1))" 
          name="Revenus"
          strokeWidth={2}
          dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
        <Line 
          type="monotone" 
          dataKey="expenses" 
          stroke="hsl(var(--chart-2))" 
          name="Dépenses"
          strokeWidth={2}
          dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
      </RechartsLineChart>
    </ChartContainer>
  );
}