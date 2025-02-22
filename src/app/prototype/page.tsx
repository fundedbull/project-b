import { Text } from "@ui/Text";
import { PlayIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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
    pricing: "$199.99/month",
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
      <div className="text-center space-y-8 uppercase">
        <Text intent="heading" size={"extra"}>
          <span className="text-primary-400 font-bold">XM FITNESS</span>
        </Text>
        <div>
          <Text intent="text" size="large">
            helping age 25+ men lose 10+
          </Text>
          <Text intent="text" size="large">
            pounds of body fat in just 10 weeks
          </Text>
        </div>
      </div>

      <div className="place-self-center flex gap-1 items-center text-black bg-white rounded-full px-4 py-1">
        <Text intent={"ui"} size={"large"}>
          JOIN FOR FREE
        </Text>
        <ChevronRightIcon className="size-8" />
      </div>

      <div className="border-8 h-[50vh] rounded-[4rem] flex items-center justify-center">
        <PlayIcon className="size-64 p-16 border-8 rounded-[4rem]" />
      </div>

      <div className="uppercase space-y-8 flex flex-col items-center">
        <Text intent={"heading"} size={"extra"}>
          My offers
        </Text>

        <div className="flex gap-4">
          {data.map((offer, i) => (
            <article
              key={i}
              className="border-4 gap-8 rounded-3xl w-[32rem] p-4"
            >
              <div className="flex justify-between  w-full">
                <div>
                  <Text intent={"heading"} size={"large"}>
                    {offer.heading}
                  </Text>
                  <Text intent={"text"}>{offer.rate}</Text>
                </div>
                <div className="bg-[#758591] w-28 h-max justify-center rounded-full px-2 py-1 flex items-center">
                  <Text intent={"ui"}>{offer.pricing}</Text>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
