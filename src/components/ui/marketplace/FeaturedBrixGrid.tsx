import getBoostedCourses from "@/app/lib/data"; // This function simulates data fetching
import { BrixCard } from "@ui/BrixCard";
import { BrixCardSkeleton } from "@ui/BrixCardSkeleton";
import { Suspense } from "react";

// Skeleton loader component
const Skeleton = () => (
  <section className="grid grid-rows-1 grid-cols-3 gap-4 mt-6 mb-8">
    <BrixCardSkeleton />
    <BrixCardSkeleton />
    <BrixCardSkeleton />
  </section>
);

// FeaturedBrixGrid component
export default async function FeaturedBrixGrid() {
  // Fetch data on the server side using your existing async function
  const cards = await getBoostedCourses();

  return (
    <Suspense fallback={<Skeleton />}>
      <section className="grid grid-rows-1 grid-cols-3 gap-4 mt-6 mb-8">
        {cards.map((page, idx) => (
          <BrixCard key={idx} {...page} />
        ))}
      </section>
    </Suspense>
  );
}
