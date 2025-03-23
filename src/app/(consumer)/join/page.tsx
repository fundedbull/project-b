import { PlayIcon } from "@heroicons/react/24/solid";
import OfferCard from "@ui/OfferCard";
import { ReviewSlideShow } from "@ui/ReviewSlideShow";

import { JetBrains_Mono } from "next/font/google";
const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const data = [
  {
    heading: "meal prep guide",
    rate: "free lifetime",
    pricing: "free",
    perks: [
      "100+ meals",
      "high protein",
      "low carb",
      "cost friendly",
      "20min prep",
    ],
  },
  {
    heading: "1on1 personal training",
    rate: "subscription",
    pricing: "$199.99 / month",
    perks: [
      "4 sessions/month",
      "1 hour/per session",
      "personal diet plan",
      "personal training routine",
      "personal supplement plan",
    ],
  },
  {
    heading: "full body workout routine",
    rate: "one time payment",
    pricing: "$29.99",
    perks: [
      "full body workouts",
      "cardio",
      "abdominals",
      "stretching",
      "resting",
    ],
  },
];

export default function Page() {
  return (
    <section className="min-w-screen min-h-screen flex flex-col gap-8 justify-center">
      <h1
        className={`${jb_mono.className} text-center text-7xl text-blue font-bold pt-16`}
      >
        XM FITNESS
      </h1>
      <p
        className={`${jb_mono.className} text-center text-4xl uppercase w-1/2 line-clamp-2 self-center font-bold`}
      >
        helping age 25+ men lose 10+ pounds of body fat in just 10 weeks
      </p>

      <button
        className={`${jb_mono.className} font-bold text-black bg-white w-fit self-center text-4xl p-4`}
      >
        JOIN FOR FREE
      </button>

      <div className="border-8 h-[50vh] w-10/12 rounded-[4rem] flex items-center justify-center self-center">
        <PlayIcon className="size-64 p-16 border-8 rounded-[4rem]" />
      </div>

      <div className="uppercase space-y-8 flex flex-col items-center">
        <h1 className={`${jb_mono.className} text-6xl font-bold pt-8`}>
          MY OFFERS
        </h1>

        <div className="flex gap-16 justify-center">
          {data.map((offer, i) => (
            <OfferCard
              key={i}
              heading={offer.heading}
              perks={offer.perks}
              price={offer.pricing}
              redirect={""}
            />
          ))}
        </div>

        <h1 className={`${jb_mono.className} text-4xl font-bold pt-16`}>
          See what other people are saying
        </h1>
        <ReviewSlideShow />
      </div>
    </section>
  );
}
