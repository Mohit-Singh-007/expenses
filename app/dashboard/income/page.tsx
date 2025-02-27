import IncomeDialog from "@/app/_components/Dashboard/Income/IncomeDialog";
import IncomeList from "@/app/_components/Dashboard/Income/IncomeList";
import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUserIncome } from "@/utils/actions";

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
          <IncomeDialog />
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
        <IncomeDialog />
      </CardContent>
    </Card>
  );
}
