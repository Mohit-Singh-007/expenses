import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Main from "@/public/main.png";
import One from "@/public/one.png";
import Two from "@/public/two.png";

export default function RootPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 w-full">
      <section className="mt-10 text-center max-w-6xl tracking-tighter px-2">
        <h1 className="text-3xl md:text-7xl lg:text-8xl font-semibold leading-tight">
          Your Personal Expense-Tracker
        </h1>
        <h2 className="text-base  md:text-xl mt-4 px-4 py-2 rounded-md">
          Get started for free with just a click
        </h2>
        <Link
          href="/sign-in"
          className={` ${buttonVariants({
            variant: "default",
            size: "lg",
          })} mt-6 p-5 text-xl w-auto`}
        >
          Get Unlimited Access
        </Link>
      </section>

      <section className=" border p-4 pb-0 mt-10 rounded-lg shadow-[0px_0px_15px_rgba(0,0,0,0.9)]">
        <div className="mt-10 grid grid-cols-1  md:grid-cols-3 gap-6 w-full max-w-4xl ">
          <div className="col-span-1 md:col-span-2">
            <Image
              src={One}
              alt="Feature 1"
              width={500}
              height={400}
              quality={100}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
          <div className="col-span-1">
            <Image
              src={Two}
              alt="Feature 2"
              width={300}
              height={400}
              quality={100}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-10 md:flex justify-center w-full px-2 hidden ">
          <Image
            src={Main}
            alt="Expense Tracker Dashboard"
            width={400}
            height={400}
            quality={100}
            className="rounded-xl shadow-2xl object-contain"
          />
        </div>
      </section>
      <footer className="w-full h-auto flex flex-col items-center justify-center space-y-4 py-6 text-center px-4 mt-10 md:mt-5">
        <p className="text-base  md:text-sm">
          © {new Date().getFullYear()} Made by Mohit. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link
            href="#"
            className="hover:text-gray-400 transition text-base  md:text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400 transition text-base  md:text-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400 transition text-base  md:text-sm"
          >
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
