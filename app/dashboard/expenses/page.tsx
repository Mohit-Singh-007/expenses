import AllExpensesList from "@/app/_components/Dashboard/Expenses/AllExpensesList";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <Card className="mt-10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">All Expenses</CardTitle>
            <CardDescription>Manage your expenses here...</CardDescription>
          </div>
          <Link
            href={"/dashboard/expenses/create-expense"}
            className={buttonVariants()}
          >
            <PlusCircleIcon />
            <span>Create Expense</span>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <AllExpensesList />
      </CardContent>
    </Card>
  );
}
