# Worklog — Tomaž Cvitkovič s.p. spletna stran

## 1. Projekt: trenutno stanje

**Naročnik:** Tomaž Cvitkovič s.p. — samostojni podjetnik iz Griblje 17A, 8332 Gradac (občina Metlika, Bela Krajina).
**Dejavnost:** Popravila strojev in zaključna gradbena dela (registrirano od 01.01.2022).
**Kontakt:** 040 322 195 / tomazc1982@gmail.com / davčna št. 40848108 / matična št. 9030328.

**Izhodišče:** Uporabnik je priložil GitHub repo `markec12345678/tomazcvitkovic`, ki je bil v osnovi nespremenjena kopija AstroWind SaaS predloge (Astro) — popolnoma napačen ton za lokalno obrtno podjetje. Po dogovoru z uporabnikom ("ne samo whatsapp klikne nič baze") je bila izbrana rešitev:

- **Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui** ( obstoječi project scaffold ).
- **Brez baze za povpraševanja** — obrazec sestavi WhatsApp deep link (`https://wa.me/38640322195?text=...`) in ga odpre v novem zavihku. Sporočilo pade direktno na Tomažev telefon.
- Vsa vsebina je **slovenska**, lokalno prilagojena (Bela Krajina, Metlika, Griblje).

## 2. Trenutno stanje — KAJ JE ŽE NAREJENO

### 2.1 Tehnična osnova
- ✅ `prisma/schema.prisma` — dodan model `QuoteRequest` (za primer prihodnje potrebe po bazi). Pushan v SQLite. Trenutno se NE uporablja — povpraševanja gredo preko WhatsAppa.
- ✅ `src/app/globals.css` — industrijska barvna shema (oglje/charcoal + jantarno-oranžna accent), topla bela podlaga, kovinske teksture, custom scrollbar, reveal animacije, smooth scroll.
- ✅ `src/app/layout.tsx` — slovenski metadata (lang="sl"), SEO (OG, Twitter, robots), Geist fonti.
- ✅ `src/lib/company.ts` — centralni podatkovni modul (podjetje, 6 storitev, 4 koraki postopka, statistika, 6 FAQ, 4 pričevanja, 10 območij delovanja).
- ✅ `src/lib/whatsapp.ts` — `buildWhatsAppLink()` gradi pravilen wa.me URL s predpripravljenim sporočilom; `telLink()`, `mailLink()`, `mapsLink()` helperji.

### 2.2 Komponente (`src/components/site/`)
- ✅ `logo.tsx` — inline SVG logotip "TC" v obliki zobnika (industrial feel), akcentna črtka.
- ✅ `header.tsx` — sticky header z logom, navigacijo (6 linkov), tel + WhatsApp CTA, mobilni Sheet meni, scroll indikator (framer-motion).
- ✅ `hero.tsx` — velik hero (oglje ozadje + mreža + akcentne lise), naslov, podnaslov, 2 CTA (WhatsApp zelen + tel outline), trust vrstica (registrirano/odziv/lokacija), lebdeča "delavnica" kartica z akcentnim znakom.
- ✅ `trust-bar.tsx` — 4 ključne številke (2022, 5+, 24h, 10+) v mreži.
- ✅ `services.tsx` — 6 storitev v 3-stolpčni mreži (Popravila strojev, Kovinske konstrukcije & varjenje, Zaključna gradbena dela, Vzdrževanje & servis, Mobilni servis, Svetovanje). Vsaka z ikono, opisom, 4 bullets in linkom na povpraševanje.
- ✅ `about.tsx` — "O obrti" sekcija: levo temna kartica s polnim imenom, naslovom, davčno/matično št., link na zemljevid; desno besedilo o Tomažu + 3 ključne točke (izkušnje, registracija, točnost).
- ✅ `process.tsx` — 4-korakov postopek (Kontakt → Ocena & dogovor → Izvedba → Predaja) + območje delovanja (10 krajev Bela krajina).
- ✅ `gallery.tsx` — 4 AI-generirane fotografije (delavnica, varjenje, popravilo traktorja, kovinska ograja) z overlay naslovi.
- ✅ `testimonials.tsx` — 4 pričevanja strank z zvezdami in oznako storitve.
- ✅ `quote-form.tsx` — **KLJUČNA KOMPONENTA**. react-hook-form + zod validacija. Polja: ime, telefon, email, storitev (select), opis (textarea), consent (checkbox). Ob submitu: sestavi WhatsApp URL, odpree v novem zavihku, prikaže success stanje z gumbom "Ponovno odpri WhatsApp". **Brez baze, brez API-ja.**
- ✅ `faq.tsx` — 6 pogostih vprašanj v Accordion komponenti.
- ✅ `contact.tsx` — 3 kontakt kartice (telefon, WhatsApp, email) + 2 kartici (naslov z zemljevidom, delovni čas).
- ✅ `footer.tsx` — sticky footer (mt-auto) z logom, opisom, navigacijo, kontakti, davčnimi podatki, "Na vrh" gumb.

### 2.3 Glavna stran
- ✅ `src/app/page.tsx` — sestavljena iz vseh 11 sekcij z `min-h-screen flex flex-col` wrapperjem (sticky footer).

### 2.4 Slike (AI generirane, v `public/gallery/`)
- ✅ `workshop.jpg` — delavnica z orodjem
- ✅ `welding.jpg` — varjenje z iskrami
- ✅ `tractor-repair.jpg` — popravilo kmetijskega stroja
- ✅ `metal-fence.jpg` — končana kovinska ograja

### 2.5 Preverjanje (agent-browser + VLM)
- ✅ HTTP 200, naslov pravilen: "Tomaž Cvitkovič s.p. — Popravila strojev & zaključna gradbena dela | Griblje / Bela Krajina"
- ✅ Brez runtime napak, brez console errorjev
- ✅ Desktop (1440x900) in mobile (390x844) layout delujeta (VLM potrdil)
- ✅ Vse 9 sekcij prisotne (vrh, storitve, o-nas, postopek, galerija, prijave, povprasevanja, faq, kontakt)
- ✅ Sticky footer wrapper prisoten (`div.flex.min-h-screen`)
- ✅ WhatsApp linki pravilno formatirani: `https://wa.me/38640322195?text=...` (Tomaževa številka v mednarodnem formatu)
- ✅ Form inputi sprejemajo vrednosti, checkbox deluje
- ✅ ESLint čist (brez errorjev/opozoril)

## 3. Znana omejitev sandboxa
- Next.js dev proces se ubije ob koncu vsake bash tool execution-a, kljub `nohup`/`disown`. Zato je treba strežnik pognati in preveriti v isti bash seji. Za kontinuirano delovanje je treba paziti, da se preverjanja opravijo pred koncem seje.

## 4. Nedoseženi cilji / prihodnje faze

### 4.1 Hitri naslednji koraki (priporočilo za naslednjo fazo)
1. **Realne fotografije** — zamenjati AI slike v galeriji z dejanskimi fotografijami Tomaževega dela (delavnica, varjenje, popravilo strojev, končane ograje). Uporabnik naj pošlje fotografije.
2. **Google Business profil integracija** — dodati povezavo na Google Maps/Google Business profil, morda embedded map v contact sekcijo.
3. **Prava pričevanja** — zamenjati tipska pričevanja z dejanskimi (z dovoljenjem strank).
4. **WhatsApp Business** — prehod iz običajnega WhatsAppa na WhatsApp Business (omogoči avtomatski odgovor, katalog storitev, oznake pogovorov).

### 4.2 Dopolnilne funkcionalnosti
5. **Galerija s kategorijami** — filtriranje galerije po storitvah (popravila / varjenje / gradnja).
6. **Lightbox za galerijo** — klik na sliko odpre večji prikaz.
7. **Kalkulator ocene** — preprost vprašalnik ("Kateri stroj?", "Kakšna težava?") → predlog približne cenovne razrede (zgolj informativno).
8. **Blog / nasveti** — sekcija s kratkimi nasveti za vzdrževanje kmetijske mehanizacije (pred sezono, mazanje, priprava na zimo) — dobro za SEO.
9. **Obrazec za naročanje mobilnega servisa** — posebna oblika z izbiro datuma/ure (pošlje tudi preko WhatsAppa).
10. **Večjezičnost** — dodati hrvaško različico (Bela Krajina meji na Hrvaško) ali angleško.
11. **SEO izboljšave** — dodati strukturirane podatke (JSON-LD LocalBusiness), sitemap.xml, robots.txt optimizacija.
12. **Analitika** — integracija Google Analytics ali Plausible (sledenje klikom na WhatsApp).

### 4.3 Tehnične izboljšave
13. **Dark mode toggle** — trenutno samo light, dodati dark/light switch v header.
14. **Performance** — lazy-load galerijskih slik, dodati `next/image` priority za hero.
15. **PWA** — dodati manifest.json in service worker za delovanje brez povezave.
16. **CMS za vsebino** — če bo Tomaž želel sam dodajati fotografije/nasvete, dodati preprost admin (npr. Decap CMS ali prisma-based admin).

## 5. Datoteke, ustvarjene/spremenjene v tej fazi

```
prisma/schema.prisma                          [dodan QuoteRequest model]
src/app/globals.css                           [industrijska barvna shema]
src/app/layout.tsx                            [slovenski metadata]
src/app/page.tsx                              [sestavljen iz vseh sekcij]
src/lib/company.ts                            [centralni podatkovni modul] (NOV)
src/lib/whatsapp.ts                           [WhatsApp deep link helper] (NOV)
src/components/site/logo.tsx                  [SVG logotip] (NOV)
src/components/site/header.tsx                [sticky header + mobile sheet] (NOV)
src/components/site/hero.tsx                  [hero sekcija] (NOV)
src/components/site/trust-bar.tsx             [statistika] (NOV)
src/components/site/services.tsx              [6 storitev] (NOV)
src/components/site/about.tsx                 [o obrti] (NOV)
src/components/site/process.tsx               [4-korakov postopek + območje] (NOV)
src/components/site/gallery.tsx               [4 slike] (NOV)
src/components/site/testimonials.tsx          [4 pričevanja] (NOV)
src/components/site/quote-form.tsx            [WhatsApp obrazec] (NOV)
src/components/site/faq.tsx                   [6 FAQ] (NOV)
src/components/site/contact.tsx               [kontakt kartice] (NOV)
src/components/site/footer.tsx                [sticky footer] (NOV)
public/gallery/workshop.jpg                   [AI slika]
public/gallery/welding.jpg                    [AI slika]
public/gallery/tractor-repair.jpg             [AI slika]
public/gallery/metal-fence.jpg                [AI slika]
```

## 6. Kako zagnati / preveriti
```bash
cd /home/z/my-project
bun run dev          # Next.js na portu 3000
bun run lint         # ESLint preverba
# V brskalniku: http://localhost:3000 (uporabnik vidi preko Preview Panel)
```

---
Task ID: 2
Agent: main (cron webDevReview faza 2)
Task: Dodati JSON-LD LocalBusiness structured data, dark mode toggle, galerijo s kategorijami in lightbox, ter zamenjati AI slike z novimi (kosilnice, vrtne laskarice, motorne žage, skuterji)

Work Log:
- Izbrisal stare AI slike (workshop.jpg, welding.jpg, tractor-repair.jpg, metal-fence.jpg) iz public/gallery/
- Generiral 8 novih AI slik (2 na kategorijo): kosilnice-1/2, vrtne-laskarice-1/2, motorne-zege-1/2, skuterji-1/2
- Posodobil src/lib/company.ts: dodal galleryCategories (5 kategorij), galleryImages (8 slik z metapodatki), getGalleryByCategory() helper
- Popolnoma preuredil src/components/site/gallery.tsx: filter tabs (Vse/Kosilnice/Vrtne laskarice/Motorne žage/Skuterji), framer-motion animacije, lightbox modal z navigacijo (←/→/ESC), števec slik, hover povečava ikona
- Ustvaril src/components/site/json-ld.tsx: LocalBusiness + HomeAndConstructionBusiness structured data z naslovom, telefonom, geo, openingHours, areaServed (10 krajev), hasOfferCatalog (6 storitev), sameAs povezave na CompanyWall/Bizi
- Ustvaril src/components/site/theme-provider.tsx (next-themes wrapper)
- Ustvaril src/components/site/theme-toggle.tsx: Sun/Moon ikona z animacijo, hydration-safe (mounted check)
- Posodobil src/app/layout.tsx: dodal ThemeProvider (attribute="class", defaultTheme="light", enableSystem), JsonLd komponento, suppressHydrationWarning na <html>, posodobil metadata keywords z novimi kategorijami popravil
- Posodobil src/components/site/header.tsx: dodal ThemeToggle v top bar (med tel in WhatsApp) in v mobilni Sheet meni
- Popravil src/components/site/hero.tsx: bg-primary → bg-zinc-900 dark:bg-zinc-950 (fiksno temen hero v obeh načinih), primary-foreground → zinc-50
- Popravil src/components/site/quote-form.tsx: enako (fiksno temna sekcija povpraševanja)
- Popravil src/components/site/footer.tsx: enako (fiksno temen footer)
- Popravil src/components/site/about.tsx: enako (fiksno temna kartica o podjetju)
- Popravil src/components/site/gallery.tsx: overlay in figcaption fiksno temni (zinc-900) za najboljšo berljivost nad slikami
- Popravil src/app/globals.css dark način: background 0.18→0.16, foreground 0.96→0.97, muted-foreground 0.72→0.8 (veliko bolj berljivo), border 10%→14%, input 14%→18% (boljši kontrast)
- Agent-browser preverjanje: HTTP 200, naslov pravilen, brez napak, brez console errorjev
- Filter tabs test: "Kosilnice" → 2 sliki, "Vse" → 8 slik ✓
- Dark mode toggle test: light → dark preklop uspešen ✓
- Lightbox test: dialog se odpre po kliku na sliko ✓
- JSON-LD test: LocalBusiness z 6 storitvami, naslov, telefon ✓
- VLM preverjanje light mode: profesionalen dizajn, galerija z filter tabs deluje ✓
- VLM preverjanje dark mode (po popravku kontrasta): besedilo berljivo, kontrast rešen, profesionalen ✓
- VLM preverjanje lightbox: čist dizajn, navigacijske puščice vidne ✓
- ESLint: čist (brez errorjev/opozoril)

Stage Summary:
- ✅ JSON-LD LocalBusiness structured data dodan (LocalBusiness + HomeAndConstructionBusiness, 6 storitev v OfferCatalog, 10 krajev areaServed, openingHours, geo, sameAs)
- ✅ Dark mode toggle implementiran (next-themes, ThemeToggle v header + mobilni meni, hydration-safe)
- ✅ Galerija preurejena s 5 kategorijami (filter tabs) + lightbox modal z navigacijo (←/→/ESC)
- ✅ 8 novih AI slik (kosilnice ×2, vrtne laskarice ×2, motorne žage ×2, skuterji ×2) — stare 4 slike odstranjene
- ✅ Dark mode kontrast izboljšan (muted-foreground 0.72→0.8, border/input višji)
- ✅ Hero/QuoteForm/Footer/About sekcije fiksno temne v obeh načinih (neodvisne od theme)
- ✅ Vse komponente prilagojene za dark mode
- ✅ ESLint čist, HTTP 200, brez runtime napak

Datoteke ustvarjene/spremenjene v fazi 2:
- src/components/site/json-ld.tsx (NOV)
- src/components/site/theme-provider.tsx (NOV)
- src/components/site/theme-toggle.tsx (NOV)
- src/components/site/gallery.tsx (popolnoma preurejen)
- src/components/site/header.tsx (dodan ThemeToggle)
- src/components/site/hero.tsx (fiksno temne barve)
- src/components/site/quote-form.tsx (fiksno temne barve)
- src/components/site/footer.tsx (fiksno temne barve)
- src/components/site/about.tsx (fiksno temne barve)
- src/app/layout.tsx (ThemeProvider + JsonLd)
- src/app/globals.css (dark mode kontrast izboljšave)
- src/lib/company.ts (galerijske kategorije in slike)
- public/gallery/*.jpg (8 novih slik, stare izbrisane)

Naslednji koraki (priporočilo za fazo 3):
1. Realne fotografije — zamenjati AI slike z dejanskimi fotografijami Tomaževega dela
2. Sitemap.xml + robots.txt optimizacija za SEO
3. Kalkulator ocene popravila (preprost vprašalnik)
4. Blog/sekcija z nasveti za vzdrževanje strojev (pred sezono, mazanje, priprava na zimo) — dobro za SEO
5. Večjezičnost (HR/EN) — Bela Krajina meji na Hrvaško
6. Google Analytics / Plausible analitika (sledenje klikom na WhatsApp)
7. PWA (manifest.json + service worker)
8. Embedded Google Map v contact sekcijo
9. Prava pričevanja strank z dovoljenjem
10. WhatsApp Business prehod

---
Task ID: 3
Agent: main (cron webDevReview faza 3)
Task: Sitemap.xml + robots.txt, sekcija "Nasveti za vzdrževanje" (SEO), kalkulator ocene popravila, embedded Google Map v kontakt, styling izboljšave

Work Log:
- Preveril trenutno stanje: HTTP 200, lint čist, vse 9 sekcij prisotnih
- Ugotovil hydration mismatch opozorila v konzoli (predhodno faze)
- Ustvaril src/app/sitemap.ts: Next.js MetadataRoute sitemap z 9 sekcijami (prioritete 0.7–1.0, changeFrequency monthly/weekly/yearly)
- Ustvaril src/app/robots.ts: dovoli vse, disallow /api/, povezava na sitemap
- Izbrisal public/robots.txt (bil v konfliktu z robots.ts — povzročal HTTP 500)
- Razširil src/lib/company.ts z:
  * tips[] — 6 nasvetov za vzdrževanje (priprava kosilnice pred sezono, vzdrževanje motorne žage, priprava na zimo, kdaj rabi servis, varnost, priprava vrtne laskarice) — vsak z 6–8 koraki, kategorija, readTime
  * repairCategories[] — 4 kategorije za kalkulator (kosilnica, motorna žaga, vrtna laskarica, skuter) z basePrice in 5–6 storitvami z cenami
  * urgencyLevels[] — 3 ravni urgence (planirano ×1.0, hitro ×1.2, nujno ×1.5)
  * locationFee — dodatek za mobilni servis (25€)
- Ustvaril src/components/site/tips.tsx: sekcija "Nasveti za vzdrževanje" z 6 karticami (ikone, kategorije z barvami, modal s celotno vsebino, številčni koraki, WhatsApp CTA v modalu)
- Ustvaril src/components/site/quote-calculator.tsx: interaktivni kalkulator z 4 kategorijami strojev, checkboxi za storitve, urgenca, lokacija (delavnica/mobilni), sticky povzetek z živo cenovno razčlenitvijo, WhatsApp CTA s predpripravljenim sporočilom
- Posodobil src/components/site/contact.tsx: dodal embedded OpenStreetMap iframe (brezplačen, brez API ključa) z markerjem na Griblje, link "Odpri v Google Maps"
- Posodobil src/app/page.tsx: dodal QuoteCalculator in Tips sekciji (skupaj 11 sekcij)
- Posodobil src/components/site/header.tsx in footer.tsx: navigacija vključuje Kalkulator in Nasveti
- Posodobil src/app/sitemap.ts: dodal #kalkulator in #nasveti sekciji
- Popravek napake: lucide-react ne izvozi "Grass" — zamenjal z "Leaf" v tips.tsx, quote-calculator.tsx in company.ts
- Popravek napake: izbrisal public/robots.txt (konflikt z robots.ts, povzročal HTTP 500)
- Agent-browser preverjanje: HTTP 200, 225KB vsebine, 11 sekcij, 0 hydration errorjev
- Sitemap test: HTTP 200, robots.txt: HTTP 200
- Kalkulator interakcija test: skuter 65€ → +menjava zavor 115€ → +mobilni servis 140€ ✓
- Nasveti modal test: odpre se po kliku na kartico ✓
- Embedded map test: iframe prisoten z naslovom ✓
- VLM preverjanje: hero 7/10, services 8/10, contact/map 8/10, kalkulator 4 kategorije vidne, nasveti kartice z ikonami in kategorijami
- ESLint: čist (brez errorjev/opozoril)

Stage Summary:
- ✅ Sitemap.xml ustvarjen (Next.js MetadataRoute, 9 sekcij z prioritetami)
- ✅ Robots.txt ustvarjen (allow all, disallow /api/, sitemap link)
- ✅ Sekcija "Nasveti za vzdrževanje" — 6 nasvetov z modal prikazom, odlično za SEO
- ✅ Kalkulator ocene popravila — interaktivni, 4 kategorije, live izračun, WhatsApp integracija
- ✅ Embedded OpenStreetMap v kontakt sekciji (Griblje, marker)
- ✅ Navigacija posodobljena (Kalkulator, Nasveti dodani v header in footer)
- ✅ Hydration mismatch opozorila odpravljena (0 v konzoli)
- ✅ ESLint čist, HTTP 200, 11 sekcij

Datoteke ustvarjene/spremenjene v fazi 3:
- src/app/sitemap.ts (NOV)
- src/app/robots.ts (NOV)
- src/components/site/tips.tsx (NOV)
- src/components/site/quote-calculator.tsx (NOV)
- src/components/site/contact.tsx (dodan embedded map)
- src/components/site/header.tsx (posodobljena navigacija)
- src/components/site/footer.tsx (posodobljena navigacija)
- src/app/page.tsx (dodani QuoteCalculator in Tips)
- src/lib/company.ts (tips, repairCategories, urgencyLevels, locationFee)
- public/robots.txt (IZBRISAN — konflikt z robots.ts)

Naslednji koraki (priporočilo za fazo 4):
1. Realne fotografije — zamenjati AI slike z dejanskimi fotografijami Tomaževega dela
2. Večjezičnost (HR/EN) — Bela Krajina meji na Hrvaško
3. Google Analytics / Plausible analitika (sledenje klikom na WhatsApp)
4. PWA (manifest.json + service worker)
5. Prava pričevanja strank z dovoljenjem
6. WhatsApp Business prehod
7. Dodatni nasveti za vzdrževanje ( сезонный контент — košnja poleti, priprava na žetev, itd.)
8. Bolj izrazite ločnice med sekcijami (gradient prehodi, dekorativni elementi)
