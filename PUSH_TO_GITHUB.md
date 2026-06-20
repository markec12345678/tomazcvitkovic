# Push na GitHub — navodila

## Stanje projekta
Vse spremembe so committane lokalno. Zadnji commit:
```
26c2d0a Tomaž Cvitkovič s.p. — spletna stran za popravila strojev
```

## KAKO PUSHATI NA GITHUB

### Možnost 1: Preko PAT (Personal Access Token)

1. Pojdi na https://github.com/settings/tokens
2. Klikni **"Generate new token (classic)"**
3. Poimenuj token (npr. `tomazcvitkovic-push`)
4. Označi scope **`repo`** (full control of private repositories)
5. Klikni **"Generate token"**
6. Kopiraj token (začne se z `ghp_`)

Nato zaženi v terminalu (zamenjaj `TVOJ_TOKEN`):
```bash
cd /home/z/my-project
git push -f https://markec12345678:TVOJ_TOKEN@github.com/markec12345678/tomazcvitkovic.git main
```

### Možnost 2: Preko git credential helper

Po ustvarjanju PAT-ja zaženi:
```bash
cd /home/z/my-project
git config --global credential.helper store
git push -f origin main
# Vnesi uporabniško ime: markec12345678
# Vnesi geslo: (prilepi PAT token)
```

### Možnost 3: SSH ključ (bolj varno, dolgoročno)

1. Generiraj SSH ključ:
```bash
ssh-keygen -t ed25519 -C "tomazc1982@gmail.com"
```
2. Prikopi javni ključ (~/.ssh/id_ed25519.pub) na https://github.com/settings/keys
3. Spremeni remote v SSH:
```bash
cd /home/z/my-project
git remote set-url origin git@github.com:markec12345678/tomazcvitkovic.git
git push -f origin main
```

## ⚠️ Pomembno: FORCE PUSH (-f)

Ker se lokalna in GitHub zgodovina razlikujeta (GitHub ima staro AstroWind, lokalno novo Next.js stran),
je potreben **force push** (`-f`). To bo popolnoma nadomestilo GitHub vsebino z novo stranjo.

## Kaj je v commitu

- Popolnoma preurejena spletna stran (Next.js 16 + TypeScript + Tailwind 4)
- Premium vizualni dizajn (glass morphism, serif tipografija)
- WhatsApp obrazec za povpraševanja (brez baze)
- Kalkulator ocene popravila
- Galerija s kategorijami in lightbox
- 8 nasvetov za vzdrževanje strojev
- Dark mode toggle
- PWA (manifest, ikone, theme-color)
- SEO: JSON-LD (LocalBusiness, FAQPage, BreadcrumbList, WebSite), sitemap.xml, robots.txt
- Vsebina slovenska, lokalno prilagojena (Bela Krajina)

## Varnost

- `.env` in `db/custom.db` sta v `.gitignore` in ne bosta pushana
- Ustvarjen je `.env.example` kot predloga
