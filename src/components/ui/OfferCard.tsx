import { FC } from "react";
import Image from "next/image";
import logo from "/public/brix_logo.png";
import Link from "next/link";

const OfferCard: FC<{
  heading: string;
  perks: string[];
  price: string;
  redirect: string;
}> = ({ heading, perks, price, redirect }) => {
  return (
    <article className="relative flex h-full min-w-80 flex-col rounded-xl border border-[#ffffff0a] bg-neutral-800 p-4 text-left text-white before:absolute before:-inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-blue before:to-orange before:blur">
      {/* This is the heading part of the card */}
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-bold uppercase">{heading}</div>
        </div>
      </div>

      {/* The perks/information about the service */}
      <>
        <h3 className="pb-1 pt-4 text-xl text-blue">What&apos;s Included</h3>
        <ul className="w-full space-y-2 text-xl font-semibold">
          {perks.map((perk, idx) => (
            <li key={idx} className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="size-6 rounded stroke-orange"
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
      </>

      {/* Always display the price */}

      <p className="text-2xl py-4 font-medium text-orange">{price}</p>

      {/* Get Offer Button */}
      <Link
        href={redirect}
        passHref
        className="relative h-full p-1 transition duration-300 ease-in-out border-white rounded-full border-2 hover:scale-105 hover:cursor-pointer"
      >
        <p className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold">
          Get Offer
        </p>
      </Link>

      {/* Card footer */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-sm uppercase text-orange">Powered by BRIX</p>
        <Image
          src={logo}
          className="size-10"
          alt="decorative"
          width={40} // Set the appropriate width and height
          height={40}
        />
      </div>
    </article>
  );
};

export default OfferCard;
