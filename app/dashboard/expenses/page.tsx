import AllExpensesList from "@/app/_components/Dashboard/Expenses/AllExpensesList";
import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUserExpenses } from "@/utils/actions";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default async function page() {
  const session = await auth();
  const data = await getUserExpenses(session?.user?.id as string);

  return data.length > 0 ? (
    <Card className="mt-10 ">
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
        <AllExpensesList expenses={data} />
      </CardContent>
    </Card>
  ) : (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle className="text-2xl">No Expenses Found</CardTitle>
        <CardDescription>
          You haven&apos;t added any expenses yet. Start tracking your expenses
          now!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Link
          href={"/dashboard/expenses/create-expense"}
          className={buttonVariants({ variant: "outline" })}
        >
          <PlusCircleIcon className="mr-2" />
          Add Your First Expense
        </Link>
      </CardContent>
    </Card>
  );
}
