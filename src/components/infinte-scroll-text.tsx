"use client";
import React, { useEffect, useRef } from "react";

const InfiniteScrollText = () => {
  // Specify type for DOM elements
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const content = contentRef.current;

    if (!scrollContainer || !content) return;

    // Duplicate content only once
    if (scrollContainer.children.length < 2) {
      const clonedContent = content.cloneNode(true) as HTMLDivElement;
      scrollContainer.appendChild(clonedContent);
    }

    const contentWidth = content.offsetWidth; // ✅ Error should be gone
    let position = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      position -= scrollSpeed;

      // Reset position when fully scrolled
      if (position <= -contentWidth) {
        position = 0;
      }

      scrollContainer.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="container mx-auto mt-10 p-4 text-zinc-300 w-full overflow-hidden">
      <p>Everything you need in our marketplace:</p>
      <div className="relative overflow-hidden w-full">
        <div
          ref={scrollContainerRef}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          <div ref={contentRef} className="flex items-center space-x-8 px-4">
            <span className="font-medium">Boosted Brix</span>
            <span className="font-medium">Brix Listings</span>
            <span className="font-medium">Connect</span>
            <span className="font-medium">Points Shop</span>
            <span className="font-medium">Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
