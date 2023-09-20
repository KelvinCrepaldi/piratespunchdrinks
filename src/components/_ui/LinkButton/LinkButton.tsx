import Link from "next/link";
import { ReactNode } from "react";

export default function LinkButton({
  href,
  ...props
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link
      className="w-full font-pirata rounded-2xl text-2xl p-2 px-5 mt-1 bg-pirates-red hover:bg-red-500 hover:text-white   transition"
      href={href}
      {...props}
    />
  );
}
