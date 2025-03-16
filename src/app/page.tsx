import Navbar from "@ui/Navbar";
import marketplace from "/public/Alpha_Version_Home_Page.png";
import setupcard from "/public/accept_payments.png";
import storepage from "/public/store_page.png";
import marketplace_card from "/public/marketplace_card.png";
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
      className={`${jb_mono.className} flex flex-col gap-4 md:gap-8 container mx-auto `}
    >
      <Navbar />
      <video
        className="absolute max-w-screen-2xl min-h-screen top-0 -z-10"
        src="/hero.webm"
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <Image
        className="absolute top-[51%] md:w-[78%]  lg:w-[64%] xl:w-[32.02%]  rounded-xl h-[500px]"
        width={1000}
        height={600}
        src={marketplace}
        alt="marketplace image"
      />
      <h1 className="text-5xl md:text-6xl md:w-3/5 uppercase p-4">
        The one stop shop for{" "}
        <span className="bg-gradient-to-r from-primary-400 via-secondary-200 via-50% to-secondary-600 bg-clip-text text-transparent">
          entrepreneurs and creators
        </span>
      </h1>
      <Link
        href="/waitlist"
        className="relative p-1 w-64 text-center mx-4  before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue before:to-orange before:rounded-full before:blur"
      >
        <h1
          className={`bg-background p-1 rounded-full font-semibold uppercase border-2 border-blue`}
        >
          Start for free
        </h1>
      </Link>
      {/* <div className="flex gap-8 md:gap-4 flex-col md:flex-row p-4 md:p-0 mt-48">
        <div className="w-full h-full relative flex items-center justify-center overflow-clip">
          <Image
            className="p-1"
            width={1000}
            height={600}
            src={marketplace}
            alt="marketplace image"
          />
          <div className="absolute -z-10 rounded-full  size-[1000px] bg-gradient-to-r blur-2xl from-green-600 via-15% via-[#155dfc] to-red-600 animate-spin" />
        </div>

        <section className="flex flex-col gap-8 md:gap-0 text-left w-full h-full">
          <Image
            className="p-1 w-80 h-96"
            width={1000}
            height={600}
            src={storepage}
            alt="marketplace image"
          />
          <Image
            className="p-1 w-80 h-96 ml-auto"
            width={1000}
            height={600}
            src={marketplace_card}
            alt="marketplace image"
          />
          <Image
            className="p-1 w-80 h-96"
            width={1000}
            height={600}
            src={setupcard}
            alt="marketplace image"
          />
        </section>
      </div> */}

      {/* <Footerbar /> */}
    </main>
  );
}
