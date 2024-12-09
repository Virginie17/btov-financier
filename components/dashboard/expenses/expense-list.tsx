"use client";

import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatEuro } from "@/components/dashboard/charts/theme";
import { Badge } from "@/components/ui/badge";
import { expenseCategories } from "@/lib/constants";

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
}

const expenses: Expense[] = [
  {
    id: "exp-1",
    amount: 250,
    category: "software",
    date: "2024-03-15",
    description: "Abonnement annuel Notion",
  },
  {
    id: "exp-2",
    amount: 45,
    category: "office",
    date: "2024-03-10",
    description: "Fournitures de bureau",
  },
];

export function ExpenseList() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Dépenses récentes</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Catégorie</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Montant</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{new Date(expense.date).toLocaleDateString("fr-FR")}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {expenseCategories.find(c => c.id === expense.category)?.name}
                </Badge>
              </TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell className="text-right">{formatEuro(expense.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}