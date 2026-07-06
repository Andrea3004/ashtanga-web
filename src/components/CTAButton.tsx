import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

const variantClasses = {
  primary: "border-leaf bg-leaf text-white hover:bg-ink hover:border-ink",
  secondary: "border-white/70 bg-transparent text-white hover:bg-white hover:text-ink",
  dark: "border-ink bg-ink text-white hover:bg-leaf hover:border-leaf"
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-5 text-sm font-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-leaf/25 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
