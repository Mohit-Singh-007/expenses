import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUserExpenses } from "@/utils/actions";
import ExpenseActions from "./ExpenseActions";

export default async function AllExpensesList() {
  const session = await auth();
  const data = await getUserExpenses(session?.user?.id as string);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Expense ID</TableHead>
          <TableHead>Expense Name</TableHead>
          <TableHead>Expense Date</TableHead>
          <TableHead>Expense Category</TableHead>
          <TableHead>Amount (Rs.)</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((expense) => (
          <TableRow key={expense.expenseNumber}>
            <TableCell>#{expense.expenseNumber}</TableCell>
            <TableCell>{expense.expenseName}</TableCell>
            <TableCell>
              {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                new Date(expense.createdAt)
              )}
            </TableCell>
            <TableCell>
              <Badge>{expense.category}</Badge>
            </TableCell>
            <TableCell>{expense.amount}</TableCell>
            <TableCell className="text-right">
              <ExpenseActions />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
