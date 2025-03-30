"use client";
import React, { useEffect, useRef } from "react";

const InfiniteScrollText = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const content = contentRef.current;

    if (!scrollContainer || !content) return;

    // Create duplicate content for seamless scrolling
    const contentWidth = content.offsetWidth;
    const clonedContent = content.cloneNode(true);
    scrollContainer.appendChild(clonedContent);

    // Animation function
    let position = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      position -= scrollSpeed;

      // Reset position when first copy of content is fully scrolled out
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
    <div className="container mx-auto mt-10 p-4 text-zinc-300  w-full overflow-hidden">
      <p>Everything you need in our marketplace:</p>
      <div className="relative overflow-hidden w-full">
        <div ref={scrollContainerRef} className="inline-flex whitespace-nowrap">
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
