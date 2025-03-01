import SubmitButton from "@/app/_components/Login/SubmitButton";
import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteExpense } from "@/utils/actions";
import { prisma } from "@/utils/prisma";
import { OctagonX } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Authorize(expenseId: string, userId: string) {
  const data = prisma.expense.findUnique({
    where: {
      id: expenseId,
      userId: userId,
    },
  });

  if (!data) {
    return redirect("/dashboard/expenses");
  }
}

type iParams = Promise<{ expenseId: string }>;

export default async function DeleteExpenseRoute({
  params,
}: {
  params: iParams;
}) {
  const [resolvedParams, session] = await Promise.all([params, auth()]);

  await Authorize(resolvedParams.expenseId, session?.user?.id as string);
  return (
    <div className="flex justify-center items-center mt-20">
      <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle>Delte Expense</CardTitle>
          <CardDescription>
            Are you sure you want to delete this expense?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <OctagonX className="size-44" />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <form
            action={async () => {
              "use server";
              await deleteExpense(resolvedParams.expenseId);
            }}
          >
            <SubmitButton text="Delete Expense" />
          </form>
          <Link
            href={"/dashboard/expenses"}
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            Cancel
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
