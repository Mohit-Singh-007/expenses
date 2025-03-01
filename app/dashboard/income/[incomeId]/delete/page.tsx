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
import { deleteUserIncome } from "@/utils/actions";
import { prisma } from "@/utils/prisma";
import { OctagonX } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Authorize(incomeId: string, userId: string) {
  const data = await prisma.income.findUnique({
    where: {
      id: incomeId,
      userId: userId,
    },
  });

  if (!data) {
    return redirect("/dashboard/income");
  }
}

type iParams = Promise<{ incomeId: string }>;

export default async function DeleteInvoiceRoute({
  params,
}: {
  params: iParams;
}) {
  const [resolvedParams, session] = await Promise.all([params, auth()]);

  await Authorize(resolvedParams.incomeId, session?.user?.id as string);

  return (
    <div className="flex justify-center items-center mt-20">
      <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle>Delte Income</CardTitle>
          <CardDescription>
            Are you sure you want to delete this income?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <OctagonX className="size-44" />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <form
            action={async () => {
              "use server";
              await deleteUserIncome(resolvedParams.incomeId);
            }}
          >
            <SubmitButton text="Delete Income" />
          </form>
          <Link
            href={"/dashboard/income"}
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
