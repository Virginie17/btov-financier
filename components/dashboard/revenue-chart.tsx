"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/dashboard/charts/line-chart";
import { revenueData } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function RevenueChart() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Évolution Revenus/Dépenses</h3>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Exporter
        </Button>
      </div>
      <div className="h-[400px]">
        <LineChart data={revenueData} />
      </div>
    </Card>
  );
}