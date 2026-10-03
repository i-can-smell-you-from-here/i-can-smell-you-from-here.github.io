import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Faq } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { PageSections } from "@/components/site/page-sections";
import { RelatedPages } from "@/components/site/related-pages";
import type { SeoPageDefinition } from "@/config/types";
import { getRelatedPages } from "@/content/registry";
import { pageSchemas } from "@/lib/schema";
import { GameFigures, OfficialPlayLink, OfficialReferences } from "./fixed-template-content";

export function FixedTemplateInner({ page }: { page: SeoPageDefinition }) {
  const legal = page.pageType === "legal";
  return <>
    <JsonLd data={pageSchemas(page)} />
    <main className="wrap portal-content">
      <section className="inner-hero">
        <Breadcrumbs slug={page.slug} current={page.navLabel} />
        {page.hero.eyebrow ? <p className="eyebrow">{page.hero.eyebrow}</p> : null}
        <h1>{page.hero.heading}</h1><p className="lead">{page.hero.lead}</p>
        {page.slug === "where-to-play" ? <div className="actions"><OfficialPlayLink /></div> : null}
      </section>
      <div className="layout">
        <article className="portal-body"><PageSections sections={page.sections} /><GameFigures screenshots={page.screenshots ?? []} />
          {page.faq?.length ? <Faq items={page.faq} /> : null}
          <div id="related"><RelatedPages pages={getRelatedPages(page)} /></div>
          {!legal ? <OfficialReferences controls={page.slug === "controls" || page.slug === "endings"} character={page.slug === "idimya" || page.slug === "endings"} /> : null}
          <NativeAdSlot />
        </article>
        <aside className="toc"><nav aria-label="On this page"><b>On this page</b>{page.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}
          {page.faq?.length ? <a href="#faq">Frequently Asked Questions</a> : null}
          <a href="#related">Related Guides</a>{!legal ? <a href="#references">Official References</a> : null}
        </nav></aside>
      </div>
    </main>
  </>;
}
