import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Text } from "./Text";

const tagStyle = cva(
  "w-fit px-4 py-1 rounded-full transition duration-300 ease-in",
  {
    variants: {
      active: {
        false: [
          "bg-neutral-700 hover:bg-neutral-500",
          "border border-[#ffffff0a]",
        ],
        true: ["bg-white", "text-black"],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface Props extends VariantProps<typeof tagStyle> {
  children: React.ReactNode;
}

export function Tag({ active, children }: Props) {
  return (
    <div className={tagStyle({ active })}>
      <Link href="">
        <Text intent="ui" size="extra">
          {children}
        </Text>
      </Link>
    </div>
  );
}
