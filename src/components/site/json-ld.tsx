import { company, services } from "@/lib/company";

/**
 * JSON-LD Structured Data (Schema.org) za Tomaž Cvitkovič s.p.
 * - LocalBusiness / HomeAndConstructionBusiness
 * - Izboljša SEO in prikaz v Google rezultatih (rich snippets)
 *
 * Viri podatkov: javni registri (CompanyWall, ebonitete.si, bizi.si, najdi.si)
 * + spletna stran podjetja.
 */
export function JsonLd() {
  const openingHoursSpec = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://tomazcvitkovic.si/#business",
    name: company.fullName,
    alternateName: company.name,
    description: `${company.activity}. Samostojni podjetnik iz Griblje (občina Metlika, Bela Krajina). Popravila kmetijske in gozdarske mehanizacije, kosilnic, vrtne laskarice, motornih žag, skuterjev ter kovinske konstrukcije in zaključna gradbena dela.`,
    url: "https://tomazcvitkovic.si",
    telephone: company.contact.phoneIntl,
    email: company.contact.email,
    image: "https://tomazcvitkovic.si/og-image.jpg",
    logo: "https://tomazcvitkovic.si/logo.svg",
    priceRange: "€€",
    foundingDate: `${company.since}-01-01`,
    vatID: company.registry.vat,
    taxID: company.registry.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postal,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: "SI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.6325,
      longitude: 15.3147,
    },
    areaServed: company.areas.map((a) => ({
      "@type": "City",
      name: a,
    })),
    openingHoursSpecification: openingHoursSpec,
    openingHours: "Mo-Fr 07:00-17:00",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.contact.phoneIntl,
        contactType: "customer service",
        availableLanguage: ["Slovenian", "Croatian"],
        areaServed: "SI",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Storitve",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    sameAs: [
      "https://www.companywall.si/podjetje/tomaz-cvitkovic-sp/MM9y70pD",
      "https://www.bizi.si/TOMAZ-CVITKOVIC-S-P/maticno-podjetje",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
