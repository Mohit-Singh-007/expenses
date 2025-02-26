import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <section className="mt-10 text-center max-w-6xl tracking-tighter">
        <h1 className="text-4xl md:text-8xl lg:text-9xl font-semibold">
          Your Personal Expense-Tracker
        </h1>
        <h2 className="text-base md:text-lg mt-4 px-4 py-2 rounded-md">
          Get started for free with just a click
        </h2>
        <Link
          href={"/sign-in"}
          className={` ${buttonVariants({
            variant: "default",
            size: "lg",
          })} mt-6 p-6 text-lg sm:text-xl w-full sm:w-auto`}
        >
          Get Unlimited Access
        </Link>
      </section>

      <section className="mt-10 flex justify-center w-full">
        {/* <Image
          src={}
          alt="Expense Tracker Dashboard"
          width={1000}
          height={500}
          className="rounded-lg shadow-lg"
        /> */}
      </section>
    </main>
  );
}
