import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import IncomeDialog from "../_components/Dashboard/Income/IncomeDialog";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <Card>
        <CardHeader>
          <CardTitle>Manage Your Finances</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <IncomeDialog />
        </CardContent>
      </Card>
    </div>
  );
}
