import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';

export const axisConfig = {
  axisLine: { stroke: 'hsl(var(--border))' },
  tick: { fill: 'hsl(var(--foreground))' },
  tickLine: { stroke: 'hsl(var(--border))' },
  fontSize: 12,
  fontFamily: 'inherit'
} as const;

export const tooltipConfig = {
  contentStyle: {
    backgroundColor: 'hsl(var(--background))',
    border: '1px solid hsl(var(--border))',
    borderRadius: 'var(--radius)',
    padding: '8px 12px'
  },
  labelStyle: { 
    color: 'hsl(var(--foreground))',
    marginBottom: '4px'
  },
  itemStyle: {
    color: 'hsl(var(--foreground))'
  }
} as const;