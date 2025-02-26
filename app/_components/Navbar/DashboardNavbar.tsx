import Link from "next/link";
import DashboardLinks from "./DashboardLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";

export default async function DashboardNavbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href={"/"} className="px-4">
        <h1 className="text-xl md:text-2xl font-light">&#8364;xpen$e.</h1>
      </Link>

      <div className="flex items-center justify-center md:gap-x-20 ">
        <div className="hidden md:flex ">
          <DashboardLinks />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="border p-2 rounded-full mt-1 md:mt-0">
              <User className={" size-5 md:size-4"} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left" className="text-center">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <Link href={"/"}>Home</Link>
            <DropdownMenuSeparator />

            <Link href={"/dashboard"}>Dashboard</Link>
            <DropdownMenuSeparator />
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Button type="submit" variant={"ghost"}>
                Sign Out
              </Button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
