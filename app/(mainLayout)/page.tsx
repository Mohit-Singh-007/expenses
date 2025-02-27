import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Main from "@/public/main.png";
import One from "@/public/one.png";
import Two from "@/public/two.png";

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

      <section className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="col-span-1 md:col-span-2">
          <Image
            src={One}
            alt="Feature 1"
            width={600}
            quality={100}
            height={400}
            className="rounded-xl  shadow-[0px_0px_15px_rgba(0,0,0,0.9)] object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={Two}
            quality={100}
            alt="Feature 2"
            width={300}
            height={400}
            className="rounded-xl  shadow-[0px_0px_15px_rgba(0,0,0,0.9)] object-cover w-full h-auto"
          />
          {/* <Image
            src={Three}
            alt="Feature 3"
            width={300}
            height={300}
            className="rounded-xl mt-7 shadow-[0px_0px_15px_rgba(0,0,0,0.9)] object-cover w-full h-auto"
          /> */}
        </div>
      </section>

      <section className="mt-10 flex justify-center w-full">
        <Image
          src={Main}
          alt="Expense Tracker Dashboard"
          width={1000}
          height={1000}
          quality={100}
          className="rounded-lg shadow-[0px_0px_15px_rgba(0,0,0,0.9)] "
        />
      </section>

      <footer className="w-full h-64 flex flex-col items-center justify-center space-y-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Made by Mohit. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <Link href="#" className="hover:text-gray-400 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-400 transition">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
