"use client";
import { useState, useEffect, ReactNode } from "react";
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
      <div className="bg-background p-6 rounded-lg shadow-lg text-center relative w-96">
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
              Join our waitlist for early access
            </h1>
          </div>

          {/* Waitlist Button */}
          <button
            onClick={() => setWaitlistOpen(true)}
            className={`${jb_mono.className} uppercase px-2 p-1 rounded-full border-blue border-2 bg-background text-2xl relative before:rounded-full before:absolute before:bg-gradient-to-tr before:to-blue before:from-orange before:inset-0 before:blur before:-z-10`}
          >
            Join the Waitlist
          </button>

          <div className="hidden md:block">
            <iframe
              width="720"
              height="560"
              src="https://www.youtube.com/embed/vm5ESistenc"
              title="BRIX"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="block md:hidden">
            <iframe
              width="360"
              height="520"
              src="https://www.youtube.com/embed/vm5ESistenc"
              title="BRIX"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className={`${inter.className} text-2xl  text-center`}>
            If you want to become an investor or join the team
          </p>

          {/* Investor & Careers Buttons */}
          <div className="flex flex-col md:flex-row gap-4 ">
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
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="border p-2 rounded w-full mb-4"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setWaitlistOpen(false)}
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
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                setInvestorOpen(false);
              }}
            >
              {/* Name Input */}
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded w-full mb-4"
                required
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded w-full mb-4"
                required
              />

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="border p-2 rounded w-full mb-4"
                pattern="^\+?[1-9]\d{1,14}$"
                title="Please enter a valid phone number"
                required
              />

              {/* Amount to Invest Input */}
              <input
                type="number"
                placeholder="Amount You Want to Invest"
                className="border p-2 rounded w-full mb-4"
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
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setCareersOpen(false)}
            >
              Apply
            </button>
          </Popup>
        </article>
      </section>
    </main>
  );
}
