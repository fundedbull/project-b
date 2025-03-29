import Navbar from "@ui/Navbar";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jb_mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${jb_mono.className} relative min-h-screen`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-contain md:object-cover -z-10"
      >
        <source
          src="/BUILD_A_BRIX_QUESTIONS_STEP_BY_STEP_1.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex flex-col container mx-auto">
        <Navbar />

        <div className="flex flex-col items-start px-4 mt-10 md:mt-32">
          <h1 className="text-4xl md:text-6xl lg:w-3/5 uppercase mb-8">
            The one stop shop for{" "}
            <span className="bg-linear-to-r from-primary-400  to-green-400 bg-clip-text text-transparent">
              entrepreneurs and creators
            </span>
          </h1>

          <Link
            href="/waitlist"
            className="relative p-1 w-64 text-center before:absolute before:inset-0 before:-z-10 before:bg-linear-to-r before:from-blue before:to-orange before:rounded-full before:blur-sm"
          >
            <h1
              className={`bg-bg p-1 rounded-full font-semibold uppercase border-2 border-blue`}
            >
              Start for free
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
