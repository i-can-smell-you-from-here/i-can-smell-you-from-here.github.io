import Link from "next/link";
import { ResponsiveBanner } from "@/components/integrations/responsive-banner";
import { Faq } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { PageSections } from "@/components/site/page-sections";
import { siteConfig } from "@/config/site";
import type { HomePageDefinition } from "@/config/types";
import { homeSchemas } from "@/lib/schema";
import { assetPath, routePath } from "@/lib/urls";
import { GameFigures, OfficialPlayLink, OfficialReferences } from "./fixed-template-content";

export function FixedTemplateHome({ home }: { home: HomePageDefinition }) {
  return <>
    <JsonLd data={homeSchemas(home)} />
    <main className="wrap portal-content">
      <section className="hero">
        <div><p className="eyebrow">{home.hero.eyebrow}</p><h1>{home.hero.heading}</h1><p className="lead">{home.hero.lead}</p><p>{home.hero.supportingText}</p>
          <div className="actions"><OfficialPlayLink />{home.hero.primaryLink ? <Link className="btn secondary" href={routePath(home.hero.primaryLink.slug)}>{home.hero.primaryLink.label}</Link> : null}</div>
        </div>
        <figure className="visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(siteConfig.assets.cover)} alt="I Can Smell You From Here game artwork" width="800" height="500" fetchPriority="high" />
        </figure>
      </section>
      <ResponsiveBanner />
      <div className="portal-body"><PageSections sections={home.sections} withEarlyNativeAd /><GameFigures screenshots={home.screenshots} /><Faq items={home.faq} /><OfficialReferences controls character /></div>
    </main>
  </>;
}
