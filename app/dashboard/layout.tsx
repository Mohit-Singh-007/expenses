import { auth } from "@/auth";
import DashboardNavbar from "../_components/Navbar/DashboardNavbar";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
        <DashboardNavbar />
        {children}
      </div>
      <Toaster richColors closeButton theme="light" />
    </>
  );
}
