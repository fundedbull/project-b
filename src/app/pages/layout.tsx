export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-w-screen min-h-screen grid grid-rows-1 grid-cols-12">
      <nav className="col-span-1">
        <h1>Community</h1>
        <h1>Services</h1>
        <h1>Feedback</h1>
      </nav>
      <section className="col-span-full">{children}</section>
    </main>
  );
}
