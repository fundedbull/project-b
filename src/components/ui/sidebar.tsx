"use client";

import {
  BookmarkIcon,
  ViewfinderCircleIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Sidebar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${jetBrainsMono.className} flex md:hidden w-full justify-end items-center px-4 text-xl`}
      >
        <ChevronDownIcon className="size-6" />
      </button>
      <aside
        className={`${jetBrainsMono.className} ${
          isOpen ? "flex md:flex" : "hidden md:flex"
        } min-h-screen z-40 p-4`}
      >
        <ul className="flex flex-col gap-4">
          <li className="flex gap-1 items-center">
            <BookmarkIcon className="size-6" />
            <Link href="/">FAVORITES</Link>
          </li>
          <li className="flex gap-1 items-center">
            <ViewfinderCircleIcon className="size-6" />
            <Link href="/">BOUNTIES</Link>
          </li>
          <li className="flex gap-1 items-center">
            <TicketIcon className="size-6" />
            <Link href="/">POINTS SHOP</Link>
          </li>
          <li className="flex gap-1 items-center">
            <ChatBubbleLeftRightIcon className="size-6" />
            <Link href="/">CONNECT</Link>
          </li>
          <li className="flex gap-1 items-center">
            <PresentationChartLineIcon className="size-6" />
            <Link href="/">DASHBOARD</Link>
          </li>
          <li className="flex gap-1 items-center">
            <RocketLaunchIcon className="size-6" />
            <Link href="/">BOOSTING</Link>
          </li>
          <li className="flex gap-1 items-center">
            <Square3Stack3DIcon className="size-6" />
            <Link href="/">COURSES</Link>
          </li>
          <li className="flex gap-1 items-center">
            <QuestionMarkCircleIcon className="size-6" />
            <Link href="/">FAQS</Link>
          </li>
          <li className="flex gap-1 items-center">
            <LightBulbIcon className="size-6" />
            <Link href="/">FEEDBACK</Link>
          </li>
          <li
            className={`flex flex-col gap-1 ${inter.className} text-zinc-400 uppercase text-sm`}
          >
            <p>
              Made by <span className="text-orange">creators</span>
            </p>
            <p className="border border-[#ffffffa0] rounded p-1 w-fit text-blue">
              $10,142,242
            </p>
          </li>
          <li className="flex gap-1 items-center">
            <Cog6ToothIcon className="size-6" />
            <Link href="/">SETTINGS</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
