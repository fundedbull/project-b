"use client";

import Link from "next/link";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";

import { JetBrains_Mono } from "next/font/google";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`${jb_mono.className} bg-background text-white px-6 py-3 hidden md:flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image src={brix_logo} alt="Brix Logo" width={42} height={42} />
          <span className="text-2xl font-bold ml-2">BRIX</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-1 items-center">
          <NavFirstItem href="/pricing" label="PRICING" />
          <div className="">
            <NavSecItem href="/community" label="COMMUNITY" isLogin />
          </div>
          <div className="">
            <NavThirdItem href="/build" label="BUILD A BRIX" />
          </div>
          <div className="">
            <NavLastItem href="/login" label="LOGIN" isLogin />
          </div>
        </div>
      </nav>
      <nav
        className={`${
          jb_mono.className
        } md:hidden bg-background p-4 space-y-4 ${
          isOpen && "absolute inset-0 top-0 z-50 h-full w-screen bg-neutral-950"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src={brix_logo} alt="Brix Logo" width={42} height={42} />
            <span className="text-2xl font-bold ml-2">BRIX</span>
          </div>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Bars3Icon className="size-8" />
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col gap-4 transition-all ease-in-out duration-300`}
        >
          <NavFirstItem href="/pricing" label="PRICING" />
          <NavSecItem href="/community" label="COMMUNITY" isLogin />
          <NavThirdItem href="/build" label="BUILD A BRIX" />
          <NavLastItem href="/login" label="LOGIN" isLogin />
        </div>
      </nav>
    </>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  isLogin?: boolean;
  className?: string;
}

/*
  Made different components for the nav bar items
*/
const NavFirstItem: React.FC<NavItemProps> = ({
  href,
  label,
  isLogin = false,
  className = "",
}) => {
  return (
    <Link href={href} className={`relative block ${className} text-2xl`}>
      <span
        className={`relative px-6 py-4 font-bold text-black block 
          before:content-[''] before:absolute before:inset-0 before:-skew-x-12
          before:bg-white before:transition before:duration-300 
          before:hover:bg-gray-500 
          ${isLogin ? "before:bg-[#F8F8F8] before:hover:bg-gray-500" : ""}`}
      >
        {/* #EAEAEA */}
        <span className="relative z-10">{label}</span>
      </span>
    </Link>
  );
};

const NavSecItem: React.FC<NavItemProps> = ({
  href,
  label,
  isLogin = false,
  className = "",
}) => {
  return (
    <Link href={href} className={`relative block ${className} text-2xl`}>
      <span
        className={`relative px-6 py-4 font-bold text-black block 
          before:content-[''] before:absolute before:inset-0 before:-skew-x-12
          before:bg-[#F4E1C1] before:transition before:duration-300 
          before:hover:bg-gray-500 
          ${isLogin ? "before:bg-[#F8F8F8] before:hover:bg-gray-500" : ""}`}
      >
        {/* #EAEAEA */}
        <span className="relative z-10">{label}</span>
      </span>
    </Link>
  );
};

const NavThirdItem: React.FC<NavItemProps> = ({
  href,
  label,
  isLogin = false,
  className = "",
}) => {
  return (
    <Link href={href} className={`relative block ${className} text-2xl`}>
      <span
        className={`relative px-6 py-4 font-bold text-black block 
          before:content-[''] before:absolute before:inset-0 before:-skew-x-12
          before:bg-white before:transition before:duration-300 
          before:hover:bg-gray-500 
          ${isLogin ? "before:bg-[#F8F8F8] before:hover:bg-gray-500" : ""}`}
      >
        {/* #EAEAEA */}
        <span className="relative z-10">{label}</span>
      </span>
    </Link>
  );
};

const NavLastItem: React.FC<NavItemProps> = ({
  href,
  label,
  isLogin = false,
  className = "",
}) => {
  return (
    <Link href={href} className={`relative block ${className} text-2xl`}>
      <span
        className={`relative px-6 py-[14px] font-bold text-[#0ef] block before:rounded-r-full
          before:content-[''] before:absolute before:inset-0 -skew-x-12
          before:bg-neutral-800 before:transition before:duration-300 
          before:hover:bg-white border-2 rounded-r-full border-[#0ef] hover:text-black
          ${isLogin ? "before:bg-background before:hover:bg-white" : ""}`}
      >
        <span className="relative z-10">{label}</span>
        {/* bg-neutral-800 */}
      </span>
    </Link>
  );
};

export default Navbar;
