import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import { JetBrains_Mono } from "next/font/google";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Pricing() {
  return (
    <div className="flex flex-col gap-8 bg-black">
      <Navbar />
      <h1
        className={`${jetBrainsMono.className} text-7xl border-b px-52 self-center`}
      >
        PRICING
      </h1>
      <div className="flex flex-row gap-4 self-center">
        <div className="relative w-[390px] h-[520px] ">
          <video
            className="absolute w-[390px] top-0 "
            src="/standard.mov"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="px-11 py-16">
            <div className="flex flex-col border-[#ffffff1a] border-2 p-2 mr-2 rounded-xl h-[394px] *:z-20">
              <h2
                className={`${jetBrainsMono.className} text-xl font-semibold text-white `}
              >
                Standard
              </h2>
              <h3
                className={`${jetBrainsMono.className} text-3xl font-semibold text-white py-2`}
              >
                Free
              </h3>
              <p>For entrepreneurs and creators getting started with BRIX</p>
              <ul className="pt-2 pb-3 w-full space-y-2 text-lg font-semibold *:flex *:items-center *:gap-2">
                <li>
                  <CheckIcon className="size-4" />
                  <p>Host up to one BRIX PAGE</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>2GB storage/audio</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>Analytic dashboard</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>Accept payments</p>
                </li>
              </ul>
              <div className="relative h-fit p-[2px] transition duration-300 ease-in-out before:absolute before:-inset-0 before:block before:rounded-full before:bg-gradient-to-r before:from-white before:to-white hover:scale-105 hover:cursor-pointer">
                <p className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold text-blue">
                  Buy Now
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-white">Powered by BRIX</p>
                <Image
                  className="self-center"
                  width="22"
                  height="22"
                  src={brix_logo}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[390px] h-[520px] ">
          <video
            className="absolute w-[390px] top-0 z-10"
            src="/pro.mov"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="px-11 py-16">
            <div className="flex flex-col border-[#ffffff1a] border-2 p-2 mr-2 rounded-xl h-[394px] *:z-20">
              <h2
                className={`${jetBrainsMono.className} text-xl font-semibold text-white`}
              >
                Pro
              </h2>
              <h3
                className={`${jetBrainsMono.className} text-3xl font-semibold text-white py-2`}
              >
                $7.99/monthly
              </h3>
              <p>For entrepreneurs and creators with steady growing audience</p>
              <ul className="pt-2 pb-3 w-full space-y-2 text-lg font-semibold *:flex *:items-center *:gap-2">
                <li>
                  <CheckIcon className="size-4" />
                  <p>5 BRIX PAGE server hosti...</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>50GB storage/audio</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>Advanced dashboard</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>Business Tools</p>
                </li>
              </ul>
              <div className="relative h-fit p-[2px] transition duration-300 ease-in-out before:absolute before:-inset-0 before:block before:rounded-full before:bg-gradient-to-r before:from-white before:to-white hover:scale-105 hover:cursor-pointer">
                <p className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold text-blue">
                  Buy Now
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-white">Powered by BRIX</p>
                <Image
                  className="self-center"
                  width="22"
                  height="22"
                  src={brix_logo}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[390px] h-[520px] ">
          <video
            className="absolute w-[390px] top-0 z-10"
            src="/pro_plus.mov"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="px-11 py-16">
            <div className="flex flex-col border-[#ffffff1a] border-2 p-2 mr-2 rounded-xl h-[394px] *:z-20">
              <h2
                className={`${jetBrainsMono.className} text-xl font-semibold text-white`}
              >
                Pro+
              </h2>
              <h3
                className={`${jetBrainsMono.className} text-3xl font-semibold text-white py-2`}
              >
                $14.99/monthly
              </h3>
              <p>For entrepreneurs and creators with a massive audience</p>
              <ul className="pt-2 pb-3 w-full space-y-2 text-lg font-semibold *:flex *:items-center *:gap-2">
                <li>
                  <CheckIcon className="size-4" />
                  <p>10 BRIX PAGE server host</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>100GB storage/audio</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>Free BRIX PAGE boosts</p>
                </li>
                <li>
                  <CheckIcon className="size-4" />
                  <p>Networking features</p>
                </li>
              </ul>
              <div className="relative h-fit p-[2px] transition duration-300 ease-in-out before:absolute before:-inset-0 before:block before:rounded-full before:bg-gradient-to-r before:from-white before:to-white hover:scale-105 hover:cursor-pointer">
                <p className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold text-blue">
                  Buy Now
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-white">Powered by BRIX</p>
                <Image
                  className="self-center"
                  width="22"
                  height="22"
                  src={brix_logo}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
