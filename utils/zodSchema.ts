import { z } from "zod";
export const expenseSchema = z.object({
  expenseName: z.string().min(3, " Expense name must be at least 3 characters"),
  expenseNumber: z.number().min(1, "Expense amount must be at least 1"),
  username: z.string().min(3, " Username must be at least 3 characters long"),
  email: z.string().email("Invalid email"),
  amount: z.number().min(1, " Amount must be greater than 0"),
  category: z.enum(["FOOD", "SELFCARE", "HOUSE", "MEDICAL"]),
  description: z.string().optional(),
  date: z.string().min(1, "  Date must be provided"),
});
