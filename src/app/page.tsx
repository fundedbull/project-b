// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* navbar */}
      <nav className="border-b-2 p-1">
        <ul className="flex flex-row gap-5 text-4xl text-white">
          {/* <li><Link href="/all">All</Link></li> */}
          <li>All</li>
          <li>Business</li>
          <li>Fitness</li>
          <li>Finance</li>
          <li>Tech</li>
          <li>Sales</li>
          <li className="bg-cyan-200 rounded-2xl px-1">Search</li>
        </ul>
      </nav>

      {/* filter list */}
      <ul className="flex flex-row gap-2 text-lg">
        <li className="bg-white rounded-2xl px-1">Most Popular</li>
        <li className="text-white">*</li>
        <li className="bg-white rounded-2xl px-1">Most Members</li>
        <li className="bg-white rounded-2xl px-1">Most Reviews</li>
        <li className="text-white">*</li>
        <li className="bg-white rounded-2xl px-1">Most Money Made</li>
        <li className="bg-white rounded-2xl px-1">Free Brix{"'"}s</li>
        <li className="text-white">*</li>
        <li className="bg-white rounded-2xl px-1">New Brix{"'"}s</li>
      </ul>

      {/* featured Brix's */}
      <div className="grid grid-cols-3 gap-2">
        <article className="w-[250px] h-[100px] border-2 border-white rounded-xl"></article>
        <article className="w-[250px] h-[100px] border-2 border-white rounded-xl"></article>
        <article className="w-[250px] h-[100px] border-2 border-white rounded-xl"></article>
      </div>
    </div>
  );
}
