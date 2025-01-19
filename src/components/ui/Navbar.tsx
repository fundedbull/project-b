import Link from "next/link";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";
import { Text } from "./Text";

export function Navbar() {
  return (
    <nav className="bg-neutral-800 p-4 w-full border-[1rem] border-neutral-500 rounded-full">
      <ul className="flex flex-row gap-4 h-full text-center">
        <li className="flex items-center justify-center w-full">
          <Link href="/">
            <Image src={brix_logo} width={64} height={64} alt="brand logo" />
          </Link>
        </li>
        <li className="text-nowrap w-full bg-neutral-400 translate-x-[4.5rem] -skew-x-12 py-4 rounded">
          <Link href="/">
            <Text intent={"heading"} size="large">
              Pricing
            </Text>
          </Link>
        </li>
        <li className="text-nowrap w-full bg-neutral-500 translate-x-12 -skew-x-12 py-4 rounded">
          <Text intent={"heading"} size="large">
            <Link href="/">Reviews</Link>
          </Text>
        </li>
        <li className="text-nowrap w-full bg-neutral-600 translate-x-6 -skew-x-12 py-4 rounded">
          <Link href="/">
            <Text intent={"heading"} size="large">
              Build a Brix
            </Text>
          </Link>
        </li>
        <li className="text-nowrap w-full bg-neutral-700 py-4 -skew-x-12 rounded-l rounded-r-full">
          <Link href="/">
            <Text intent={"heading"} size="large">
              Login
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
