"use client";
import { useState, useEffect, ReactNode, useActionState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { joinWaitlist } from "@/server/action";
import Image from "next/image";
import macbook_view from "/public/HALF_BUILT_BRIDGES_2.png";

import CardStack from "@/components/card-stack";

const jb_mono = JetBrains_Mono({ subsets: ["latin"] });
//const inter = Inter({ subsets: ["latin"] });

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
      <div className="bg-bg border-blue border-2 p-6 rounded-lg shadow-lg text-center relative w-96">
        <div className="bg-linear-to-r from-blue to-orange size-32 inset-0  -z-10  blur-sm h-full w-96 absolute" />
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, waitAction, isWaitPending] = useActionState(joinWaitlist, null);

  return (
    <main className=" flex flex-col gap-4 uppercase">
      <section className="flex flex-1">
        <article className="w-full flex flex-col items-center mt-16 gap-4">
          <h1
            className={`${jb_mono.className} text-4xl md:text-6xl bg-linear-to-r from-primary-400 via-secondary-200 via-50% to-secondary-600 bg-clip-text text-transparent`}
          >
            Meet BRIX PAGE
          </h1>

          <Image src={macbook_view} width={1920} height={1080} alt="" />
          <div className="space-y-4">
            <h1
              className={`${jb_mono.className} text-4xl md:text-6xl text-center`}
            >
              The one stop shop for entrepreneurs and creators
            </h1>
            <p className="text-zinc-400 text-center">Where you can</p>
          </div>

          <CardStack
            images={["/SETUP.png", "/LIST_MARKET.png", "/ACCEPT_PAYMENTS.png"]}
          />

          <Image
            className="w-[630px]"
            src={"/what-seperates-us.png"}
            width={420}
            height={420}
            alt=""
          />

          {/* <h1 className={`${jb_mono.className} text-4xl md:text-6xl`}>
            Gain Access To
          </h1> */}
          {/* Advance Analytics, Marketing Tools, Automations */}

          {/* <div className="flex flex-row gap-4 items-center justify-center overflow-x-scroll md:overflow-auto w-full ml-4">
            {["Advance Analytics", "Marketing Tools", "Automations"].map(
              (text) => (
                <button
                  key={text}
                  className="border font-bold text-white px-4 py-2 rounded-sm text-nowrap"
                >
                  {text}
                </button>
              )
            )}
          </div> */}

          {/* <Image
            className="w-[1020px] h-auto"
            src={"/BRIX_PAGE_PAPER_FEATURES_5.png"}
            width={1920}
            height={1080}
            alt=""
          /> */}

          {/* <section className="grid grid-cols-3 grid-rows-4 gap-4 max-h-xl">
            <div className="border border-white rounded-lg" />
            <div className="border border-white rounded-lg row-span-3 flex flex-col items-center">
              <h1>Points Shop</h1>
            </div>
            <div className="border border-white rounded-lg row-span-2">
              <h1>Networking</h1>
              <p>
                Connect and Hire Skilled Individuals in Specific Niches for any
                task or projects.
              </p>
            </div>
            <div className="border border-white rounded-lg">
              <h1>events</h1>
            </div>
            <div className="border border-white rounded-lg row-span-2">
              <h1>Earn Rewards</h1>
              <p>
                That can be spent in our Points Shop for Boosting, & PRO Plans.
              </p>
            </div>
            <div className="border border-white rounded-lg">
              <h1>events</h1>
            </div>
            <div className="border border-white rounded-lg">
              <h1>events</h1>
            </div>
            <div className="border border-white rounded-lg">
              <h1>events</h1>
            </div>
          </section> */}

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
                className="border p-2 rounded-sm w-full mb-4 text-black"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-sm"
                type="submit"
                disabled={isWaitPending}
              >
                Submit
              </button>
            </form>
          </Popup>
        </article>
      </section>
    </main>
  );
}
