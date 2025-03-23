import { CheckIcon } from "@heroicons/react/24/solid";
import { JetBrains_Mono } from "next/font/google";
const jb_mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Community() {
  return (
    <main className="flex flex-col p-4 gap-4">
      <h1 className={`${jb_mono.className} font-bold text-6xl text-center`}>
        XM FITNESS
      </h1>
      <article className="border p-4 text-lg flex flex-col gap-2">
        <ul className={`${jb_mono.className} flex items-center gap-1 border-b`}>
          <li>
            <h1>Community</h1>
          </li>
          <li className="w-[2px] h-4 bg-white" />
          <li>
            <h1>Updates</h1>
          </li>
        </ul>
        <div className="flex gap-1">
          <CheckIcon className="fill-blue size-6" />
          <h1 className="text-wrap">
            On December 17th we will be hosting a free fitness masterclass.
            Click ths link to be invited.{" "}
            <span className="underline text-orange ">XM FITNESS Event</span>
          </h1>
        </div>
        <div className="flex gap-1">
          <CheckIcon className="fill-blue size-6" />
          <h1 className="text-wrap">
            Free meal prep guiude available to download.{" "}
            <span className="underline text-orange cursor-pointer">
              XM FITNESS Meal Guides
            </span>
          </h1>
        </div>
      </article>
    </main>
  );
}
