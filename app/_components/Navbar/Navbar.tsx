import { ThemeToggle } from "../themes/ToggleTheme";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mt-4 ">
      <Link href={"/"} className="px-4">
        <h1 className="text-xl md:text-2xl font-light">&#8364;xpen$e.</h1>
      </Link>

      <div className="flex items-center justify-center gap-4">
        <ThemeToggle />

        <Link href={"/sign-in"} className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
