import EditExpense from "@/app/_components/Dashboard/Expenses/EditExpense";
import { auth } from "@/auth";
import { getExpenseById } from "@/utils/actions";
import { iEditExpense } from "@/utils/types";
import React from "react";

type iParams = Promise<{ expenseId: string }>;

export default async function EditInvoiceRoute({
  params,
}: {
  params: iParams;
}) {
  const [resolvedParams, session] = await Promise.all([params, auth()]);

  const data: iEditExpense = await getExpenseById(
    session?.user?.id as string,
    resolvedParams.expenseId
  );

  return <EditExpense data={data} />;
}
