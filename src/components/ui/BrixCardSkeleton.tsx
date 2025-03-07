export function BrixCardSkeleton() {
  return (
    <article
      className={` bg-background border-2 border-white rounded-lg relative h-full p-4`}
    >
      {/* Header */}
      <div className="flex justify-between animate-pulse">
        <div className="flex gap-2 items-center">
          <div className="w-32 h-6 bg-gray-300 rounded-md" />{" "}
          {/* Skeleton for title */}
          <div className="w-5 h-5 bg-gray-300 rounded-full" />{" "}
          {/* Skeleton for logo */}
        </div>
        <div className="w-32 h-8 bg-gray-300 rounded-md" />{" "}
        {/* Skeleton for price */}
      </div>
      {/* Author and Ranking */}
      <div className="flex gap-4 w-full items-center p-2 animate-pulse">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />{" "}
        {/* Skeleton for user avatar */}
        <div className="flex flex-col gap-1">
          <div className="w-32 h-6 bg-gray-300 rounded-md" />{" "}
          {/* Skeleton for author */}
          <div className="w-24 h-4 bg-gray-300 rounded-md" />{" "}
          {/* Skeleton for ranking */}
        </div>
      </div>
      {/* Course Title */}
      <div className="w-64 h-8 bg-gray-300 rounded-md mt-2 animate-pulse" />{" "}
      {/* Skeleton for course name */}
      {/* Time Spent, Rating, Date Created, and Total Users */}
      <div className="border-white border-t-4 flex justify-between text-[#DBDBDB] uppercase p-2 animate-pulse">
        <div className="flex flex-col gap-2">
          <div className="w-40 h-4 bg-gray-300 rounded-md" />{" "}
          {/* Skeleton for time spent */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((v) => (
              <div key={v} className="w-4 h-4 bg-gray-300 rounded-full" /> // Skeleton for star rating
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-40 h-4 bg-gray-300 rounded-md" />{" "}
          {/* Skeleton for date created */}
          <div className="w-32 h-4 bg-gray-300 rounded-md" />{" "}
          {/* Skeleton for total users */}
        </div>
      </div>
    </article>
  );
}
