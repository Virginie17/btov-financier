"use client";

import { Card } from "@/components/ui/card";
import { ExpenseForm } from "./expense-form";
import { ExpenseList } from "./expense-list";

export function ExpensesTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Nouvelle dépense</h3>
        <ExpenseForm />
      </Card>
      <ExpenseList />
    </div>
  );
}