"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Euro, TrendingUp, Receipt, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { InvoiceList } from "@/components/dashboard/invoice-list";
import { ExpensesTab } from "@/components/dashboard/expenses/expenses-tab";
import { ThemeToggle } from "@/components/theme-toggle";
import { FinancialSummary } from "@/components/dashboard/financial-summary";
import { ReportsTab } from "@/components/dashboard/reports/reports-tab";

export default function Home() {
  const currentMonthStats = {
    revenue: 3450,
    expenses: 750,
    pendingInvoices: 2,
    pendingAmount: 1250,
  };

  const profitMargin = ((currentMonthStats.revenue - currentMonthStats.expenses) / currentMonthStats.revenue * 100).toFixed(0);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">BTOV Développement</h1>
            <p className="text-muted-foreground">Tableau de bord micro-entrepreneur</p>
          </div>
          <ThemeToggle />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Revenus du mois"
            value={`${currentMonthStats.revenue} €`}
            icon={<Euro className="h-4 w-4" />}
            trend="+12.5%"
          />
          <StatCard
            title="Factures en attente"
            value={currentMonthStats.pendingInvoices.toString()}
            icon={<Receipt className="h-4 w-4" />}
            trend={`${currentMonthStats.pendingAmount} €`}
          />
          <StatCard
            title="Charges à venir"
            value={`${currentMonthStats.expenses} €`}
            icon={<Calendar className="h-4 w-4" />}
            trend="Cette semaine"
          />
          <StatCard
            title="Taux de rentabilité"
            value={`${profitMargin}%`}
            icon={<TrendingUp className="h-4 w-4" />}
            trend="+5%"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <RevenueChart />
          </div>
          <div className="md:col-span-1">
            <FinancialSummary 
              revenue={currentMonthStats.revenue}
              expenses={currentMonthStats.expenses}
            />
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="invoices">Factures</TabsTrigger>
            <TabsTrigger value="expenses">Dépenses</TabsTrigger>
            <TabsTrigger value="reports">Déclarations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <InvoiceList />
          </TabsContent>

          <TabsContent value="invoices" className="space-y-4">
            <InvoiceList />
          </TabsContent>

          <TabsContent value="expenses" className="space-y-4">
            <ExpensesTab />
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <ReportsTab />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}