"use client";
import { useState, useEffect, ReactNode, useActionState } from "react";
import {
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  TicketIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/16/solid";
import Navbar from "@ui/Navbar";
import { JetBrains_Mono, Inter } from "next/font/google";
import Link from "next/link";
import { joinWaitlist, submitInvestorInquiry } from "../action";

const jb_mono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// Type for Popup props
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

// Popup Component
const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="bg-background border-blue border-2 p-6 rounded-lg shadow-lg text-center relative w-96">
        <div className="bg-gradient-to-r from-blue to-orange size-32 inset-0  -z-10  blur h-full w-96 absolute" />
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default function WaitList() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, waitAction, isWaitPending] = useActionState(joinWaitlist, null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_state, investorAction, isInvestorPending] = useActionState(
    submitInvestorInquiry,
    null
  );

  return (
    <main className="min-w-screen min-h-screen flex flex-col gap-4 uppercase">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <section className="flex flex-1">
        <aside className="w-[12%] border-r border-[#0F0F1E] py-4 px-2 hidden md:block">
          <ul
            className={`${jb_mono.className} flex flex-col font-bold text-xl h-full gap-8`}
          >
            <li className="flex gap-1 items-center">
              <BookmarkIcon className="size-6" />
              <Link href="/waitlist">FAVORITES</Link>
            </li>
            <li className="flex gap-1 items-center">
              <ViewfinderCircleIcon className="size-6" />
              <Link href="/waitlist">BOUNTIES</Link>
            </li>
            <li className="flex gap-1 items-center">
              <TicketIcon className="size-6" />
              <Link href="/waitlist">POINTS SHOP</Link>
            </li>
            <li className="flex gap-1 items-center">
              <ChatBubbleLeftRightIcon className="size-6" />
              <Link href="/waitlist">CONNECT</Link>
            </li>
            <li className="flex gap-1 items-center">
              <PresentationChartLineIcon className="size-6" />
              <Link href="/waitlist">DASHBOARD</Link>
            </li>
            <li className="flex gap-1 items-center">
              <RocketLaunchIcon className="size-6" />
              <Link href="/waitlist">BOOSTING</Link>
            </li>
            <li className="flex gap-1 items-center">
              <Square3Stack3DIcon className="size-6" />
              <Link href="/waitlist">COURSES</Link>
            </li>
            <li className="flex gap-1 items-center">
              <QuestionMarkCircleIcon className="size-6" />
              <Link href="/waitlist">FAQS</Link>
            </li>
            <li className="flex gap-1 items-center">
              <LightBulbIcon className="size-6" />
              <Link href="/waitlist">FEEDBACK</Link>
            </li>
            <li
              className={`mt-auto flex flex-col gap-1 ${inter.className} text-zinc-400 uppercase text-sm`}
            >
              <p>
                People on <span className="text-orange">Waitlist</span>
              </p>
              <p className="border border-[#ffffffa0] rounded p-1 text-blue w-full text-center">
                564
              </p>
            </li>
            <li className="flex gap-1 items-center">
              <Cog6ToothIcon className="size-6" />
              <Link href="/waitlist">SETTINGS</Link>
            </li>
          </ul>
        </aside>
        <article className="w-full flex flex-col items-center mt-16 gap-16">
          <div className="text-center">
            <h1 className={`${jb_mono.className} text-4xl md:text-6xl`}>
              BRIX is currently under construction
            </h1>
            <h1 className={`${jb_mono.className} text-4xl md:text-6xl`}>
              <span className="bg-gradient-to-r from-primary-400 via-secondary-200 via-50% to-secondary-600 bg-clip-text text-transparent">
                Join our waitlist for early access
              </span>
            </h1>
          </div>

          {/* Waitlist Button */}
          <button
            onClick={() => setWaitlistOpen(true)}
            className={`${jb_mono.className} uppercase px-2 p-1 rounded-full border-blue border-2 bg-background text-2xl relative before:rounded-full before:absolute before:bg-gradient-to-tr before:to-blue before:from-orange before:inset-0 before:blur before:-z-10`}
          >
            Join the Waitlist
          </button>

          <video className="md:mx-4 h-[500px]" controls>
            <source
              src="https://ntdvovqz4e.ufs.sh/f/cAY8TOuNYGL6CxlPNVDpMKE93hB45JYuVnQ1ZkoiT7jaUtxA"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="space-y-4">
            <p className={`${inter.className} text-2xl  text-center`}>
              If you want to become an{" "}
              <span className="bg-gradient-to-r from-primary-400 via-secondary-200 via-50% to-secondary-600 bg-clip-text text-transparent">
                investor or join the team
              </span>
            </p>

            <p className={`${inter.className} text-base  text-center`}>
              Click below to get started.
            </p>
          </div>

          {/* Investor & Careers Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pb-10">
            <button
              onClick={() => setInvestorOpen(true)}
              className={`${jb_mono.className} uppercase px-2 p-1 w-64 rounded-full border-orange border-2 bg-background text-2xl relative before:rounded-full before:absolute before:bg-gradient-to-tr before:to-blue before:from-orange before:inset-0 before:blur before:-z-10`}
            >
              Investor
            </button>
            <button
              onClick={() => setCareersOpen(true)}
              className={`${jb_mono.className} uppercase px-2 p-1 w-64 rounded-full border-orange border-2 bg-background text-2xl relative before:rounded-full before:absolute before:bg-gradient-to-tr before:to-blue before:from-orange before:inset-0 before:blur before:-z-10`}
            >
              Careers
            </button>
          </div>

          {/* Popups */}
          <Popup
            isOpen={waitlistOpen}
            onClose={() => setWaitlistOpen(false)}
            title="Join the Waitlist"
          >
            <p className="text-lg mb-4">
              Enter your email to get early access perks.
            </p>
            <form action={waitAction}>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email"
                className="border p-2 rounded w-full mb-4 text-black"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
                disabled={isWaitPending}
              >
                Submit
              </button>
            </form>
          </Popup>

          <Popup
            isOpen={investorOpen}
            onClose={() => setInvestorOpen(false)}
            title="Investor Inquiry"
          >
            <p className="text-lg mb-4">
              Please provide your details and the amount you wish to invest.
            </p>

            {/* Form Start */}
            <form className="flex flex-col gap-4" action={investorAction}>
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border p-2 rounded w-full mb-4 text-black"
                required
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border p-2 rounded w-full mb-4 text-black"
                required
              />

              {/* Phone Number Input */}
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="border p-2 rounded w-full mb-4 text-black"
                title="Please enter a valid phone number"
                required
              />

              {/* Amount to Invest Input */}
              <input
                type="number"
                name="amount"
                placeholder="Amount You Want to Invest"
                className="border p-2 rounded w-full mb-4 text-black"
                min="0"
                step="any"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
            {/* Form End */}
          </Popup>

          <Popup
            isOpen={careersOpen}
            onClose={() => setCareersOpen(false)}
            title="Join the Team"
          >
            <p className="text-lg mb-4">
              Looking for opportunities? Apply now!
            </p>
            <Link
              href={"https://www.linkedin.com/in/michael-rosas-32ba71330/"}
              className="border border-[#ffffffa0] rounded p-1 text-blue w-full text-center"
            >
              Apply
            </Link>
          </Popup>
        </article>
      </section>
    </main>
  );
}
