"use server";

import { auth } from "@/auth";
import { prisma } from "./prisma";

export async function getUserExpenses() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized user");
  }

  const data = await prisma.expense.findMany({
    where: {
      userId: session?.user?.id,
    },
    select: {
      amount: true,
      date: true,
      description: true,
      category: true,
    },
  });
  return data;
}
