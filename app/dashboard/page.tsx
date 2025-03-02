import DashboardBlocks from "../_components/Dashboard/DashboardBlocks";
import DashboardGraph from "../_components/Dashboard/DashboardGraph";
import RecentExpenses from "../_components/Dashboard/RecentExpenses";

export default function DashboardPage() {
  return (
    <>
      <DashboardBlocks />
      <div className="grid gap-4 md:grid-cols-4 md:gap-8 mt-5">
        <DashboardGraph />
        <RecentExpenses />
      </div>
    </>
  );
}
