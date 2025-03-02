import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/utils/prisma";

async function getData(userId: string) {
  const data = await prisma.expense.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      amount: true,
      expenseName: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });
  return data;
}

export default async function RecentExpenses() {
  const session = await auth();
  const data = await getData(session?.user?.id as string);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className=" border p-2 rounded-lg flex items-center gap-4"
          >
            <div className="flex flex-col">
              <p className="text-sm font-medium leading-none">
                {item.expenseName}
              </p>
              <p className="text-sm font-light leading-none mt-1">
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "short",
                }).format(item.createdAt)}
              </p>
            </div>
            <p className="ml-auto font-light">+&#8377;{item.amount}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
