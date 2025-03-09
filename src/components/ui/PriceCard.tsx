/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";
// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved

interface Props {
  tier: string;
  summary: string;
  perks: string[];
  price: string;
  unlocked: boolean;
  redirect: string;
}

const CoachCard: FC<Props> = ({
  tier,
  summary,
  perks,
  price,
  unlocked,
  redirect,
}) => {
  return (
    <article className="relative flex h-fit min-w-80 w-80 flex-col rounded-xl border border-white bg-neutral-800 p-4 text-left text-white before:absolute before:-inset-0 before:-z-10 before:block before:bg-gradient-to-r before:blur md:min-w-96">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <h2 className="text-left text-2xl font-semibold text-blue">{tier}</h2>
          {/* <div className="text-4xl font-bold">{coachName}</div> */}
        </div>
      </div>

      <div className="flex items-baseline justify-between pb-4 pt-4">
        {/* {+price !== 0 ? (
          <p className="text-2xl font-medium text-neutral-500 line-through">
            ${+price * 2}
          </p>
        ) : (
          <p className="text-2xl font-medium text-neutral-500">Limited Time</p>
        )} */}
        <p className="text-4xl font-bold">${price}/monthly</p>
      </div>

      <h3 className="pt-2 mb-2 text-2xl text-neutral-500">{summary}</h3>
      <ul className="pt-2 pb-3 w-full space-y-2 text-2xl font-semibold *:flex *:items-center *:gap-2">
        {perks.map((perk, idx) => (
          <li key={idx}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="size-6 rounded bg-gradient-to-r stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p className="truncate">{perk}</p>
          </li>
        ))}
      </ul>
      {/* <div className="flex items-baseline justify-between pb-4 pt-4">
        {+price !== 0 ? (
          <p className="text-2xl font-medium text-neutral-500 line-through">
            ${+price * 2}
          </p>
        ) : (
          <p className="text-2xl font-medium text-neutral-500">Limited Time</p>
        )}
        <p className="text-4xl font-bold">${price} USD</p>
      </div> */}

      {unlocked && (
        <Link
          href={redirect}
          className="relative h-fit p-[2px] transition duration-300 ease-in-out before:absolute before:-inset-0 before:block before:rounded-full before:bg-gradient-to-r before:from-white before:to-white hover:scale-105 hover:cursor-pointer"
        >
          <p className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold text-blue">
            Buy Now
          </p>
        </Link>
      )}

      <div className="flex items-center justify-between pt-2">
        <p className="text-sm text-white">Powered by BRIX</p>
        <Image
          className="self-center"
          width="22"
          height="22"
          src={brix_logo}
          alt="Logo"
        />
      </div>
    </article>
  );
};

export default CoachCard;
