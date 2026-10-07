import React, { useEffect } from 'react';
import {
  CONTACT_INFO,
  HERO_IMAGE,
  Language,
  Translations,
} from '../i18n/translations';

interface SeoHeadProps {
  lang: Language;
  t: Translations;
}

const LOCALE_MAP: Record<Language, string> = {
  pt: 'pt_PT',
  en: 'en_US',
  fr: 'fr_FR',
};

const HREFLANG_MAP: Record<Language, string> = {
  pt: 'pt-PT',
  en: 'en',
  fr: 'fr',
};

function upsertMeta(
  selector: string,
  attrName: 'name' | 'property',
  attrValue: string,
  content: string
) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(
  selector: string,
  rel: string,
  href: string,
  extraAttrs?: Record<string, string>
) {
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  if (extraAttrs) {
    Object.entries(extraAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

/**
 * Dynamic SEO Head & Schema.org JSON-LD manager.
 * Synchronizes <title>, <meta name="description">, Canonical URLs, hreflang alternates,
 * Open Graph tags, Twitter/X Cards, and localized Schema.org JSON-LD (@graph: AutoBodyShop,
 * PostalAddress, Organization, WebSite, WebPage, Service, OfferCatalog, ImageObject, BreadcrumbList).
 */
export const SeoHead: React.FC<SeoHeadProps> = ({ lang, t }) => {
  useEffect(() => {
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : 'https://pedrograzina.pt';
    const pathname =
      typeof window !== 'undefined' ? window.location.pathname : '/';
    const baseUrl = `${origin}${pathname}`;

    const canonicalUrl =
      lang === 'pt' ? baseUrl : `${baseUrl}?lang=${lang}`;
    const absoluteLogoUrl = new URL('./logo.svg', baseUrl).href;
    const absoluteHeroImgUrl = new URL(HERO_IMAGE, origin).href;

    // 1. Document Title & HTML lang attribute
    document.title = t.meta.title;
    document.documentElement.lang = HREFLANG_MAP[lang];

    // 2. Standard Meta Description & Robots
    upsertMeta(
      'meta[name="description"]',
      'name',
      'description',
      t.meta.description
    );
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical Link
    upsertLink('link[rel="canonical"]', 'canonical', canonicalUrl);

    // 4. International hreflang Alternate Links
    upsertLink(
      'link[rel="alternate"][hreflang="pt-PT"]',
      'alternate',
      baseUrl,
      { hreflang: 'pt-PT' }
    );
    upsertLink(
      'link[rel="alternate"][hreflang="en"]',
      'alternate',
      `${baseUrl}?lang=en`,
      { hreflang: 'en' }
    );
    upsertLink(
      'link[rel="alternate"][hreflang="fr"]',
      'alternate',
      `${baseUrl}?lang=fr`,
      { hreflang: 'fr' }
    );
    upsertLink(
      'link[rel="alternate"][hreflang="x-default"]',
      'alternate',
      baseUrl,
      { hreflang: 'x-default' }
    );

    // 5. Open Graph Metadata
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', t.meta.title);
    upsertMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      t.meta.description
    );
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta(
      'meta[property="og:site_name"]',
      'property',
      'og:site_name',
      `${CONTACT_INFO.companyName} — ${CONTACT_INFO.specialty}`
    );
    upsertMeta(
      'meta[property="og:locale"]',
      'property',
      'og:locale',
      LOCALE_MAP[lang]
    );
    upsertMeta(
      'meta[property="og:image"]',
      'property',
      'og:image',
      absoluteHeroImgUrl
    );
    upsertMeta(
      'meta[property="og:image:width"]',
      'property',
      'og:image:width',
      '1280'
    );
    upsertMeta(
      'meta[property="og:image:height"]',
      'property',
      'og:image:height',
      '720'
    );
    upsertMeta(
      'meta[property="og:image:alt"]',
      'property',
      'og:image:alt',
      t.meta.title
    );

    // 6. Twitter / X Card Metadata
    upsertMeta(
      'meta[name="twitter:card"]',
      'name',
      'twitter:card',
      'summary_large_image'
    );
    upsertMeta(
      'meta[name="twitter:title"]',
      'name',
      'twitter:title',
      t.meta.title
    );
    upsertMeta(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      t.meta.description
    );
    upsertMeta(
      'meta[name="twitter:image"]',
      'name',
      'twitter:image',
      absoluteHeroImgUrl
    );
    upsertMeta(
      'meta[name="twitter:image:alt"]',
      'name',
      'twitter:image:alt',
      t.meta.title
    );

    // 7. Dynamic Schema.org JSON-LD (@graph) with complete LocalBusiness / AutoBodyShop data
    const schemaGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['AutoBodyShop', 'AutomotiveBusiness', 'LocalBusiness', 'Organization'],
          '@id': `${baseUrl}#organization`,
          name: `${CONTACT_INFO.companyName} — ${CONTACT_INFO.specialty}`,
          alternateName: CONTACT_INFO.companyName,
          description: t.meta.description,
          url: baseUrl,
          telephone: CONTACT_INFO.phoneDisplay,
          email: CONTACT_INFO.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Outeiro da Rosa n11 (Zn Industrial da Zicofa)',
            addressLocality: 'Leiria',
            addressRegion: 'Leiria',
            addressCountry: 'PT',
          },
          logo: {
            '@type': 'ImageObject',
            '@id': `${baseUrl}#logo`,
            url: absoluteLogoUrl,
            contentUrl: absoluteLogoUrl,
            width: 2048,
            height: 1149,
            caption: `${CONTACT_INFO.companyName} — ${CONTACT_INFO.specialty} (${CONTACT_INFO.phoneDisplay})`,
          },
          image: [
            absoluteLogoUrl,
            absoluteHeroImgUrl,
            ...t.gallery.items.map((item) => new URL(item.imageUrl, origin).href),
          ],
          founder: {
            '@type': 'Person',
            '@id': `${baseUrl}#founder`,
            name: CONTACT_INFO.companyName,
            jobTitle: 'Especialista em Pintura Automóvel',
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Leiria',
            },
            {
              '@type': 'Country',
              name: 'Portugal',
            },
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: CONTACT_INFO.phoneDisplay,
              email: CONTACT_INFO.email,
              contactType: 'customer service',
              availableLanguage: ['Portuguese', 'English', 'French'],
            },
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          sameAs: [
            CONTACT_INFO.instagramUrl,
            `https://wa.me/${CONTACT_INFO.whatsappNumber}`,
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: t.services.title,
            itemListElement: t.services.items.map((srv, idx) => ({
              '@type': 'Offer',
              position: idx + 1,
              itemOffered: {
                '@type': 'Service',
                '@id': `${baseUrl}#service-${srv.id}`,
                name: srv.title,
                description: srv.description,
                provider: {
                  '@id': `${baseUrl}#organization`,
                },
                areaServed: {
                  '@type': 'City',
                  name: 'Leiria',
                },
              },
            })),
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}#website`,
          url: baseUrl,
          name: `${CONTACT_INFO.companyName} — ${CONTACT_INFO.specialty}`,
          description: t.meta.description,
          publisher: {
            '@id': `${baseUrl}#organization`,
          },
          inLanguage: ['pt-PT', 'en', 'fr'],
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: t.meta.title,
          description: t.meta.description,
          isPartOf: {
            '@id': `${baseUrl}#website`,
          },
          about: {
            '@id': `${baseUrl}#organization`,
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: absoluteHeroImgUrl,
            width: 1280,
            height: 720,
            caption: t.hero.title,
          },
          inLanguage: HREFLANG_MAP[lang],
          breadcrumb: {
            '@id': `${canonicalUrl}#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: CONTACT_INFO.companyName,
              item: canonicalUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: t.nav.services,
              item: `${canonicalUrl}#servicos`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: t.nav.gallery,
              item: `${canonicalUrl}#galeria`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: t.nav.requestQuote,
              item: `${canonicalUrl}#orcamento`,
            },
          ],
        },
        ...t.gallery.items.map((item) => ({
          '@type': 'ImageObject',
          '@id': `${baseUrl}#gallery-${item.id}`,
          name: item.title,
          caption: item.description,
          contentUrl: new URL(item.imageUrl, origin).href,
          url: new URL(item.imageUrl, origin).href,
          creator: {
            '@id': `${baseUrl}#organization`,
          },
        })),
      ],
    };

    let scriptEl = document.getElementById(
      'schema-org-jsonld'
    ) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'schema-org-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaGraph);
  }, [lang, t]);

  return null;
};
