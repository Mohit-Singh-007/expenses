import CreateExpenses from "@/app/_components/Dashboard/CreateExpenses";
import { getUserExpenses } from "@/utils/actions";

export default async function page() {
  const data = await getUserExpenses();
  return <div>{data.length > 0 ? "Hello" : <CreateExpenses />}</div>;
}
