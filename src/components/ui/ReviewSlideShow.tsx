import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import { JetBrains_Mono, Inter } from "next/font/google";
const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const ReviewSlideShow = () => {
  return (
    <article className="relative w-80 h-96 md:w-5/6 md:h-64 border border-white">
      {/* Navigation Buttons */}
      <button className="border border-white rounded-full p-5 absolute w-fit h-fit top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background">
        <ArrowLeftIcon className="size-4 " />
      </button>
      <button className="border border-white rounded-full p-5 absolute w-fit h-fit top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-background">
        <ArrowRightIcon className="size-4 " />
      </button>

      <div className="p-8 flex flex-col h-full justify-between">
        <div>
          <h1 className={`${jb_mono.className} font-bold text-2xl`}>Heading</h1>
          <p
            className={`${inter.className} font-semibold text-zinc-300 h-[72px] overflow-hidden text-ellipsis line-clamp-3`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius, nunc at tincidunt laoreet, turpis sem dignissim purus, eget
            malesuada odio nisl nec justo. Fusce sit amet urna nec nulla
            ullamcorper vehicula. In hac habitasse platea dictumst. Etiam nec
            metus euismod, convallis ex in, tristique felis. A truly wonderful
            experience!
          </p>
        </div>

        <div className="flex flex-row justify-between items-end flex-wrap gap-4">
          <div className="flex gap-2 items-center">
            <div className="size-12 bg-blue rounded-full" />
            <div className="flex flex-col">
              <p className={`${inter.className}`}>User</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((v) => (
                  <StarIcon key={v} className="size-6 fill-orange" />
                ))}
              </div>
            </div>
          </div>
          <p>Created at 2/14/25</p>
        </div>
      </div>
    </article>
  );
};
