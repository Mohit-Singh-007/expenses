import LoginForm from "@/app/_components/Login/LoginForm";
import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
  
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href={"/"} className="flex items-center gap-2 self-center">
          <h1 className="text-xl md:text-3xl font-semibold">&#8364;xpen$e.</h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
