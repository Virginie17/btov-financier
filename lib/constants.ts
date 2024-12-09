export const expenseCategories = [
  { id: "software", name: "Logiciels & Services", taxDeductible: true },
  { id: "hardware", name: "Matériel informatique", taxDeductible: true },
  { id: "office", name: "Fournitures de bureau", taxDeductible: true },
  { id: "training", name: "Formation", taxDeductible: true },
  { id: "travel", name: "Déplacements", taxDeductible: true },
  { id: "marketing", name: "Marketing & Publicité", taxDeductible: true },
  { id: "insurance", name: "Assurance professionnelle", taxDeductible: true },
  { id: "urssaf", name: "Cotisations URSSAF", taxDeductible: true },
  { id: "bank", name: "Frais bancaires", taxDeductible: true },
  { id: "other", name: "Autres dépenses", taxDeductible: false },
] as const;

export const paymentMethods = [
  { id: "card", name: "Carte bancaire" },
  { id: "transfer", name: "Virement" },
  { id: "cash", name: "Espèces" },
] as const;

export const taxRates = {
  services: 0.022, // 2.2% - Prestations de services
  commercial: 0.012, // 1.2% - Activités commerciales
  urssaf: {
    base: 0.22, // 22% - Taux de base URSSAF
    formation: 0.001, // 0.1% - Formation professionnelle
  },
} as const;

export const reportingPeriods = [
  { id: "month", name: "Mensuel" },
  { id: "quarter", name: "Trimestriel" },
  { id: "year", name: "Annuel" },
] as const;