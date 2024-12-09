"use client";

import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarClock } from "lucide-react";

export function ReportsTab() {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Déclarations à venir</h3>
        <Alert>
          <CalendarClock className="h-4 w-4" />
          <AlertTitle>Prochaines échéances</AlertTitle>
          <AlertDescription>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Déclaration TVA</p>
                  <p className="text-sm text-muted-foreground">1er trimestre 2024</p>
                </div>
                <p className="text-sm">30 avril 2024</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Cotisations URSSAF</p>
                  <p className="text-sm text-muted-foreground">2ème trimestre 2024</p>
                </div>
                <p className="text-sm">31 juillet 2024</p>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </Card>
    </div>
  );
}