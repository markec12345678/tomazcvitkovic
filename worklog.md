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
