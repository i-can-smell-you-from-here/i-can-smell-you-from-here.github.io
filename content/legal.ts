import { integrations } from "@/config/integrations";
import { siteConfig } from "@/config/site";
import type { SeoPageDefinition } from "@/config/types";

const privacyIntegrationParagraphs: string[] = [];

if (integrations.analytics.provider === "google-analytics") {
  privacyIntegrationParagraphs.push(
    "Google Analytics 4 is enabled to understand aggregate page usage. Google may process technical visit information under its own privacy terms.",
  );
}

if (integrations.ads.provider === "adsterra-native") {
  privacyIntegrationParagraphs.push(
    "Adsterra Native advertising is enabled. Adsterra may process technical request information and applies its own privacy policy.",
  );
}

export const legalPages: SeoPageDefinition[] = [
  {
    enabled: true,
    slug: "about",
    pageType: "legal",
    navLabel: "About",
    title: "About",
    description: `Learn how ${siteConfig.siteName} provides information about the game.`,
    keywords: ["about game wiki"],
    primaryKeyword: "about this game resource",
    secondaryKeywords: [],
    searchIntent: "Learn who maintains this independent resource",
    priority: "P2",
    navVisible: false,
    hero: { heading: `About ${siteConfig.siteName}`, lead: "How this independent editorial resource is maintained." },
    sections: [
      { id: "mission", heading: "Our Editorial Mission", paragraphs: ["This is an independent fan-made guide to I Can Smell You From Here, its endings, platforms, Idimya and controls."] },
      { id: "standards", heading: "Our References", paragraphs: ["We use the developer’s official game page and update notes as primary references for changing game information."] },
      { id: "independence", heading: "Independent Status", paragraphs: ["This fan-made resource is not the game developer, publisher or platform owner and does not imply official endorsement."] },
    ],
    relatedSlugs: ["contact", "copyright"],
    lastReviewed: "2026-10-03",
  },
  {
    enabled: true,
    slug: "contact",
    pageType: "legal",
    navLabel: "Contact",
    title: "Contact & Corrections",
    description: `Read correction, attribution, copyright and technical issue guidance for ${siteConfig.siteName}.`,
    keywords: ["game wiki contact", "corrections"],
    primaryKeyword: "contact and corrections",
    secondaryKeywords: [],
    searchIntent: "Review correction and rights-reporting guidance",
    priority: "P2",
    navVisible: false,
    hero: { heading: "Contact & Corrections", lead: "Guidance for factual corrections, attribution concerns, copyright questions and technical issues." },
    sections: [
      { id: "contact", heading: "Contact Availability", paragraphs: ["This site does not currently offer a public contact address or submission form."] },
      { id: "game-support", heading: "Game Information", paragraphs: ["The developer’s official itch.io game page contains the game’s own update notes and community discussion. This independent guide does not provide support on behalf of the developer."] },
    ],
    relatedSlugs: ["about", "copyright"],
    lastReviewed: "2026-10-03",
  },
  {
    enabled: true,
    slug: "privacy",
    pageType: "legal",
    navLabel: "Privacy",
    title: "Privacy Policy",
    description: `Read the privacy policy for ${siteConfig.siteName}, including enabled measurement or advertising services.`,
    keywords: ["game wiki privacy"],
    primaryKeyword: "privacy policy",
    secondaryKeywords: [],
    searchIntent: "Understand site privacy practices",
    priority: "P2",
    navVisible: false,
    hero: { heading: "Privacy Policy", lead: "A plain-language summary of the data this static site and its enabled services may process." },
    sections: [
      { id: "site-data", heading: "Data This Site Collects", paragraphs: ["The static site does not provide accounts, comments or a database for storing visitor submissions."] },
      {
        id: "integrations",
        heading: "Optional Third-Party Services",
        paragraphs: privacyIntegrationParagraphs.length
          ? privacyIntegrationParagraphs
          : ["No audience measurement or advertising integration is currently enabled."],
      },
      { id: "external-links", heading: "External Links", paragraphs: ["A link to another website is governed by that website's own terms and privacy practices."] },
      { id: "changes", heading: "Policy Changes", paragraphs: ["This policy reflects the site’s current integrations and may change when those services change."] },
    ],
    relatedSlugs: ["terms", "contact"],
    lastReviewed: "2026-10-03",
  },
  {
    enabled: true,
    slug: "terms",
    pageType: "legal",
    navLabel: "Terms",
    title: "Terms of Use",
    description: `Read the terms for using the guides and reference information on ${siteConfig.siteName}.`,
    keywords: ["game wiki terms"],
    primaryKeyword: "terms of use",
    secondaryKeywords: [],
    searchIntent: "Read site terms",
    priority: "P2",
    navVisible: false,
    hero: { heading: "Terms of Use", lead: "Conditions for using this independent guide and reference website." },
    sections: [
      { id: "informational", heading: "Informational Use", paragraphs: ["Content is provided for general game information and may change when the game is updated."] },
      { id: "accuracy", heading: "Accuracy and Availability", paragraphs: ["We aim to provide accurate game information, but uninterrupted availability or complete accuracy cannot be guaranteed."] },
      { id: "acceptable-use", heading: "Acceptable Use", paragraphs: ["Do not misuse the site, interfere with access or reproduce substantial original content without permission."] },
    ],
    relatedSlugs: ["privacy", "copyright"],
    lastReviewed: "2026-10-03",
  },
  {
    enabled: true,
    slug: "copyright",
    pageType: "legal",
    navLabel: "Copyright",
    title: "Copyright and Attribution",
    description: `Review copyright, trademark, media ownership and attribution information for the independent ${siteConfig.siteName} resource.`,
    keywords: ["game wiki copyright"],
    primaryKeyword: "copyright and attribution",
    secondaryKeywords: [],
    searchIntent: "Understand rights and attribution",
    priority: "P2",
    navVisible: false,
    hero: { heading: "Copyright and Attribution", lead: "Ownership and reporting guidance for editorial content, game names and media." },
    sections: [
      { id: "editorial", heading: "Original Editorial Content", paragraphs: ["Original explanations, page organization and site design remain protected unless a separate license says otherwise."] },
      { id: "game-rights", heading: "Game and Platform Rights", paragraphs: ["Game names, trademarks, screenshots and related assets belong to their respective owners. Their use does not imply endorsement."] },
      { id: "report", heading: "Game Ownership", paragraphs: ["I Can Smell You From Here and its game artwork belong to catproblem9735. This independent guide does not claim ownership of the game."] },
    ],
    relatedSlugs: ["contact", "terms"],
    lastReviewed: "2026-10-03",
  },
];
