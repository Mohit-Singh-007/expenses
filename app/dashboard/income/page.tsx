import IncomeList from "@/app/_components/Dashboard/Income/IncomeList";
import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUserIncome } from "@/utils/actions";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default async function page() {
  const session = await auth();
  const data = await getUserIncome(session?.user?.id as string);

  return data.length > 0 ? (
    <Card className="mt-10 ">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Your Income/s</CardTitle>
            <CardDescription>Manage your income here...</CardDescription>
          </div>
          <Link
            href={"/dashboard/expenses/create-expense"}
            className={buttonVariants()}
          >
            <PlusCircleIcon />
            <span>Create Income</span>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <IncomeList income={data} />
      </CardContent>
    </Card>
  ) : (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle className="text-2xl">No income Found</CardTitle>
        <CardDescription>
          You haven&apos;t added any income yet. Start by adding the income now!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Link
          href={"/dashboard/expenses/create-expense"}
          className={buttonVariants({ variant: "outline" })}
        >
          <PlusCircleIcon className="mr-2" />
          Add Your First Income
        </Link>
      </CardContent>
    </Card>
  );
}
