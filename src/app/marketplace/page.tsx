"use client";
import {
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  TicketIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import { JetBrains_Mono, Inter } from "next/font/google";
import { BrixCard } from "@ui/BrixCard";
import Navbar from "@ui/Navbar";
import Footer from "@ui/Footer";
import { usePathname, useSearchParams } from "next/navigation";
import FeaturedBrixGrid from "@ui/marketplace/FeaturedBrixGrid";

const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const data: {
  author: string;
  ranking: number;
  course: string;
  price: number;
  rate: "hourly";
  total_time: number;
  rating: number;
  created_at: Date;
  total_users: number;
  boosted_member: boolean;
}[] = [];

const categories = ["all", "business", "fitness", "finance", "tech", "sales"];
const subcategories = [
  "most popular",
  "most members",
  "most reviews",
  "most profit",
  "free brix",
  "new brix",
];

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div className="min-h-screen  p-4 flex flex-col gap-8">
      <Navbar />
      <div className="flex flex-1 gap-4">
        {/* Sidebar */}
        <div className="w-[12%] border-r border-[#0F0F1E] ">
          <ul
            className={`${jb_mono.className} flex flex-col font-bold text-xl h-full gap-8`}
          >
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
              className={`mt-auto flex flex-col gap-1 ${inter.className} text-zinc-400 uppercase text-sm`}
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
        </div>

        <div className="flex flex-col gap-2">
          {/* Categories & Search */}
          <div
            className={`${jb_mono.className} font-bold text-2xl grid grid-rows-1 grid-cols-7 h-fit w-full gap-4`}
          >
            {categories.map((cat) => (
              <Link
                className={`${
                  (searchParams.get("category") || "all") === cat
                    ? "text-blue"
                    : "text-white"
                } uppercase`}
                key={cat}
                href={{
                  pathname: pathname,
                  query: {
                    ...Object.fromEntries(searchParams.entries()),
                    category: encodeURIComponent(cat),
                  },
                }}
              >
                {cat}
              </Link>
            ))}

            <form className="w-48 flex items-center">
              <MagnifyingGlassIcon className="size-6" />
              <input
                placeholder="SEARCH"
                className="bg-transparent border border-[#ffffff0a] w-full  rounded-lg"
              />
            </form>
          </div>

          <FeaturedBrixGrid />
          {/* Subcategories */}
          <div
            className={`${jb_mono.className} font-bold text-2xl grid grid-rows-1 grid-cols-7 h-fit w-full gap-4`}
          >
            {subcategories.map((cat) => (
              <Link
                className={`${
                  decodeURIComponent(
                    searchParams.get("subcategory") || "most popular"
                  ) === cat
                    ? "text-blue"
                    : "text-white"
                } bg-background border border-[#ffffffa0]  rounded px-2 py-1 font-bold text-center uppercase`}
                href={{
                  pathname: pathname,
                  query: {
                    ...Object.fromEntries(searchParams.entries()),
                    subcategory: encodeURIComponent(cat),
                  },
                }}
                key={cat}
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="grid grid-rows-2 grid-cols-3 gap-4 my-8">
            {data.map((page, idx) =>
              !page.boosted_member ? (
                <BrixCard
                  key={idx}
                  author={page.author}
                  ranking={page.ranking}
                  course={page.course}
                  price={page.price}
                  rate={page.rate}
                  total_time={page.total_time}
                  rating={page.rating}
                  created_at={page.created_at}
                  total_users={page.total_users}
                  boosted_member={page.boosted_member}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
