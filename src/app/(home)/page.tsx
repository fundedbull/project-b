import Navbar from "@ui/Navbar";
import { JetBrains_Mono, Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Footerbar from "@ui/Footer";
import InfiniteScrollText from "@/components/infinte-scroll-text";

const jb_mono = JetBrains_Mono({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`${jb_mono.className} relative min-h-screen overflow-hidden`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-[0%] -mt-10 md:mt-0 md:left-0 w-full h-full max-h-[80vh] md:max-h-[100vh] object-contain  -z-10 "
      >
        <source src="/Tier_1_BRIX_PAGE.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col h-full container mx-auto min-h-[60vh] md:min-h-[90vh]">
        <Navbar />

        <div className="flex flex-col items-start px-4 mt-0 md:mt-20">
          <h1 className="text-3xl md:text-6xl lg:w-3/5 uppercase mb-8 flex flex-col">
            The one stop shop for{" "}
            <span className="bg-linear-to-r from-primary-400 via-white via-40% to-60%  to-primary-400 bg-clip-text text-transparent">
              entrepreneurs and creators
            </span>
          </h1>

          <Link
            href="/waitlist"
            className="relative p-1 w-48 -mt-6 md:mt-0  md:w-64 text-center before:absolute before:inset-0 before:-z-10 before:bg-linear-to-r before:from-primary-400 before:to-green-400 before:rounded-full before:blur-sm"
          >
            <h1
              className={`bg-bg p-1 rounded-full font-semibold uppercase border-2 border-blue`}
            >
              Start for free
            </h1>
          </Link>
        </div>
      </div>
      <InfiniteScrollText />

      {/* <div className="relative flex flex-col p-4 md:p-0 md:grid md:grid-rows-2 md:grid-cols-2 gap-8 w-fit h-full container mx-auto  md:mt-40">
        <Image
          className="border-3 border-white rounded-xl"
          src="/BRIX_PAGE_MARKETPLACE_DESCRIPTION_2.png"
          alt="sign up"
          width={720}
          height={720}
        />
        <div className="relative flex flex-col gap-20 p-12">
          <div className="text-5xl font-medium ">
            <h1 className="bg-linear-to-r from-primary-400 to-green-400 bg-clip-text text-transparent ">
              Creating an Account
            </h1>
            <p>is simple and easy.</p>
          </div>
          <p className="text-2xl">
            Our Simple Design feels refreshing while also safeguarding your data
            with the best cybersecurity encryption with our Third Party Partner
            Clerk.
          </p>
          <Image
            className="absolute top-0 left-0 -z-10 hidden md:block"
            src="/acc.png"
            width={720}
            height={480}
            alt=""
          />
        </div>

        <div className="relative p-10 order-last md:order-none flex flex-col gap-20">
          <Image
            className="absolute top-0 left-0 -z-10 hidden md:block"
            src="/acc.png"
            width={720}
            height={480}
            alt=""
          />
          <div className="text-5xl font-medium ">
            <h1 className="bg-linear-to-r from-primary-400 to-green-400 bg-clip-text text-transparent ">
              The Process of Building
            </h1>
            <p>A BRIX is Simple and Easy.</p>
          </div>

          <p className="text-2xl">
            How it works is first you answer some questions such as What You
            Want To Name Your BRIX, and The Industry/Niche the BRIX will Serve..
            Our Servers will then Check To See if that Name is Available in that
            Industry.
          </p>
        </div>
        <Image
          className="border-3 border-black rounded-xl"
          src="/BUILD_A_BRIX_LAPTOP_IMAGE.png"
          alt="build"
          width={720}
          height={720}
        />
        <div className="hidden  absolute top-1/4 right-1/4  animate-[spin_30s_linear_infinite] -z-10">
          <div className="absolute -z-10 size-72 -translate-x-16 -translate-y-8 rounded-full bg-primary-400 blur-3xl"></div>

          <div className="absolute -z-10 size-72 translate-x-24 -translate-y-8 rounded-full bg-green-400 blur-3xl"></div>

          <div className="absolute -z-10 size-72 -translate-x-24 translate-y-16 rounded-full bg-purple-400 blur-3xl"></div>
        </div>
        <div className="hidden  absolute bottom-1/3 left-1/4  animate-[spin_30s_linear_infinite] -z-10">
          <div className="absolute -z-10 size-72 -translate-x-16 -translate-y-8 rounded-full bg-primary-400 blur-3xl"></div>

          <div className="absolute -z-10 size-72 translate-x-24 -translate-y-8 rounded-full bg-green-400 blur-3xl"></div>

          <div className="absolute -z-10 size-72 -translate-x-24 translate-y-16 rounded-full bg-purple-400 blur-3xl"></div>
        </div>
      </div> */}

      <div className="flex flex-col items-center px-4 mt-20 bg-[#0a0a14]">
        <h1 className="text-6xl font-bold bg-linear-to-r from-primary-400 via-white via-40% to-60%  to-primary-400 bg-clip-text text-transparent">
          How to Start with Brix
        </h1>

        <Image
          src="/BRIX_PAGE_STEPS_1-3_3.png"
          alt="Brix Logo"
          width={1000}
          height={1000}
        />
      </div>

      {/* <div className="flex flex-col items-center justify-center w-full container mx-auto gap-8 p-4">
        <h1 className="text-5xl md:text-6xl font-medium md:text-center">
          How we{" "}
          <span className="bg-linear-to-r from-primary-400 font-bold to-green-400 bg-clip-text text-transparent">
            Stack Against
          </span>{" "}
          our{" "}
          <span className="bg-linear-to-r from-primary-400 font-bold to-green-400 bg-clip-text text-transparent">
            Competitors
          </span>
          .
        </h1>
        <p className="text-xl md:text-2xl mt-4 md:text-center text-zinc-300">
          {
            "BRIX PAGE isn't just a Social Commerce Platform. It's a Streamlined Business Partner. When we said \"All In One\" we really meant that. That's why at BRIX we offer exclusive features other platforms have not integrated. We understand that being less means doing more in order to stand out."
          }
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-2">
          <Image
            className="row-span-2"
            src="/BRIX_PAGE_BRIX_PACKS_5.png"
            alt="Brix Logo"
            width={580}
            height={580}
          />
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/BRIX_PAGE_BRIX_PACKS_4.png"
              alt="Brix Logo"
              width={420}
              height={420}
            />
            <p className="text-xl md:text-2xl font-medium md:line-clamp-2 text-center">
              &quot;BRIX is the underdog in this story, but our advantage is
              knowing that we are&quot;
            </p>
          </div>
        </div>

        <Image
          className="hidden md:block"
          src="/Industry_Background_1.png"
          alt="graph"
          width={1080}
          height={420}
        />
      </div> */}

      <div className="flex flex-col items-center justify-center w-full container mx-auto gap-8 mt-20 p-4">
        <h1 className="text-5xl font-medium">
          <span
            className={` bg-linear-to-r from-primary-400 via-white via-40% to-60%  to-primary-400 bg-clip-text text-transparent`}
          >
            Exclusive Features
          </span>
        </h1>
        {/* <p className="text-2xl mt-4 md:text-center text-zinc-300">
          We have studied our competitors. Weighed the Pros and Cons. Performed
          survey&apos;s for feedback, and now we understand the pain points
          consumers and producers face. So when we started building BRIX PAGE we
          knew that we had to provide so much value that it was a no brainer for
          anyone to use our platform.
        </p> */}

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex rounded-[2rem] bg-[#1d1a26] text-white p-7 w-full md:w-1/3 border-8 border-white/10">
            <div>
              <Image
                className="h-[60px] w-[60px] rounded-[16px]"
                src={"/home-icons-2.png"}
                alt=""
                width={64}
                height={64}
              />
              <h3 className="pt-5 text-left text-xl text-primary-400">
                Networking
              </h3>
              <p
                className={`${manrope.className} py-4 text-left text-lg font-medium`}
              >
                Select Industry. Explain Task. Enter Cost. Find a Match.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#1d1a26] text-white p-7 w-full md:w-1/3 border-8 border-white/10">
            <div>
              <Image
                className="h-[60px] w-[60px] rounded-[16px]"
                src={"/home-icons-3.png"}
                alt=""
                width={64}
                height={64}
              />
              <h3 className="pt-5 text-left text-xl text-primary-400">
                Boosted BRIX
              </h3>
              <p
                className={`${manrope.className} py-4 text-left text-lg font-medium`}
              >
                Showcase BRIX Top Of Marketplace. Measure Performance of past
                BOOST Campaigns.
              </p>
            </div>
          </div>
          <div className="flex rounded-[2rem] bg-[#1d1a26] text-white p-7 w-full md:w-1/3 border-8 border-white/10">
            <div>
              <Image
                className="h-[60px] w-[60px] rounded-[16px]"
                src={"/home-icons-5.png"}
                alt=""
                width={64}
                height={64}
              />
              <h3 className="pt-5 text-left text-xl  text-primary-400">
                Automate Tasks
              </h3>
              <p
                className={`${manrope.className} py-4 text-left text-lg font-medium`}
              >
                Streamline Tasks Such as Messaging, Posting, & Boosting. You can
                start and stop Automations at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  mt-16">
        <h1 className="font-medium text-5xl bg-linear-to-r from-primary-400 via-white via-40% to-60%  to-primary-400 bg-clip-text text-transparent">
          Try PRO+ for $1/month
        </h1>
        <p className={`${manrope.className} my-4 text-xl`}>
          Start your BRIX&apos;s Three Month PRO+ Trial Today
        </p>
        <div className="mb-4 mt-4 w-fit">
          <form className="flex  gap-4  bg-neutral-700 rounded-full">
            <input
              className="rounded-full bg-neutral-700 px-4 py-3 font-semibold outline-hidden"
              placeholder="Your email address"
            />
            <div className="button-primary-gradient h-full p-2">
              <button className="w-full rounded-full bg-neutral-800 px-14 py-3 text-lg font-bold text-primary-400">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footerbar />
    </main>
  );
}
