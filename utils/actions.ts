"use server";

import { auth } from "@/auth";
import { prisma } from "./prisma";
import { parseWithZod } from "@conform-to/zod";
import { expenseSchema } from "./zodSchema";
import { redirect } from "next/navigation";

export async function getUserExpenses(userId: string) {
  const data = await prisma.expense.findMany({
    where: {
      userId: userId,
    },
    select: {
      expenseNumber: true,
      expenseName: true,
      amount: true,
      date: true,
      category: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export async function createExpense(prevState: unknown, formData: FormData) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized user");
  }

  const submission = parseWithZod(formData, {
    schema: expenseSchema,
  });

  if (submission.status !== "success") {
    return submission.reply(); // Return the error message
  }

  await prisma.expense.create({
    data: {
      expenseNumber: submission.value.expenseNumber,
      expenseName: submission.value.expenseName,
      username: submission.value.username,
      email: submission.value.email,
      amount: submission.value.amount,
      date: submission.value.date, // string
      description: submission.value.description,
      category: submission.value.category,
      userId: session.user.id, // Add the user ID
    },
  });

  return redirect("/dashboard/expenses");
}
