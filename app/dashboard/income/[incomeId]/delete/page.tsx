import { auth } from "@/auth";
import { prisma } from "@/utils/prisma";
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

type Params = Promise<{ incomeId: string }>;

export default async function DeleteInvoiceRoute({
  params,
}: {
  params: Params;
}) {
  const session = await auth();
  const { incomeId } = await params;
  await Authorize(incomeId, session?.user?.id as string);

  
  return <div>DeleteInvoiceRoute</div>;
}
