"use client";

//import Image from "next/image";
import Navbar from "@ui/Navbar";

import WaitlistSvg from "@/components/waitlist-svg";
import { joinWaitlist, getWaitlistCount } from "@/server/action";
import { JetBrains_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import { useActionState } from "react";
import Image from "next/image";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

const jb_mono = JetBrains_Mono({ subsets: ["latin"] });

export default function WaitList() {
  const [showPopup, setShowPopup] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [token, setToken] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, waitAction, isWaitPending] = useActionState(joinWaitlist, null);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      const count = await getWaitlistCount();
      setWaitlistCount(count);
    };
    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (formData: FormData) => {
    if (!token) {
      alert("Please wait for ReCaptcha verification");
      return;
    }

    formData.append("recaptchaToken", token);
    await waitAction(formData);
    setFormSuccess(true);

    const newCount = waitlistCount + 1;
    setWaitlistCount(newCount);
    setTimeout(() => {
      setShowPopup(true);
    }, 1000);
  };

  const handleReCaptchaVerify = (token: string) => {
    setToken(token);
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <main>
        <Navbar />
        <section className="flex flex-col items-center h-screen w-full gap-16 bg-[#d1d3d7] relative overflow-clip md:overflow-auto">
          <GoogleReCaptcha onVerify={handleReCaptchaVerify} />

          <h1
            className={`${jb_mono.className} text-4xl md:text-6xl mt-16 font-bold z-10 text-center `}
          >
            <span className="text-black uppercase">
              Join the waitlist for early access
            </span>
          </h1>

          <div className="text-center z-10">
            <p className={`${jb_mono.className} text-lg text-black mb-4`}>
              {waitlistCount} people have already joined!
            </p>
            <form
              action={handleSubmit}
              className="flex items-center justify-center gap-4"
            >
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email"
                className="border-4 border-zinc-900 p-2 w-full md:w-96 text-black rounded-full"
              />
              <button
                className={`${
                  formSuccess ? "bg-green-600" : "bg-zinc-900"
                } text-white px-4 py-2 rounded-sm`}
                type="submit"
                disabled={isWaitPending || !token}
              >
                {formSuccess ? "Success!" : "Submit"}
              </button>
            </form>
          </div>

          <WaitlistSvg />

          {showPopup && (
            <div className="fixed text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 ">
              <a
                href="https://kickstarter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="self-center w-full"
                  src="/BRIX_PAGE_BACk_ON_KICKSTARTER.png"
                  alt="Kickstarter"
                  width={1000}
                  height={1000}
                />
              </a>

              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          )}
        </section>
      </main>
    </GoogleReCaptchaProvider>
  );
}
