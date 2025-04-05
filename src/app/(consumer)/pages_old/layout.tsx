"use client";
import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const jb_mono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <main className="min-w-screen min-h-screen md:flex">
      <nav
        className={`${
          isMobileSidebarOpen ? "flex" : "hidden md:flex"
        } flex-col p-4 min-w-screen fixed top-0 bg-bg w-full md:sticky  md:w-fit md:min-h-screen`}
      >
        <button
          className="w-full flex md:hidden justify-end"
          onClick={() => {
            setMobileSidebarOpen(!isMobileSidebarOpen);
          }}
        >
          <XMarkIcon className="size-6 bg-zinc-800 rounded-full" />
        </button>

        <button className="peer group w-fit flex flex-row gap-1 items-center">
          <h1 className={`${jb_mono.className} `}>Community</h1>
          <ChevronDownIcon className="size-4 transition-all ease-in-out duration-300 group-focus:rotate-180" />
        </button>
        <div className="px-2 hidden transition-all ease-in-out duration-300 -translate-y-full opacity-0 peer-focus:inline peer-focus:translate-y-0 peer-focus:opacity-100">
          <Link href={"./community"} className="underline">
            Updates
          </Link>

          <h1>FAQs</h1>
        </div>
        <h1 className={`${jb_mono.className}`}>Services</h1>
        <h1 className={`${jb_mono.className}`}>Feedback</h1>
      </nav>
      <section className="w-full h-full">{children}</section>
      <nav className="fixed md:hidden bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-bg bg-opacity-85">
        <button
          className="flex flex-col items-center"
          onClick={() => {
            setMobileSidebarOpen(!isMobileSidebarOpen);
          }}
        >
          <EllipsisHorizontalIcon className="size-4" />
          <p>More</p>
        </button>
      </nav>
    </main>
  );
}
