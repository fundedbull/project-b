import Navbar from "@ui/Navbar";
import marketplace from "/public/Alpha_Version_Home_Page.png";
import Image from "next/image";
import Footerbar from "@ui/Footer";

import grid_svg from "/public/grid.svg";
import tile_grid_svg from "/public/tile-grid.svg";
import panels_svg from "/public/panels.svg";

import { JetBrains_Mono, Inter } from "next/font/google";
import Link from "next/link";

const jb_mono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${jb_mono.className} flex flex-col gap-4 md:gap-8 container mx-auto`}
    >
      <Navbar />
      <h1 className="text-5xl md:text-6xl md:w-3/5 uppercase p-4">
        The one stop shop for{" "}
        <span className="bg-linear-to-r from-primary-400 via-secondary-200 via-50% to-secondary-600 bg-clip-text text-transparent">
          entrepreneurs and creators
        </span>
      </h1>
      <Link
        href="/waitlist"
        className="relative p-1 w-64 text-center mx-4  before:absolute before:inset-0 before:-z-10 before:bg-linear-to-r before:from-blue before:to-orange before:rounded-full before:blur-sm"
      >
        <h1
          className={`bg-background p-1 rounded-full font-semibold uppercase border-2 border-blue`}
        >
          Start for free
        </h1>
      </Link>
      <div className="flex gap-8 md:gap-4 flex-col md:flex-row p-4 md:p-0 mt-48">
        <div className="w-full h-full relative flex items-center justify-center overflow-clip">
          <Image
            className="p-1"
            width={1000}
            height={600}
            src={marketplace}
            alt="marketplace image"
          />
          <div className="absolute -z-10 rounded-full  size-[1000px] bg-linear-to-r blur-2xl from-green-600 via-15% via-[#155dfc] to-red-600 animate-spin" />
        </div>

        <section className="flex flex-col gap-8 md:gap-24 text-left w-full h-full">
          <article className="border border-white flex flex-col p-2 w-80 relative bg-background before:absolute before:inset-0 before:-z-10 before:bg-linear-to-r before:from-blue before:to-orange  before:blur-sm">
            <Image
              src={grid_svg}
              width={100}
              height={100}
              className="size-8"
              alt="decoration"
            />
            <p className={`${inter.className} text-2xl pt-2`}>
              Set Up A Store Page
            </p>
            <p className={`${inter.className}`}>
              Click Build A Brix to get started on making your Brix Page.
            </p>
          </article>
          <article className="border border-white flex flex-col p-2 w-80 self-end relative bg-background before:absolute before:inset-0 before:-z-10 before:bg-linear-to-r before:from-blue before:to-orange  before:blur-sm">
            <Image
              src={tile_grid_svg}
              width={100}
              height={100}
              className="size-8"
              alt="decoration"
            />
            <p className={`${inter.className} text-2xl  pt-4`}>
              List it on our marketplace
            </p>
            <p className={`${inter.className}`}>
              Customize your Brix and list it on our marketplace and start
              selling.
            </p>
          </article>
          <article className="border border-white flex flex-col p-2 w-80 relative bg-background before:absolute before:inset-0 before:-z-10 before:bg-linear-to-r before:from-blue before:to-orange  before:blur-sm">
            <Image
              src={panels_svg}
              width={100}
              height={100}
              className="size-8"
              alt="decoration"
            />
            <p className={`${inter.className} text-2xl  pt-2`}>
              Accept Payments
            </p>
            <p className={`${inter.className}`}>
              Via PayPal, Square, Stripe, Visa, Mastercard, and Crypto.
            </p>
          </article>
        </section>
      </div>

      <Footerbar />
    </main>
  );
}
