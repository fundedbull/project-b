import { JetBrains_Mono, Inter } from "next/font/google";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";
import { StarIcon } from "@heroicons/react/24/solid";
const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export interface Props {
  author: string;
  ranking: number;
  course: string;
  price: number;
  rate: string;
  total_time: number;
  rating: number;
  created_at: Date;
  total_users: number;
  boosted_member: boolean;
}

export function BrixCard({
  author,
  ranking,
  course,
  price,
  rate,
  total_time,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rating,
  created_at,
  total_users,
  boosted_member,
}: Props) {
  return (
    <article
      className={
        boosted_member
          ? `${jb_mono.className} bg-background border-2 border-white rounded-lg relative h-full before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-blue before:to-orange before:blur`
          : `${jb_mono.className} bg-background border-2 border-white rounded-lg`
      }
    >
      <div className="flex justify-between p-2">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">
            {boosted_member ? "BOOSTED BRIX" : "BRIX PAGE"}
          </h3>{" "}
          <Image src={brix_logo} width={20} height={20} alt={"logo"} />
        </div>

        <div
          className={
            boosted_member
              ? "btn-primary"
              : "border border-[#ffffffa0] rounded w-fit text-orange"
          }
        >
          <p
            className={`relative z-10  font-bold text-sm  w-36 py-1 rounded-full bg-background text-center uppercase`}
          >
            ${price} / {rate}
          </p>
        </div>
      </div>

      <div className="flex gap-4 w-full items-center p-2">
        <div className="size-12 bg-[#D9D9D9] rounded-full" />
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-2xl">{author}</h2>
          <p className={`${inter.className} font-bold  text-[#DBDBDB]`}>
            BRIX RANKING #{ranking}
          </p>
        </div>
      </div>
      <h2 className="font-bold  text-3xl  truncate p-2">{course}</h2>
      <div className="border-white border-t-4 flex justify-between text-[#DBDBDB] uppercase p-2">
        <div className="flex flex-col">
          <p className={`${inter.className} text-sm`}>
            TIME SPENT BY USERS: <span className="">{total_time} hours</span>
          </p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((v) => (
              <StarIcon key={v} className="size-6 fill-orange" />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className={`${inter.className} text-sm`}>
            DATE CREATED:{" "}
            <span className="">{created_at.toLocaleDateString()}</span>
          </p>
          <p className={`${inter.className} text-sm text-right`}>
            <span className="">{total_users} joined</span>
          </p>
        </div>
      </div>
    </article>
  );
}
