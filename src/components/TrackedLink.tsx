"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import type { AnalyticsEventName } from "@/lib/analytics";
import { trackEvent } from "@/lib/analytics";

type AnalyticsLinkOptions = {
  event: AnalyticsEventName;
  location: string;
  label: string;
  destination?: string;
};

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  analytics?: AnalyticsLinkOptions;
};

export function TrackedLink({ href, children, analytics, onClick, ...props }: TrackedLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (analytics) {
      trackEvent(analytics.event, {
        page: pathname,
        location: analytics.location,
        label: analytics.label,
        destination: analytics.destination ?? href
      });
    }

    onClick?.(event);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
