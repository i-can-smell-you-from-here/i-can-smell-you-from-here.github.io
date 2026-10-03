"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";

export function FixedTemplateHeader({ links }: { links: InternalLink[] }) {
  const pathname = (usePathname() || "/").replace(/\/+$/, "");
  return (
    <header className="portal-header">
      <div className="wrap header">
        <Link className="brand" href="/" aria-label={`${siteConfig.shortName} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(siteConfig.assets.logo)} alt="" width="32" height="32" />
          <span>{siteConfig.shortName}</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.slug} className="nav-link" href={routePath(link.slug)} aria-current={pathname === routePath(link.slug).replace(/\/+$/, "") ? "page" : undefined}>{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
