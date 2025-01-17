import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const cardStyles = cva(
  `flex flex-col bg-secondary-500 gap-2 text-secondary-600 p-6  rounded-xl`,
  {
    variants: {
      intent: {
        primary: ` text-left`,
        secondary: `border border-[#ffffff0a] text-center`,
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface Props extends VariantProps<typeof cardStyles> {
  children: React.ReactNode;
}

export function Card({ intent, children }: Props) {
  return <div className={cardStyles({ intent })}>{children}</div>;
}
