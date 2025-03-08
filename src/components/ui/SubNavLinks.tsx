"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";

const SubNavLink: FC<{ K: string; V: string; D: string }> = ({ K, V, D }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <Link
      href={{
        pathname,
        query: {
          ...Object.fromEntries(searchParams.entries()),
          [K]: encodeURIComponent(V),
        },
      }}
      className={`${
        decodeURIComponent(searchParams.get(K) || D) === V
          ? "text-blue"
          : "text-white"
      } uppercase`}
    >
      {V}
    </Link>
  );
};

export default SubNavLink;
