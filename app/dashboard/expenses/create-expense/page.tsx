import ExpenseForm from "@/app/_components/Dashboard/Expenses/ExpenseForm";
import { auth } from "@/auth";
import { getUserDetail } from "@/utils/actions";

export default async function page() {
  const session = await auth();
  const data = await getUserDetail(session?.user?.id as string);
  return (
    <div className="mt-10">
      
      <ExpenseForm name={data?.name as string} email={data?.email as string} />
    </div>
  );
}
