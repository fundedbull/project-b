import { cva, VariantProps } from "class-variance-authority";
import { Anton, Gochi_Hand, Oswald } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const gochiHand = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({ subsets: ["latin"] });

const textStyles = cva(`antialiased`, {
  variants: {
    intent: {
      text: [anton.className],
      ui: [gochiHand.className],
      heading: [oswald.className],
    },
    size: {
      small: ["text-sm"],
      base: ["text-base"],
      large: ["text-lg md:text-2xl lg:text-4xl"],
      extra: ["text-xl md:text-4xl lg:text-7xl"],
    },
  },
  defaultVariants: {
    intent: "text",
    size: "base",
  },
});

export interface Props extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
}

export function Text({ intent, size, children }: Props) {
  return <p className={textStyles({ intent, size })}>{children}</p>;
}
