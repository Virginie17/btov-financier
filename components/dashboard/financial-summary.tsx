"use client";

import { Card } from "@/components/ui/card";
import { taxRates } from "@/lib/constants";
import { formatEuro } from "@/components/dashboard/charts/theme";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

interface FinancialSummaryProps {
  revenue: number;
  expenses: number;
}

export function FinancialSummary({ revenue, expenses }: FinancialSummaryProps) {
  const profit = revenue - expenses;
  const estimatedTax = revenue * taxRates.services;
  const urssafBase = revenue * taxRates.urssaf.base;
  const urssafFormation = revenue * taxRates.urssaf.formation;
  const totalCharges = estimatedTax + urssafBase + urssafFormation;
  const netProfit = profit - totalCharges;

  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Synthèse financière</h3>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Chiffre d'affaires</p>
              <p className="text-2xl font-bold">{formatEuro(revenue)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Dépenses</p>
              <p className="text-2xl font-bold">{formatEuro(expenses)}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Bénéfice brut</p>
              <p className="text-2xl font-bold">{formatEuro(profit)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bénéfice net estimé</p>
              <p className="text-2xl font-bold">{formatEuro(netProfit)}</p>
            </div>
          </div>
        </div>
      </Card>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Charges estimées</AlertTitle>
        <AlertDescription>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between">
              <span>TVA ({(taxRates.services * 100).toFixed(1)}%)</span>
              <span className="font-medium">{formatEuro(estimatedTax)}</span>
            </div>
            <div className="flex justify-between">
              <span>URSSAF ({(taxRates.urssaf.base * 100).toFixed(1)}%)</span>
              <span className="font-medium">{formatEuro(urssafBase)}</span>
            </div>
            <div className="flex justify-between">
              <span>Formation ({(taxRates.urssaf.formation * 100).toFixed(1)}%)</span>
              <span className="font-medium">{formatEuro(urssafFormation)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-medium">Total des charges</span>
              <span className="font-medium">{formatEuro(totalCharges)}</span>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}