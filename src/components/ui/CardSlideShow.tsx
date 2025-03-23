"use client";
import { Text } from "@ui/Text";
import { useEffect, useState } from "react";

const slides = [
  {
    heading: "Coaching",
    paragraph:
      "BRTM offers 1 on 1 coaching and group coaching seminars to new and existing traders/investors",
  },
  {
    heading: "Live Trading",
    paragraph:
      "BRTM offers live trading every Friday 6:30 AM to 7:30 AM to new and existing traders/investors",
  },
  {
    heading: "Courses",
    paragraph:
      "BRTM offers multiple courses both free and paid for trading/investing to new and existing traders/investors",
  },
];

const CardSlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentSlide + 1) % slides.length;
      setCurrentSlide(newIndex);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <article className="relative flex h-full w-[60vw] flex-col rounded-xl border border-[#ffffff0a] bg-neutral-800 p-4 text-left text-white before:absolute before:-inset-0 before:-z-10 before:block before:bg-secondary-400 before:blur-sm">
      <div className="bg-neutral-800 rounded-full text-center">
        <Text>{slides[currentSlide].paragraph}</Text>
      </div>
    </article>
  );
};

export default CardSlideShow;
