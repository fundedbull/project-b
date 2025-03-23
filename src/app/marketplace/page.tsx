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

const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const data = [
  {
    author: "John Smith",
    ranking: 1,
    course: "JavaScript Essentials",
    price: 49.99,
    rate: "hourly",
    total_time: 30,
    rating: 4.8,
    created_at: new Date("2025-01-10T10:00:00Z"),
    total_users: 1200,
    boosted_member: true,
  },
  {
    author: "Emily Johnson",
    ranking: 2,
    course: "Python for Data Science",
    price: 59.99,
    rate: "hourly",
    total_time: 50,
    rating: 4.7,
    created_at: new Date("2025-01-15T14:30:00Z"),
    total_users: 950,
    boosted_member: true,
  },
  {
    author: "Michael Brown",
    ranking: 3,
    course: "Web Development Bootcamp",
    price: 99.99,
    rate: "hourly",
    total_time: 70,
    rating: 4.9,
    created_at: new Date("2024-12-20T09:45:00Z"),
    total_users: 5000,
    boosted_member: true,
  },
  {
    author: "Sophia Davis",
    ranking: 4,
    course: "React and Redux Mastery",
    price: 79.99,
    rate: "hourly",
    total_time: 40,
    rating: 4.6,
    created_at: new Date("2025-01-12T08:15:00Z"),
    total_users: 1800,
    boosted_member: false,
  },
  {
    author: "Liam Wilson",
    ranking: 5,
    course: "Node.js Backend Development",
    price: 39.99,
    rate: "hourly",
    total_time: 35,
    rating: 4.5,
    created_at: new Date("2025-01-18T12:00:00Z"),
    total_users: 700,
    boosted_member: false,
  },
  {
    author: "Olivia Martinez",
    ranking: 6,
    course: "Machine Learning with Python",
    price: 119.99,
    rate: "hourly",
    total_time: 80,
    rating: 4.9,
    created_at: new Date("2024-11-30T11:20:00Z"),
    total_users: 2300,
    boosted_member: false,
  },
  {
    author: "Noah Anderson",
    ranking: 7,
    course: "Django for Beginners",
    price: 29.99,
    rate: "hourly",
    total_time: 25,
    rating: 4.4,
    created_at: new Date("2025-01-05T16:00:00Z"),
    total_users: 350,
    boosted_member: false,
  },
  {
    author: "Emma Thomas",
    ranking: 8,
    course: "Full Stack Development",
    price: 149.99,
    rate: "hourly",
    total_time: 100,
    rating: 4.7,
    created_at: new Date("2025-01-02T13:00:00Z"),
    total_users: 4000,
    boosted_member: false,
  },
  {
    author: "Lucio Correia dos Santos",
    ranking: 9,
    course: "SQL for Data Analysis",
    price: 19.99,
    rate: "hourly",
    total_time: 15,
    rating: 4.2,
    created_at: new Date("2025-01-17T09:00:00Z"),
    total_users: 150,
    boosted_member: false,
  },
  {
    author: "Noah Anderson",
    ranking: 7,
    course: "Django for Beginners",
    price: 29.99,
    rate: "hourly",
    total_time: 25,
    rating: 4.4,
    created_at: new Date("2025-01-05T16:00:00Z"),
    total_users: 350,
    boosted_member: false,
  },
  {
    author: "Emma Thomas",
    ranking: 8,
    course: "Full Stack Development",
    price: 149.99,
    rate: "hourly",
    total_time: 100,
    rating: 4.7,
    created_at: new Date("2025-01-02T13:00:00Z"),
    total_users: 4000,
    boosted_member: false,
  },
  {
    author: "Lucio Correia dos Santos",
    ranking: 9,
    course: "SQL for Data Analysis",
    price: 19.99,
    rate: "hourly",
    total_time: 15,
    rating: 4.2,
    created_at: new Date("2025-01-17T09:00:00Z"),
    total_users: 150,
    boosted_member: false,
  },
];

export default function Home() {
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
              <p className="border border-[#ffffffa0] rounded-sm p-1 w-fit text-blue">
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
          <div
            className={`${jb_mono.className} font-bold text-2xl grid grid-rows-1 grid-cols-7 h-fit w-full gap-4`}
          >
            <Link href="/">ALL</Link>
            <Link href="/">BUSINESS</Link>
            <Link href="/">FITNESS</Link>
            <Link href="/">FINANCE</Link>
            <Link href="/">TECH</Link>
            <Link href="/">SALES</Link>
            <form className="w-48 flex items-center">
              <MagnifyingGlassIcon className="size-6" />
              <input
                placeholder="SEARCH"
                className="bg-transparent border border-[#ffffff0a] w-full  rounded-lg"
              />
            </form>
          </div>

          <div className="grid grid-rows-1 grid-cols-3 gap-4 mt-6 mb-8">
            {data.map((page, idx) =>
              page.boosted_member ? (
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

          <div
            className={`${jb_mono.className} font-bold text-2xl grid grid-rows-1 grid-cols-7 h-fit w-full gap-4`}
          >
            <Link
              className="bg-background border border-[#ffffffa0] text-blue rounded-sm px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST POPULAR
            </Link>
            <Link
              className="bg-background border border-[#ffffffa0] text-blue rounded-sm px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST MEMBERS
            </Link>
            <Link
              className="bg-background border border-[#ffffffa0] text-blue rounded-sm px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST REVIEWS
            </Link>
            <Link
              className="bg-background border border-[#ffffffa0] text-blue rounded-sm px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST PROFIT
            </Link>
            <Link
              className="bg-background border border-[#ffffffa0] text-blue rounded-sm px-2 py-1 font-bold text-center"
              href="/"
            >
              FREE BRIX
            </Link>
            <Link
              className="bg-background border border-[#ffffffa0] text-blue rounded-sm px-2 py-1 font-bold text-center"
              href="/"
            >
              NEW BRIX
            </Link>
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
