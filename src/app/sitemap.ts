import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tomazcvitkovic.si";
  const lastModified = new Date();

  // Glavna stran z vsemi sekcijami (single-page application)
  const sections = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/#storitve", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/#o-nas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/#galerija", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/#kalkulator", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/#nasveti", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/#povprasevanja", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/#faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/#kontakt", priority: 0.9, changeFrequency: "yearly" as const },
  ];

  return sections.map((s) => ({
    url: `${base}${s.path}`,
    lastModified,
    changeFrequency: s.changeFrequency,
    priority: s.priority,
  }));
}
