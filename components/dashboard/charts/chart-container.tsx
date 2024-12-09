"use client";

import { ResponsiveContainer } from "recharts";
import { ChartDimensions } from "@/types/dashboard";

interface ChartContainerProps extends ChartDimensions {
  children: React.ReactNode;
}

export function ChartContainer({ 
  children, 
  width = "100%", 
  height = "100%"
}: ChartContainerProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      {children}
    </ResponsiveContainer>
  );
}