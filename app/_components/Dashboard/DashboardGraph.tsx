import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Graph from "./Graph";
import { prisma } from "@/utils/prisma";
import { auth } from "@/auth";

async function getCurrentMonthExpenses(userId: string) {
  const now = new Date(); // Get current date
  const firstDayOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDayOfCurrentMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  );

  const data = await prisma.expense.findMany({
    where: {
      userId: userId,
      createdAt: {
        gte: firstDayOfCurrentMonth,
        lte: lastDayOfCurrentMonth,
      },
    },
    select: {
      createdAt: true,
      amount: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const aggregatedData = data.reduce((acc: { [key: string]: number }, cur) => {
    const dateKey = cur.createdAt.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    acc[dateKey] = (acc[dateKey] || 0) + cur.amount;
    return acc;
  }, {});

  const transformedData = Object.entries(aggregatedData)
    .map(([date, amount]) => ({
      date,
      amount,
      originalDate: new Date(date + " " + new Date().getFullYear()),
    }))
    .sort((a, b) => a.originalDate.getTime() - b.originalDate.getTime())
    .map(({ date, amount }) => ({
      date,
      amount,
    }));

  return transformedData;
}

export default async function DashboardGraph() {
  const session = await auth();
  const data = await getCurrentMonthExpenses(session?.user?.id as string);

  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle>Visualization</CardTitle>
        <CardDescription>
          Graphical representation of expenses of current month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Graph data={data} />
      </CardContent>
    </Card>
  );
}
