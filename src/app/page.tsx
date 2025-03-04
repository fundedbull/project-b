import Navbar from "@ui/Navbar";
import marketplace from "/public/Alpha_Version_Home_Page.png";
import Image from "next/image";
import Footerbar from "@ui/Footer";

import { JetBrains_Mono, Inter } from "next/font/google";
import Link from "next/link";
const jb_mono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${jb_mono.className} flex flex-col gap-8 container mx-auto`}
    >
      <Navbar />
      <h1 className="text-6xl w-3/5 uppercase p-4">
        The all in one stop shop for{" "}
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
      <div className="flex flex-row">
        <Image
          className=" mx-4"
          width={1000}
          height={600}
          src={marketplace}
          alt="marketplace image"
        />
        <section className="flex flex-col gap-24 text-left w-full h-full">
          <article className="border border-white flex flex-col p-2 w-80 relative bg-background before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue before:to-orange  before:blur">
            <h1 className="px-4 py-2 w-fit h-fit bg-blue text-white font-bold text-2xl">
              1
            </h1>
            <p className={`${inter.className} text-2xl`}>Set Up A Store Page</p>
          </article>
          <article className="border border-white flex flex-col p-2 w-80 self-end relative bg-background before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue before:to-orange  before:blur">
            <h1 className="px-4 py-2 w-fit h-fit bg-blue text-white font-bold text-2xl">
              2
            </h1>
            <p className={`${inter.className} text-2xl`}>
              List it on our marketplace
            </p>
          </article>
          <article className="border border-white flex flex-col p-2 w-80 relative bg-background before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue before:to-orange  before:blur">
            <h1 className="px-4 py-2 w-fit h-fit bg-blue text-white font-bold text-2xl">
              3
            </h1>
            <p className={`${inter.className} text-2xl`}>Accept Payments</p>
          </article>
        </section>
      </div>

      <Footerbar />
    </main>
  );
}
