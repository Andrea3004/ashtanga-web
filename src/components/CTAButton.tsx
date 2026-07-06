import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

const variantClasses = {
  primary: "border-gold bg-gold text-background hover:border-text hover:bg-text hover:text-background",
  secondary: "border-text/70 bg-transparent text-text hover:border-gold hover:bg-gold hover:text-background",
  dark: "border-gold bg-gold text-background hover:border-text hover:bg-text hover:text-background"
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
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-5 text-sm font-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
