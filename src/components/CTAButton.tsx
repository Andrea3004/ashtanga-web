import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { AnalyticsDestination, AnalyticsEventName, AnalyticsLocation } from "@/lib/analytics";
import { TrackedLink } from "./TrackedLink";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "member";
  analytics?: {
    event: AnalyticsEventName;
    location: AnalyticsLocation;
    label: string;
    destination: AnalyticsDestination;
    map_provider?: "google" | "naver";
  };
};

const variantClasses = {
  primary: "border-gold bg-gold text-background hover:border-text hover:bg-text hover:text-background",
  secondary: "border-text/70 bg-transparent text-text hover:border-gold hover:bg-gold hover:text-background",
  dark: "border-gold bg-gold text-background hover:border-text hover:bg-text hover:text-background",
  member:
    "border-gold bg-background text-gold hover:border-gold hover:bg-gold hover:text-background focus-visible:border-gold focus-visible:bg-gold focus-visible:text-background active:border-gold active:bg-gold active:text-background"
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  analytics,
  ...props
}: CTAButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  const linkTarget = target ?? (isExternal ? "_blank" : undefined);
  const linkRel = rel ?? (isExternal ? "noopener noreferrer" : undefined);

  return (
    <TrackedLink
      href={href}
      target={linkTarget}
      rel={linkRel}
      analytics={analytics}
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-5 text-sm font-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </TrackedLink>
  );
}
