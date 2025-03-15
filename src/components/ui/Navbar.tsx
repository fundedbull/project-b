"use client";

import Link from "next/link";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";

import { JetBrains_Mono } from "next/font/google";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`${jb_mono.className} bg-transparent text-white px-6 py-3 hidden md:flex items-center justify-between gap-12`}
      >
        {/* Logo */}

        <div className="flex items-center font-bold text-2xl">
          <Image src={brix_logo} alt="Brix Logo" width={42} height={42} />
          <Link href="/">BRIX</Link>
        </div>

        <div className="bg-[#13111a] p-2 rounded w-1/2 text-center">
          <h1>Update: Alpha v.2 release July 27th 2025 at 11am PST</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 items-center font-bold text-2xl uppercase text-nowrap">
          <Link href="/pricing" className="hover:text-blue">
            Pricing
          </Link>
          <p>/</p>
          <div className="relative group">
            <h1 className="hover:text-blue">Community</h1>
            <ul className="absolute hidden flex-col group-hover:flex">
              <li>
                <a
                  href="https://youtube.com/@brixpage?si=pzWFW4yHFNdg5UVM"
                  className="hover:text-blue"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/brixpage?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                  className="hover:text-blue"
                >
                  Instagram
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/michael-rosas-32ba71330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="hover:text-blue"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/BRIXPAGE/s/OYpUDHHNE4"
                  className="hover:text-blue"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </div>

          <p>/</p>
          <Link href="/pricing" className="hover:text-blue">
            Build A Brix
          </Link>
          <p>/</p>
          <Link href="/pricing" className="hover:text-blue">
            Login
          </Link>
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
          } flex-col gap-1 transition-all ease-in-out duration-300 uppercase font-bold text-2xl`}
        >
          <Link href="/pricing" className="hover:text-blue">
            Pricing
          </Link>
          <button className="group flex flex-col items-start  gap-1">
            <div className="flex items-center gap-1">
              <h1>Community</h1>
              <ChevronDownIcon className="size-5" />
            </div>

            <ul className=" hidden flex-col group-hover:flex text-start px-2">
              <li>
                <a
                  href="https://youtube.com/@brixpage?si=pzWFW4yHFNdg5UVM"
                  className="hover:text-blue"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/brixpage?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                  className="hover:text-blue"
                >
                  Instagram
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/michael-rosas-32ba71330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="hover:text-blue"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/BRIXPAGE/s/OYpUDHHNE4"
                  className="hover:text-blue"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </button>
          <Link href="/build-a-brix" className="hover:text-blue">
            Build A Brix
          </Link>
          <Link href="/login" className="hover:text-blue">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
