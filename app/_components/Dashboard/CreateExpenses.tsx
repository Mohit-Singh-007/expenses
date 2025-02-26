import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function CreateExpenses() {
  return (
    <div className="flex h-[90vh] w-full max-w-5xl mx-auto items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>No expenses yet...</CardTitle>
          <CardDescription>
            Create your first expense by clicking below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/dashboard/expenses/create-expense"
            className={cn(
              buttonVariants(),
              "flex items-center justify-center space-x-2"
            )}
          >
            <PlusCircleIcon className="size-5" />
            <span>Create First Expense</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
