import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-neutral-700 p-4">
      <ul className="flex flex-row">
        <li>
          <Link href="/">{/** TODO: Add logo */}</Link>
        </li>
        <li>
          <Link href="/">Pricing</Link>
        </li>
        <li>
          <Link href="/">Reviews</Link>
        </li>
        <li>
          <Link href="/">Build a Brix</Link>
        </li>
        <li>
          <Link href="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
