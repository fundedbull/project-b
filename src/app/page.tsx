import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  TicketIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import { JetBrains_Mono } from "next/font/google";
import { BrixCard } from "@/components/BrixCard";
import Navbar from "@ui/Navbar";

const jb_mono = JetBrains_Mono({
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
];

export default function Home() {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-8">
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
            <li className="flex gap-1 items-center mt-auto">
              <AdjustmentsHorizontalIcon className="size-6" />
              <Link href="/">SETTINGS</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className={`${jb_mono.className} font-bold text-2xl grid grid-rows-2 grid-cols-7 h-fit w-full gap-4`}
          >
            <Link href="/">ALL</Link>
            <Link href="/">BUSINESS</Link>
            <Link href="/">FITNESS</Link>
            <Link href="/">FINANCE</Link>
            <Link href="/">TECH</Link>
            <Link href="/">SALES</Link>
            <form className="w-48">
              <input
                placeholder="search"
                className="bg-transparent border border-[#ffffff0a] w-full  rounded-lg"
              />
            </form>
            <Link
              className="bg-[#D1D1D1] border border-white text-[#59240A] rounded-lg px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST POPULAR
            </Link>
            <Link
              className="bg-[#D1D1D1] border border-white text-[#59240A] rounded-lg px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST MEMBERS
            </Link>
            <Link
              className="bg-[#D1D1D1] border border-white text-[#59240A] rounded-lg px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST REVIEWS
            </Link>
            <Link
              className="bg-[#D1D1D1] border border-white text-[#59240A] rounded-lg px-2 py-1 font-bold text-center"
              href="/"
            >
              MOST PROFIT
            </Link>
            <Link
              className="bg-[#D1D1D1] border border-white text-[#59240A] rounded-lg px-2 py-1 font-bold text-center"
              href="/"
            >
              FREE BRIX
            </Link>
            <Link
              className="bg-[#D1D1D1] border border-white text-[#59240A] rounded-lg px-2 py-1 font-bold text-center"
              href="/"
            >
              NEW BRIX
            </Link>
          </div>
          <div className="grid grid-rows-3 grid-cols-3 gap-4 mt-8">
            {data.map((page, idx) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col items-center gap-3">
//         {/* navbar */}
//         <nav className="border-b-2 p-1 w-full">
//           <ul className="flex flex-row text-5xl items-center justify-between uppercase">
//             {/* <li><Link href="/all">All</Link></li> */}
//             <li>
//               <Text size="large">All</Text>
//             </li>
//             <li>
//               <Text size="large">Business</Text>
//             </li>
//             <li>
//               <Text size="large">Fitness</Text>
//             </li>
//             <li>
//               <Text size="large">Finance</Text>
//             </li>
//             <li>
//               <Text size="large">Tech</Text>
//             </li>
//             <li>
//               <Text size="large">Sales</Text>
//             </li>
//             <li className="flex gap-2 items-center border-2 border-white rounded-full py-1 px-4 text-neutral-400">
//               <MagnifyingGlassIcon className="size-6" />
//               <Text size="large">Search here</Text>
//             </li>
//           </ul>
//         </nav>
//         {/* filter list */}
//         <ul className="flex flex-row text-2xl w-full justify-between items-center gap-4">
//           {/* make a css class for this */}
//           <li className="bg-white transition duration-300 ease-in hover:bg-primary-400 text-black rounded-full p-2 pb-2  w-full text-center">
//             <Text intent={"ui"}>Most Popular</Text>
//           </li>
//           <li className="bg-white rounded-full p-2 pb-2 text-black w-full text-center">
//             <Text intent={"ui"}>Most Members</Text>
//           </li>
//           <li className="bg-white rounded-full p-2 pb-2 text-black w-full text-center">
//             <Text intent={"ui"}>Most Reviews</Text>
//           </li>

//           <li className="bg-white rounded-full p-2 pb-2 text-black w-full text-center">
//             <Text intent={"ui"}>Most Money Made</Text>
//           </li>
//           <li className="bg-white rounded-full p-2 pb-2 text-black w-full text-center">
//             <Text intent={"ui"}>Free Brix&apos;s</Text>
//           </li>

//           <li className="bg-white rounded-full p-2 pb-2 text-black w-full text-center">
//             <Text intent={"ui"}>New Brix&apos;s</Text>
//           </li>
//         </ul>
//         {/* featured Brix pages */}

//         {/* Yes Set up an eslint ;-; */}
//         <div className="grid grid-cols-3 w-full gap-4">
//           {data.map((brix, idx) => (
//             <article
//               key={idx}
//               className={
//                 brix.boosted_member
//                   ? "relative bg-neutral-800 h-full border-2 border-white rounded-xl p-2 flex flex-col gap-4 uppercase  before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-primary-400 before:to-secondary-400 before:blur"
//                   : "h-full border-2 border-white rounded-xl p-2 flex flex-col gap-4 uppercase"
//               }
//             >
//               <div className="flex justify-between items-center">
//                 <div className="flex flex-row items-center gap-2">
//                   <Text>
//                     {brix.boosted_member ? "BOOSTED BRIX" : "BRIX PAGE"}
//                   </Text>
//                   <Image
//                     src={brix_logo}
//                     width={20}
//                     height={20}
//                     alt="brand logo"
//                   />
//                 </div>
//                 {brix.boosted_member ? (
//                   <div className="btn-primary">
//                     <div className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold">
//                       <Text intent={"ui"} size="small">
//                         ${brix.price} / {brix.rate}
//                       </Text>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="bg-primary-400 text-black flex justify-center items-center h-fit px-2 py-1 rounded-full">
//                     <Text size="small">
//                       ${brix.price} / {brix.rate}
//                     </Text>
//                   </div>
//                 )}
//               </div>
//               <div className="flex gap-1 items-center">
//                 <Image
//                   src={logo}
//                   className="rounded-full border-2 border-[#fffffffa]"
//                   width={42}
//                   height={42}
//                   alt="brand logo"
//                 />
//                 <div className="flex flex-col">
//                   <Text intent={"heading"}>{brix.author}</Text>
//                   <Text intent={"heading"} size={"small"}>
//                     <span className="text-neutral-400">
//                       Brix Ranking #{brix.ranking}
//                     </span>
//                   </Text>
//                 </div>
//               </div>
//               <Text intent={"heading"}>{brix.course}</Text>

//               <div className="border-t border-[#fffffffa] w-full flex items-center justify-between">
//                 <div className="mt-1 flex flex-col gap-1 items-center">
//                   <Text size="small">
//                     <span className="text-neutral-400">
//                       Time spent by users
//                     </span>
//                   </Text>
//                   <Text size="small">
//                     <span className="text-neutral-400">
//                       {brix.total_time} minutes
//                     </span>
//                   </Text>
//                   <div className="flex">
//                     {Array.from({ length: Math.ceil(brix.rating) }).map((i) => (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         key={i as unknown as number}
//                         className="size-6 stroke-secondary-400 fill-secondary-400"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-1 items-center">
//                   <Text size={"small"}>
//                     <span className="text-neutral-400">DATE CREATED</span>
//                   </Text>
//                   <Text size={"small"}>
//                     <span className="text-neutral-400">
//                       {brix.created_at.toLocaleDateString()}
//                     </span>
//                   </Text>
//                   <Text size={"small"}>
//                     <span className="text-neutral-400">
//                       {brix.total_users} Joined
//                     </span>
//                   </Text>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//       <div className="flex items-center justify-center my-16">
//         <CardSlideShow />
//       </div>
//     </>
//   );
// }
