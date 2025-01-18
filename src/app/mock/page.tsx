import ReviewSlideShow from "@ui/ReviewSlideShow";
import { Text } from "@ui/Text";

export default function Mock() {
  return (
    <section className="flex flex-col items-center py-32 gap-8 overflow-hidden">
      <Text intent={"heading"} size={"extra"}>
        XM FITNESS
      </Text>
      <Text intent={"text"} size={"large"}>
        TEACHING 25+ MEN HOW TO LOSE 10+ POUNDS
      </Text>
      <div className="relative h-full p-1 transition duration-300 ease-in-out before:absolute before:-inset-0 before:block before:rounded-full before:bg-gradient-to-r before:from-primary-500 before:to-secondary-500 hover:scale-105 hover:cursor-pointer">
        <div className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold">
          <Text intent={"ui"} size="large">
            JOIN FOR FREE
          </Text>
        </div>
      </div>

      <div className="w-[80vw] h-[40vh] bg-neutral-900" />
      <div className="flex flex-col justify-center items-center gap-16">
        <Text intent={"heading"} size={"extra"}>
          My Offers
        </Text>
        <div className="flex justify-between gap-16">
          <article className="flex flex-col gap-4 border border-white rounded-xl p-4">
            <div className="flex gap-16 justify-between items-center">
              <div className="flex flex-col gap-2">
                <Text intent={"heading"} size={"large"}>
                  Meal Prep Guide
                </Text>
                <Text intent={"text"}>FREE LIFETIME</Text>
              </div>
              <div className="bg-primary-400 text-black px-2 py-1 h-fit rounded-full flex justify-center items-center w-fit">
                <Text intent={"ui"} size={"large"}>
                  Free
                </Text>
              </div>
            </div>

            <ul>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-4 border border-white rounded-xl p-4">
            <div className="flex gap-16 justify-between items-center">
              <div className="flex flex-col gap-2">
                <Text intent={"heading"} size={"large"}>
                  Meal Prep Guide
                </Text>
                <Text intent={"text"}>FREE LIFETIME</Text>
              </div>
              <div className="bg-primary-400 text-black px-2 py-1 h-fit rounded-full flex justify-center items-center w-fit">
                <Text intent={"ui"} size={"large"}>
                  Free
                </Text>
              </div>
            </div>

            <ul>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-4 border border-white rounded-xl p-4">
            <div className="flex gap-16 justify-between items-center">
              <div className="flex flex-col gap-2">
                <Text intent={"heading"} size={"large"}>
                  Meal Prep Guide
                </Text>
                <Text intent={"text"}>FREE LIFETIME</Text>
              </div>
              <div className="bg-primary-400 text-black px-2 py-1 h-fit rounded-full flex justify-center items-center w-fit">
                <Text intent={"ui"} size={"large"}>
                  Free
                </Text>
              </div>
            </div>

            <ul>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 stroke-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <Text intent={"heading"} size={"large"}>
                  100+ MEALS
                </Text>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-16 pt-32">
        <Text intent={"heading"} size={"extra"}>
          Reviews
        </Text>
      </div>
      <ReviewSlideShow />
    </section>
  );
}
