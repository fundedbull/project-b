"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import Image from "next/image";
interface CardStackProps {
  images: string[];
}

export default function CardStack({
  images = [
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ],
}: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  const handleTap = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    // Animate the card moving up and fading out
    controls
      .start({
        y: -100,
        opacity: 0,
        transition: { duration: 0.3 },
      })
      .then(() => {
        // Move to the next card
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // Add delay before allowing next tap
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      });
  };

  // Reset animation when current index changes
  useEffect(() => {
    controls.set({ x: 0, y: 0, opacity: 1, rotate: 0 });
  }, [currentIndex, controls]);

  return (
    <div
      className="relative w-full h-[600px] md:h-[1080px] flex items-center justify-center overflow-hidden"
      ref={constraintsRef}
    >
      {/* Background cards */}
      {images.map((image, index) => {
        // Only show the next two cards in the stack
        if (
          index === currentIndex ||
          index === (currentIndex + 1) % images.length ||
          index === (currentIndex + 2) % images.length
        ) {
          const isTopCard = index === currentIndex;
          const isMiddleCard = index === (currentIndex + 1) % images.length;
          //const isBottomCard = index === (currentIndex + 2) % images.length;

          // Calculate rotation and position for stacked effect
          const rotation = isTopCard ? 0 : isMiddleCard ? 3 : 6;
          const translateY = isTopCard ? 0 : 5; // Reduced Y translation to keep cards closer
          const translateX = isTopCard ? 0 : isMiddleCard ? 5 : 10;
          const scale = isTopCard ? 1 : isMiddleCard ? 0.98 : 0.96; // Adjusted scale for less dramatic size difference
          const zIndex = isTopCard ? 30 : isMiddleCard ? 20 : 10;

          return (
            <motion.div
              key={index}
              className="absolute rounded-xl overflow-hidden shadow-lg"
              style={{
                zIndex,
                transformOrigin: "center bottom",
              }}
              animate={
                isTopCard
                  ? controls
                  : {
                      rotate: rotation,
                      y: translateY,
                      x: translateX,
                      scale: scale,
                    }
              }
              onClick={isTopCard && !isAnimating ? handleTap : undefined}
              whileHover={
                isTopCard && !isAnimating ? { scale: 1.02 } : undefined
              }
            >
              <div
                className={`relative w-[800px] h-[600px] md:w-[1600px] md:h-[1080px] rounded-xl overflow-hidden
                  ${
                    isTopCard && !isAnimating
                      ? "cursor-pointer"
                      : "pointer-events-none"
                  }`}
              >
                <Image
                  width={1600}
                  height={1080}
                  src={image || "/placeholder.svg"}
                  alt={`Card ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        }
        return null;
      })}

      {/* Instructions */}
      <div className="absolute bottom-16 md:bottom-32 text-center font-medium">
        Tap the top card to see the next card
      </div>
    </div>
  );
}
