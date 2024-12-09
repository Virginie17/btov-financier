"use client";

import { Card } from "@/components/ui/card";
import { StatCardData } from "@/types/dashboard";

export function StatCard({ title, value, icon, trend }: StatCardData) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-muted-foreground">{title}</span>
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-muted-foreground">{trend}</p>
      </div>
    </Card>
  );
}