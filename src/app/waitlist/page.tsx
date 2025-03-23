"use client";
import { useState, useEffect, ReactNode, useActionState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { joinWaitlist } from "../action";
import Image from "next/image";
import macbook_view from "/public/HALF_BUILT_BRIDGES_2.png";
import iphone_view from "/public/HALF_BUILT_BRIDGES_3.png";
import accept_card from "/public/ACCEPT_PAYMENTS.png";
import list_card from "/public/LIST_MARKET.png";
import setup_card from "/public/SETUP.png";

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
      <div className="bg-background border-blue border-2 p-6 rounded-lg shadow-lg text-center relative w-96">
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, waitAction, isWaitPending] = useActionState(joinWaitlist, null);

  return (
    <main className="min-w-screen min-h-screen flex flex-col gap-4 uppercase">
      <section className="flex flex-1">
        <article className="w-full flex flex-col items-center mt-16 gap-16">
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

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out touch-pan-x"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                const startX = touch.clientX;

                const handleTouchMove = (e: TouchEvent) => {
                  const touch = e.touches[0];
                  const diff = startX - touch.clientX;

                  if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
                    } else {
                      setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
                    }
                    document.removeEventListener("touchmove", handleTouchMove);
                  }
                };

                document.addEventListener("touchmove", handleTouchMove);
                document.addEventListener(
                  "touchend",
                  () => {
                    document.removeEventListener("touchmove", handleTouchMove);
                  },
                  { once: true }
                );
              }}
            >
              <div className="w-full shrink-0">
                <Image
                  src={setup_card}
                  width={1600}
                  height={1200}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full shrink-0">
                <Image
                  src={list_card}
                  width={1600}
                  height={1200}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full shrink-0">
                <Image
                  src={accept_card}
                  width={1600}
                  height={1200}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-r md:block hidden"
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
              }
            >
              ←
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-l md:block hidden"
              onClick={() =>
                setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
              }
            >
              →
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === dot ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(dot)}
                />
              ))}
            </div>
          </div>

          <h1 className={`${jb_mono.className} text-4xl md:text-6xl`}>
            Gain Access To
          </h1>
          {/* Advance Analytics, Marketing Tools, Automations */}

          <div className="flex flex-row gap-4 items-center justify-center overflow-x-scroll md:overflow-auto w-full ml-4">
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
          </div>

          <Image src={iphone_view} width={1920} height={1080} alt="" />

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
