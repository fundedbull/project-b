import {
  MagnifyingGlassIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Footerbar from "@ui/Footer";
import Navbar from "@ui/Navbar";
import Sidebar from "@ui/sidebar";
import SubNavLink from "@ui/SubNavLinks";
import { JetBrains_Mono, Inter } from "next/font/google";

import brix_logo from "/public/brix_logo.png";
import Image from "next/image";
import { Suspense } from "react";
const categories = ["ALL", "BUSINESS", "FITNESS", "FINANCE", "TECH", "SALES"];
const subcategories = [
  "most popular",
  "most members",
  "most reviews",
  "most profit",
  "free brix",
  "new brix",
];

const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const boosted = [
  {
    author: "John Smith",
    ranking: 1,
    course: "JavaScript Essentials",
    price: 49.99,
    rate: "MO",
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
    rate: "MO",
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
    rate: "MO",
    total_time: 70,
    rating: 4.9,
    created_at: new Date("2024-12-20T09:45:00Z"),
    total_users: 5000,
    boosted_member: true,
  },
];

const data = [
  {
    author: "Sophia Davis",
    ranking: 4,
    course: "React and Redux Mastery",
    price: 79.99,
    rate: "MO",
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
    rate: "MO",
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
    rate: "MO",
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
    rate: "MO",
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
    rate: "MO",
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
    rate: "MO",
    total_time: 15,
    rating: 4.2,
    created_at: new Date("2025-01-17T09:00:00Z"),
    total_users: 150,
    boosted_member: false,
  },
];

export default function Market() {
  return (
    <main className={`${inter.className} container mx-auto`}>
      <Navbar />
      <div className=" md:flex md:flex-row">
        <Sidebar />
        <section className="flex flex-col px-4 gap-4 md:w-full">
          <div
            className={`${jb_mono.className} font-bold text-4xl text-center py-4 flex flex-col`}
          >
            <h1>BRIX PAGE</h1>
            <h1 className="bg-gradient-to-r from-primary-400 via-secondary-200 via-60% to-secondary-600 bg-clip-text text-transparent">
              MARKETPLACE
            </h1>
          </div>

          <nav className="flex flex-row gap-2  justify-between  *:font-bold">
            {categories.map((V) => (
              <Suspense key={V}>
                <SubNavLink K={"category"} V={V} D={"all"} />
              </Suspense>
            ))}
          </nav>
          <div className="flex flex-row gap-4 text-gray-600 text-xl my-3 items-center px-2 rounded-lg w-full py-1 border border-gray-600">
            <MagnifyingGlassIcon className="size-6" />
            <p>Search here</p>
          </div>
          <div className="flex items-center gap-2">
            <h1 className={`${jb_mono.className} font-bold text-2xl`}>
              BOOSTED BRIX
            </h1>
            <Image
              src={brix_logo}
              width={100}
              height={100}
              alt="logo"
              className="size-8"
            />
          </div>

          <div className="grid  grid-cols-5 grid-rows-3 md:grid-rows-4 gap-y-8 items-center uppercase ">
            <h1
              className={`${jb_mono.className} font-bold text-xl hidden md:flex md:grid-cols-1`}
            >
              Ranking
            </h1>
            <h1
              className={`${jb_mono.className} font-bold text-xl col-span-4 hidden md:flex md:col-span-2`}
            >
              Brix Page
            </h1>
            <h1
              className={`${jb_mono.className} font-bold text-xl hidden md:flex`}
            >
              Review
            </h1>
            <h1
              className={`${jb_mono.className} hidden md:flex font-bold text-xl`}
            >
              Created At/HOURS
            </h1>
            {boosted.map((page) => (
              <>
                <div className="hidden md:flex md:grid-cols-1 ">
                  <h3>#{page.ranking} Ranked</h3>
                </div>
                <div className="col-span-4 md:col-span-2">
                  <div className="flex flex-row gap-2">
                    <Image
                      src={brix_logo}
                      width={250}
                      height={250}
                      alt="profile"
                      className="rounded-lg size-12 min-w-12"
                    />
                    <div>
                      <h3
                        className={`${jb_mono.className} w-60 truncate md:w-full`}
                      >
                        {page.course}
                      </h3>
                      <p className="hidden">{page.author}</p>
                      <div className="flex items-center justify-between w-64">
                        <div className="flex items-center">
                          <UserIcon className="size-4" />{" "}
                          <p>{page.total_users} Joined</p>
                        </div>
                        <button className="text-xs  py-1 mx-6 w-20 text-center bg-background border border-white rounded-lg relative h-full before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-blue before:to-orange before:blur">
                          {page.price}/{page.rate}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <p>{page.rating}</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((v) => (
                      <StarIcon key={v} className="size-3 fill-orange" />
                    ))}
                  </div>
                  <p className="text-xs text-nowrap">
                    {page.price * 1000} reviews
                  </p>
                </div>
                <div className="hidden md:flex flex-col gap-1 ">
                  <h1>By {page.author}</h1>
                  <div className="flex gap-1 items-center">
                    <p>{page.created_at.toLocaleDateString()} </p>
                    <div className="size-1 rounded-full bg-white" />
                    <p>{page.total_time} HOURS</p>
                  </div>
                </div>
              </>
            ))}
          </div>

          <nav className="flex flex-row overflow-x-scroll md:overflow-auto gap-4 justify-between  *:font-bold *:bg-background *:border *:border-[#ffffffa0] *:rounded *:text-nowrap *:px-2 *:py-1">
            {subcategories.map((V) => (
              <Suspense key={V}>
                <SubNavLink K={"subcategories"} V={V} D={"most popular"} />
              </Suspense>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <h1 className={`${jb_mono.className} font-bold text-2xl`}>
              BRIX PAGES
            </h1>
            <Image
              src={brix_logo}
              width={100}
              height={100}
              alt="logo"
              className="size-8"
            />
          </div>

          <div className="grid  grid-cols-5 grid-rows-3 md:grid-rows-4 gap-y-8 items-center uppercase ">
            <h1
              className={`${jb_mono.className} font-bold text-xl hidden md:flex md:grid-cols-1`}
            >
              Ranking
            </h1>
            <h1
              className={`${jb_mono.className} font-bold text-xl col-span-4 hidden md:flex md:col-span-2`}
            >
              Brix Page
            </h1>
            <h1
              className={`${jb_mono.className} font-bold text-xl hidden md:flex`}
            >
              Review
            </h1>
            <h1
              className={`${jb_mono.className} hidden md:flex font-bold text-xl `}
            >
              Created At/HOURS
            </h1>
            {data.map((page) => (
              <>
                <div className="hidden md:flex md:grid-cols-1 ">
                  <h3>#{page.ranking} Ranked</h3>
                </div>
                <div className="col-span-4 md:col-span-2">
                  <div className="flex flex-row gap-2">
                    <Image
                      src={brix_logo}
                      width={250}
                      height={250}
                      alt="profile"
                      className="rounded-lg size-12 min-w-12"
                    />
                    <div>
                      <h3
                        className={`${jb_mono.className} w-60 truncate md:w-full`}
                      >
                        {page.course}
                      </h3>
                      <p className="hidden">{page.author}</p>
                      <div className="flex items-center justify-between w-64">
                        <div className="flex items-center">
                          <UserIcon className="size-4" />{" "}
                          <p>{page.total_users} Joined</p>
                        </div>
                        <button className="text-xs  py-1 mx-6 w-20 text-center bg-background border border-white rounded-lg relative h-full before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-blue before:to-orange before:blur">
                          {page.price}/{page.rate}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <p>{page.rating}</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((v) => (
                      <StarIcon key={v} className="size-3 fill-orange" />
                    ))}
                  </div>
                  <p className="text-xs text-nowrap">
                    {page.price * 1000} reviews
                  </p>
                </div>
                <div className="hidden md:flex flex-col gap-1 ">
                  <h1>By {page.author}</h1>
                  <div className="flex gap-1 items-center">
                    <p>{page.created_at.toLocaleDateString()} </p>
                    <div className="size-1 rounded-full bg-white" />
                    <p>{page.total_time} HOURS</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
      <Footerbar />
    </main>
  );
}
