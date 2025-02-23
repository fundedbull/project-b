import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href={"/pages/community"}>Community</Link> <p>FAQS</p>{" "}
        <p>Services</p>
      </nav>
      <div>{children}</div>
    </div>
  );
}
