import EditIncome from "@/app/_components/Dashboard/Income/EditIncome";
import { auth } from "@/auth";
import { getIncomeById } from "@/utils/actions";
import { iEditIncome } from "@/utils/types";

type iParams = Promise<{ incomeId: string }>;

export default async function EditIncomeRoute({ params }: { params: iParams }) {
  const [resolvedParams, session] = await Promise.all([params, auth()]);

  const data: iEditIncome = await getIncomeById(
    session?.user?.id as string,
    resolvedParams.incomeId
  );
  return <EditIncome data={data} />;
}
