import Link from "next/link";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";

import { JetBrains_Mono } from "next/font/google";

const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav
      className={`${jb_mono.className} bg-background text-white px-6 py-3 flex items-center justify-between`}
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
          <NavSecItem href="/community" label="COMMUNITY" isLogin/>
        </div>
        <div className="">
          <NavThirdItem href="/build" label="BUILD A BRIX" />
        </div>
        <div className="">
          <NavLastItem href="/login" label="LOGIN" isLogin />
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  isLogin?: boolean;
  className?: string;
}

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
          ${isLogin ? "before:bg-orange before:hover:bg-yellow-400" : ""}`}
      >
        <span className="relative z-10">{label}</span>
        {/* bg-neutral-800 */}
      </span>
    </Link>
  );
};

export default Navbar;

/**
 * 
 * <nav className="bg-[#1d1d1d] p-4 w-full border-[1rem] border-b-[2rem] border-neutral-500 rounded-full uppercase">
      <ul className="flex flex-row gap-4 h-full text-center">
        <li className="flex items-center justify-center w-full">
          <Link href="/">
            <Image src={brix_logo} width={64} height={64} alt="brand logo" />
          </Link>
        </li>
        <li className="text-nowrap w-full bg-[#a2afb5] translate-x-[4.5rem] -skew-x-12 py-4 rounded">
          <Link href="/">
            <Text intent={"heading"} size="large">
              Pricing
            </Text>
          </Link>
        </li>
        <li className="text-nowrap w-full bg-[#585b65] translate-x-12 -skew-x-12 py-4 rounded">
          <Text intent={"heading"} size="large">
            <Link href="/">Reviews</Link>
          </Text>
        </li>
        <li className="text-nowrap w-full bg-[#070f28] translate-x-6 -skew-x-12 py-4 rounded">
          <Link href="/">
            <Text intent={"heading"} size="large">
              Build a Brix
            </Text>
          </Link>
        </li>
        <li className="text-nowrap w-full bg-[#a2afb5] py-4 -skew-x-12 rounded-l rounded-r-full">
          <Link href="/">
            <Text intent={"heading"} size="large">
              Login
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
 * 
 */
