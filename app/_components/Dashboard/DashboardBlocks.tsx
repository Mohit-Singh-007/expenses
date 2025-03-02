import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, IndianRupee, PlusCircleIcon } from "lucide-react";
import IncomeDialog from "./Income/IncomeDialog";
import { prisma } from "@/utils/prisma";
import { auth } from "@/auth";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

async function getDataForCards(userId: string) {
  const now = new Date(); // Get current date
  const firstDayOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDayOfCurrentMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  );

  const [income, expensesMonth, expenseAll] = await Promise.all([
    prisma.income.findMany({
      where: {
        userId: userId,
      },
      select: {
        incomeMoney: true,
      },
    }),
    prisma.expense.findMany({
      where: {
        userId: userId,
        createdAt: {
          gte: firstDayOfCurrentMonth,
          lte: lastDayOfCurrentMonth,
        },
      },

      select: {
        amount: true,
      },
    }),
    prisma.expense.findMany({
      where: {
        userId: userId,
      },
      select: {
        amount: true,
      },
    }),
  ]);

  const totalIncome = income.reduce((sum, cur) => cur.incomeMoney + sum, 0);
  const totalExpense = expenseAll.reduce((sum, cur) => cur.amount + sum, 0);
  const expenseMonth = expensesMonth.reduce((acc, cur) => acc + cur.amount, 0);

  return { totalIncome, totalExpense, expenseMonth };
}

export default async function DashboardBlocks() {
  const session = await auth();

  const { totalExpense, totalIncome, expenseMonth } = await getDataForCards(
    session?.user?.id as string
  );
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-4 md:gap-8">
      <Card>
        <CardHeader className="flex items-center justify-between flex-row space-y-0 pb-2">
          <CardTitle className="text-base">Total Income</CardTitle>
          <IndianRupee className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold">&#8377;{totalIncome}.00</h2>
          <p className="text-xs text-muted-foreground">Total income</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between flex-row space-y-0 pb-2">
          <CardTitle className="text-base">Total Expenses</CardTitle>
          <Banknote className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold">&#8377;{totalExpense}.00</h2>
          <p className="text-xs text-muted-foreground">
            Total expenses of all time
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between flex-row space-y-0 pb-2">
          <CardTitle className="text-base">Monthly Expenses</CardTitle>
          <Banknote className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold">&#8377;{expenseMonth}.00</h2>
          <p className="text-xs text-muted-foreground">
            Total expenses of this month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create new income/expense</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 items-center">
          <IncomeDialog />
          <Link
            href={"/dashboard/expenses/create-expense"}
            className={buttonVariants({
              variant: "default",
            })}
          >
            <PlusCircleIcon className="size-5" />
            Expense
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
