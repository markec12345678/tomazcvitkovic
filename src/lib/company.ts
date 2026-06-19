// Osrednji podatki o podjetju Tomaž Cvitkovič s.p.
// Vir: javni registri (CompanyWall, ebonitete.si, bizi.si, najdi.si) — Griblje 17A, 8332 Gradac.

export const company = {
  name: "Tomaž Cvitkovič s.p.",
  fullName:
    "Popravila strojev in zaključna gradbena dela Tomaž Cvitkovič s.p.",
  shortName: "Tomaž Cvitkovič s.p.",
  tagline: "Popravila strojev & zaključna gradbena dela",
  since: 2022,
  activity: "Popravila strojev in zaključna gradbena dela",
  address: {
    street: "Griblje 17A",
    postal: "8332",
    city: "Gradac",
    municipality: "občina Metlika",
    region: "Bela Krajina",
    country: "Slovenija",
  },
  contact: {
    phoneDisplay: "040 322 195",
    phoneIntl: "+38640322195",
    whatsapp: "38640322195",
    email: "tomazc1982@gmail.com",
  },
  registry: {
    vat: "40848108", // davčna številka
    maticna: "9030328", // matična številka
  },
  hours: [
    { day: "Ponedeljek–Petek", time: "7:00 – 17:00" },
    { day: "Sobota", time: "Po dogovoru" },
    { day: "Nedelja", time: "Zaprto" },
  ],
  areas: [
    "Metlika",
    "Črnomelj",
    "Semič",
    "Gradac",
    "Vinica",
    "Podzemelj",
    "Kanižarica",
    "Drinje",
    "Griblje",
    "Krmačina",
  ],
} as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: string; // lucide icon name (mapiran v komponenti)
};

export const services: Service[] = [
  {
    id: "popravila-strojev",
    title: "Popravila strojev",
    short: "Dijagnostika in popravila kmetijskih, gozdarskih in industrijskih strojev.",
    description:
      "Popravila in vzdrževanje kmetijske ter gozdarske mehanizacije — traktorji, kosače, drobilniki, sekalniki, obesilniki in druge delovne stroje. Hitra diagnostika, pošteni nasvet in trajna rešitev.",
    bullets: [
      "Motorji in menjalniki",
      "Hidravlika in pnevmatika",
      "Elektro instalacije strojev",
      "Rezervni deli in servis na lokaciji",
    ],
    icon: "Wrench",
  },
  {
    id: "kovinske-konstrukcije",
    title: "Kovinske konstrukcije & varjenje",
    short: "Izdelava in popravila kovinskih konstrukcij, ograj, nosilcev in okovij.",
    description:
      "Kvalitetno varjenje jekla, aluminija in drugih kovin. Izdelava konstrukcij po meri, popravila strojnih komponent, okovij za kmetijstvo in gradbeništvo ter zaščitnih elementov.",
    bullets: [
      "Varjenje MIG/MAG in TIG",
      "Ograje, nosilci, okovje",
      "Popravila strojnih delov",
      "Zaščitne in nosilne konstrukcije",
    ],
    icon: "Flame",
  },
  {
    id: "zakljucna-gradbena-dela",
    title: "Zaključna gradbena dela",
    short: "Zaključna dela na gradbiščih in priprava objektov za uporabo.",
    description:
      "Zaključna gradbena dela za stanovanjske in gospodarske objekte. Priprava površin, montaže, manjši zidarski zaključni posegi ter sodelovanje z gradbenimi izvajalci v Beli krajini in širše.",
    bullets: [
      "Zaključne montaže in popravki",
      "Priprava objektov za predajo",
      "Manjši zidarski posegi",
      "Sodelovanje z izvajalci",
    ],
    icon: "Hammer",
  },
  {
    id: "vzdrzevanje",
    title: "Vzdrževanje & servis",
    short: "Redno vzdrževanje strojev za daljšo življenjsko dobo in manj okvar.",
    description:
      "Preventivno vzdrževanje kmetijske in gozdarske mehanizacije pred sezono in v njej. Pravočasno odkrivanje obrabe podaljša življenjsko dobo strojev in prepreči drage nepričakovane okvare.",
    bullets: [
      "Pregledi pred sezono",
      "Menjava obrabljenih delov",
      "Mazanje in nastavitve",
      "Storitev na lokaciji",
    ],
    icon: "Settings",
  },
  {
    id: "mobilni-servis",
    title: "Mobilni servis na lokaciji",
    short: "Prihod na domačijo ali gradbišče po Beli krajini in okolici.",
    description:
      "Kadar stroj ne more priti do delavnice, pridem jaz do njega. Mobilni servis po Beli krajini in okolici — prihod na kmetijo, gozd ali gradbišče z osnovno opremo za hitrejšo rešitev.",
    bullets: [
      "Servis na kmetiji",
      "Pomoč v gozdu in na njivi",
      "Hitri odziv v sezoni",
      "Dogovor za termin",
    ],
    icon: "Truck",
  },
  {
    id: "svetovanje",
    title: "Svetovanje & ocena stanja",
    short: "Poštena ocena ali se stroj splača popraviti ali zamenjati.",
    description:
      "Pred drago popravilo vam povem, ali se stroj sploh splača popraviti. Ocenim stanje, predlagam najbolj ekonomično rešitev in po potrebi pomagam pri iskanju rabljenih ali novih rezervnih delov.",
    bullets: [
      "Ocena stanja stroja",
      "Kalkulacija popravila",
      "Priporočila za nadaljevanje",
      "Iskanje rezervnih delov",
    ],
    icon: "ClipboardCheck",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Kontakt",
    description:
      "Pokličete ali pišete preko WhatsAppa. Opišete težavo ali potrebo — po potrevi priložite fotografijo.",
  },
  {
    n: "02",
    title: "Ocena & dogovor",
    description:
      "Ocenim, kaj je potrebno in se z vami dogovorim za termin. Pred drago popravilo vam povem realno ceno.",
  },
  {
    n: "03",
    title: "Izvedba",
    description:
      "Popravilo ali zaključno delo izvedem pošteno, čisto in trajno — v delavnici ali na lokaciji pri vas.",
  },
  {
    n: "04",
    title: "Predaja",
    description:
      "Preverimo delovanje skupaj. Dobite jasno račun in nasvet za nadaljnje vzdrževanje.",
  },
];

export const stats = [
  { value: "2022", label: "Registrirana obrt", suffix: "" },
  { value: "5", label: "Področij delovanja", suffix: "+" },
  { value: "24", label: "Ure odzivnosti", suffix: "h" },
  { value: "10", label: "Krajev v dosegu", suffix: "+" },
];

export const faqs = [
  {
    q: "Ali opravljate tudi servis na moji kmetiji?",
    a: "Da. Kadar stroj ne more priti do delavnice, pridem jaz do njega — po Beli krajini in okolici. Dogovorimo se za termin preko telefona ali WhatsAppa.",
  },
  {
    q: "Kako hitro lahko pridete?",
    a: "V sezoni si prizadevam za odziv v 24 urah za nujne primere (okvara v njivi ali gozdu). Za manjše popravila in zaključna dela se termin dogovorimo vnaprej.",
  },
  {
    q: "Ali popravilo splača ali naj raje kupim nov stroj?",
    a: "Pred vsakim dražjim popravilom vam pošteno povem, ali se stroj sploh splača popraviti. Včasih je boljša odločitev rabljen ali nov stroj — tudi to vam lahko svetujem.",
  },
  {
    q: "Katera področja pokrijete z zaključnimi gradbenimi deli?",
    a: "Zaključne montaže, priprava objektov za predajo, manjši zidarski zaključni posegi ter sodelovanje z gradbenimi izvajalci. Za večje posege vas povežem s preizkušenimi ekipami.",
  },
  {
    q: "Ali ste zavezanec za DDV?",
    a: "Podatki o davčnem statusu so javno dostopni (davčna št. 40848108). O načinu obračuna in izstavljenu računu se dogovorimo glede na vrsto storitve — povprašajte pri kontaktu.",
  },
  {
    q: "S kom naj kontaktiram za povpraševanje?",
    a: "Najhitreje preko WhatsAppa ali telefona na 040 322 195. Lahko tudi elektronsko na tomazc1982@gmail.com. Obrazec na spletni strani sestavi WhatsApp sporočilo namesto vas.",
  },
];

export const testimonials = [
  {
    name: "Stanislav K.",
    place: "Metlika",
    text: "Traktor mi je crknil sredi košnje. Tomaž je prišel istega dne na njivo, popravil in povem — pošteno in brez preplačila. Priporočam.",
    service: "Popravilo traktorja",
  },
  {
    name: "Ana in Janez",
    place: "Gradac",
    text: "Priprava kmetijskega objekta za predajo — vse narejeno čisto in po dogovoru. Zanesljiv in točen.",
    service: "Zaključna gradbena dela",
  },
  {
    name: "Marko B.",
    place: "Črnomelj",
    text: "Svetoval mi je, naj ne popravljam starega drobilnika ampak naj kupim rabljenega. Prihranil mi je denar. Pošten obrtnik.",
    service: "Svetovanje",
  },
  {
    name: "Jože M.",
    place: "Semič",
    text: "Ograja in nosilci za hlev po meri. Kvalitetno varjeno, vse po dogovoru. Vrnem se.",
    service: "Kovinske konstrukcije",
  },
];

// Poišči servis po id-ju
export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

// === GALLERY ===
export type GalleryCategory = {
  id: string;
  label: string;
  short: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: "vse", label: "Vse", short: "Vse kategorije" },
  { id: "kosilnice", label: "Kosilnice", short: "Popravila kosilnic za travo" },
  {
    id: "vrtne-laskarice",
    label: "Vrtne laskarice",
    short: "Popravila vrtne laskarice in motokultivatorjev",
  },
  {
    id: "motorne-zege",
    label: "Motorne žage",
    short: "Popravila verižnih motornih žag",
  },
  {
    id: "skuterji",
    label: "Skuterji",
    short: "Popravila skuterjev in motornih koles",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: string; // ujema se z galleryCategories.id (razen "vse")
  span?: string; // tailwind col-span utility
};

export const galleryImages: GalleryImage[] = [
  // Kosilnice
  {
    src: "/gallery/kosilnice-1.jpg",
    alt: "Popravilo bencinske kosilnice na delovni mizi v delavnici",
    title: "Bencinska kosilnica",
    caption: "Diagnostika in popravilo motorja",
    category: "kosilnice",
    span: "sm:col-span-2",
  },
  {
    src: "/gallery/kosilnice-2.jpg",
    alt: "Samohodna kosilnica na servisu, brusenje nožev in pregled",
    title: "Samohodna kosilnica",
    caption: "Brusenje nožev in servis",
    category: "kosilnice",
  },
  // Vrtne laskarice / freze / motokultivatorji
  {
    src: "/gallery/vrtne-laskarice-1.jpg",
    alt: "Popravilo vrtne laskarice, delo na nožih in motorju",
    title: "Vrtna laskarica",
    caption: "Popravilo nožev in motorja",
    category: "vrtne-laskarice",
  },
  {
    src: "/gallery/vrtne-laskarice-2.jpg",
    alt: "Servis majhnega motokultivatorja, menjava karburatorja",
    title: "Motokultivator",
    caption: "Menjava karburatorja",
    category: "vrtne-laskarice",
    span: "sm:col-span-2",
  },
  // Motorne žage
  {
    src: "/gallery/motorne-zege-1.jpg",
    alt: "Popravilo verižne motorne žage, demontaža verige in vodila",
    title: "Verižna žaga",
    caption: "Demontaža verige in vodila",
    category: "motorne-zege",
  },
  {
    src: "/gallery/motorne-zege-2.jpg",
    alt: "Servis motorne žage, čiščenje zobnika in verige",
    title: "Servis žage",
    caption: "Čiščenje zobnika in verige",
    category: "motorne-zege",
  },
  // Skuterji / motorna kolesa
  {
    src: "/gallery/skuterji-1.jpg",
    alt: "Popravilo skuterja v delavnici, dviganjen na stojalu, delo na motorju",
    title: "Skuter",
    caption: "Popravilo motorja",
    category: "skuterji",
    span: "sm:col-span-2",
  },
  {
    src: "/gallery/skuterji-2.jpg",
    alt: "Servis skuterja, menjava koles ali zavor",
    title: "Servis skuterja",
    caption: "Menjava zavor in koles",
    category: "skuterji",
  },
];

export function getGalleryByCategory(catId: string): GalleryImage[] {
  if (catId === "vse") return galleryImages;
  return galleryImages.filter((img) => img.category === catId);
}

// === NASVETI ZA VZDRŽEVANJE (tips za SEO) ===
export type Tip = {
  id: string;
  category: "pred-sezono" | "v-sezoni" | "pred-zimo" | "splosno";
  categoryLabel: string;
  title: string;
  excerpt: string;
  content: string[];
  icon: string; // lucide icon name
  readTime: string;
};

export const tips: Tip[] = [
  {
    id: "priprava-kosilnice-pred-sezono",
    category: "pred-sezono",
    categoryLabel: "Pred sezono",
    title: "Priprava kosilnice na pomlad",
    excerpt:
      "Kaj preveriti pred prvo košnjo — od nožev do olja. Preprost pregled predljuži življenjsko dobo kosilnice za več let.",
    content: [
      "1. Očistite kosilnico od lanskih ostankov trave in umazanije. Pomembno je, da je podvozje čisto — sodobne kosilnice imajo priključek za izpiranje z vodo.",
      "2. Preglejte nože — če so topi, jih nabrusite ali zamenjajte. Topi nož trgo travo namesto da jo reže, kar stresi rastlino in povzroča rumene lise.",
      "3. Zamenjajte olje v motorju (če je štiritaktni) in preverite nivo olja v rezervoarju.",
      "4. Očistite ali zamenjajte zračni filter. Zamašen filter zmanjšuje moč motorja in povečuje porabo goriva.",
      "5. Preverite svečko — očistite elektrodo ali zamenjajte, če je močno ogorela.",
      "6. Preverite napetost pogonskega jermena in kable (zavor, plina).",
      "7. Napolnite rezervoar s svežim gorivom. Če je bilo gorivo v rezervoarju čez zimo, ga zamenjajte — staro gorivo lahko poškoduje karburator.",
    ],
    icon: "Leaf",
    readTime: "3 min",
  },
  {
    id: "vzdrzevanje-motorne-zege",
    category: "v-sezoni",
    categoryLabel: "V sezoni",
    title: "Vzdrževanje motorne žage med sezone",
    excerpt:
      "Dnevni in tedenski pregledi, ki preprečujejo okvare v gozdu in podaljšujejo življenjsko dobo žage.",
    content: [
      "1. Dnevno očistite verigo in vodilo od smolne in lesnih ostankov. Čista verika boljše maže in manj se obrabi.",
      "2. Preverite napetost verige — na sredini vodila mora biti mogoče dvigniti veriko za cca 3–4 mm. Preveč napeta obrablja vodilo, preveč ohlapna pa lahko zleti.",
      "3. Preverite mazanje verige. Ko pustite žago na prostem teku, mora iz nje na beli list papirja pršiti tanka sled olja.",
      "4. Redno ostrite verigo z okroglim pilnikom pravega premera. Topi zobci povečujejo obremenitev motorja.",
      "5. Tedensko očistite zračni filter in preverite stanje zaganjalnika.",
      "6. Preverite, da je vodilo obrnjeno (vsakih 5–10 ostrenj ga obrnite za 180°), da se enakomerno obrablja.",
      "7. Pred vsako uporabo preverite varnostno zavoro (inercialno zavoro) — ko pritisnete roko na zavoro, mora ustaviti veriko v delčku sekunde.",
    ],
    icon: "TreePine",
    readTime: "4 min",
  },
  {
    id: "priprava-strojev-na-zimo",
    category: "pred-zimo",
    categoryLabel: "Pred zimo",
    title: "Priprava kmetijskih strojev na zimo",
    excerpt:
      "Kaj storiti, da bodo stroji spomladi zagnali brez težav. Pravilna prezimitev prihrani drage spomladanske popravila.",
    content: [
      "1. Temeljito očistite stroj od umazanije, blata in rastlinskih ostankov. Umazanija privlači vlago in povzroča rjo.",
      "2. Izpraznite rezervoar goriva ali dodajte stabilizator goriva. Staro gorivo čez zimo kvari in zamaši karburator.",
      "3. Pustite motor delovati, dokler ne porabi ves benzin iz karburatorja (samo za bencinske motorje).",
      "4. Zamenjajte olje v motorju in menjalniku. Staro olje vsebuje kisline, ki čez zimo korodirajo notranjost motorja.",
      "5. Podmažite vse gibljive dele (zoge, ročice, kable) z ustrezno mazivo.",
      "6. Preverite in po potrebi napolnite pnevmatike. Shranite stroj na suhem, prezračenem prostoru.",
      "7. Zaščitite izpušne odprtine in zračnike z vrečkami ali čepi, da miši in drugi glodavci ne pridejo noter.",
      "8. Odstranite akumulator (če ga imate) in ga shranite na toplem, ga enkrat na mesec napolnite.",
    ],
    icon: "Snowflake",
    readTime: "5 min",
  },
  {
    id: "prepoznavanje-tezav-kosilnica",
    category: "splosno",
    categoryLabel: "Splošno",
    title: "Kdaj kosilnica rabi servis?",
    excerpt:
      "Znaki, da kosilnica ni več v optimalnem stanju in kdaj poklicati strokovnjaka namesto da se lotite popravila sami.",
    content: [
      "1. Če kosilnica težko zaganja ali sploh ne zažene — najpogosteje je težava v svečki, karburatorju ali starem gorivu.",
      "2. Če med delom izpusti dim (moder = gorivo, črn = olje, bel = vlaga) — pokličite servis.",
      "3. Če kosilnica vibrira neobičajno ali se sliši kovinski zvok — takoj ustavite motor in preverite nože in vijake.",
      "4. Če reže neenakomerno ali pušča neco travo — topi noži ali nivo košnje ni pravilno nastavljen.",
      "5. Če se motor segreva prehitro — preverite hlajenje (zračne reže), nivo olja in obremenitev.",
      "6. Če opazite uhajanje olja ali goriva — takoj prekinite uporabo in pokličite servis. Tveganje požara.",
    ],
    icon: "AlertTriangle",
    readTime: "3 min",
  },
  {
    id: "varnost-pri-delu-s-stroji",
    category: "splosno",
    categoryLabel: "Splošno",
    title: "Varnostni nasveti pri delu z motornimi stroji",
    excerpt:
      "Osnovna varnostna pravila, ki jih vsak uporabnik motornih strojev mora poznati — za sebe in okolico.",
    content: [
      "1. Vedno nosite zaščitna očala in slušalke pri delu z motorno žago, kosilnico ali drugimi glasnim stroji.",
      "2. Pri delu z motorno žago vedno uporabljajte zaščitne hlače z vložkom in čelado z ščitnikom.",
      "3. Nikoli ne čistite stroja med delovanjem — vedno najprej izklopite motor in počakajte, da se vsi gibljivi deli ustavijo.",
      "4. Ne točite goriva med delovanjem motorja ali ko je motor še vroč.",
      "5. Otroke in živali držite stran od delovnega območja (minimalno 10 m pri motorni žagi).",
      "6. Redno preverjajte varnostne naprave (zavora, zaščitne pokrove) — nikoli jih ne odstranjujte ali onemogočajte.",
      "7. Pri delu na neravnem terenu bodite posebno previdni — uporabljajte stroje s pravilnim vpenjanjem.",
    ],
    icon: "ShieldCheck",
    readTime: "3 min",
  },
  {
    id: "priprava-vrtne-laskarice",
    category: "pred-sezono",
    categoryLabel: "Pred sezono",
    title: "Priprava vrtne laskarice in motokultivatorja",
    excerpt:
      "Pregled pred spomladanskim obdelovanjem vrta. Kaj preveriti pri laskarici, da bo delo lažje in učinkovitejše.",
    content: [
      "1. Očistite nože in freze od rje in umazanije. Rjo odstranite z jekleno krtačo in po potrebi naoljite.",
      "2. Preverite ostrino nožev — topi noži vlečejo zemljo namesto da jo obdelujejo.",
      "3. Preglejte vse vijake in matice na stroju in jih pritegnite. Vibracije med delom pogosto popustijo vijake.",
      "4. Zamenjajte olje v motorju (pri štiritaktnih) in preverite nivo olja v reduktorju.",
      "5. Očistite ali zamenjajte zračni filter in preverite svečko.",
      "6. Preverite pogonski jermen in sklopko. Če se jermen celi ali ima razpoke, ga zamenjajte.",
      "7. Preverite, da so zaščitni pokrovi nad frezami v dobrem stanju in pravilno nameščeni.",
    ],
    icon: "Sprout",
    readTime: "3 min",
  },
];

// === KALKULATOR OCENE POPRAVILA ===
export type RepairCategory = {
  id: string;
  label: string;
  icon: string;
  basePrice: number; // osnovna cena v EUR
  services: { id: string; label: string; price: number }[];
};

export const repairCategories: RepairCategory[] = [
  {
    id: "kosilnica",
    label: "Kosilnica",
    icon: "Leaf",
    basePrice: 25,
    services: [
      { id: "pregled", label: "Osnovni pregled in diagnostika", price: 15 },
      { id: "brusenje", label: "Brusitev nožev", price: 20 },
      { id: "menjava-olja", label: "Menjava olja + filtra", price: 25 },
      { id: "ciscenje-karburatorja", label: "Čiščenje karburatorja", price: 35 },
      { id: "menjava-svecke", label: "Menjava svečke", price: 12 },
      { id: "popravilo-pogona", label: "Popravilo pogonskega jermena", price: 40 },
    ],
  },
  {
    id: "motorna-zega",
    label: "Motorne žage",
    icon: "TreePine",
    basePrice: 30,
    services: [
      { id: "pregled", label: "Osnovni pregled in diagnostika", price: 20 },
      { id: "ostrenje", label: "Ostrenje verige", price: 15 },
      { id: "menjava-verige", label: "Menjava verige", price: 35 },
      { id: "ciscenje", label: "Čiščenje in mazanje", price: 25 },
      { id: "popravilo-mazanja", label: "Popravilo mazalne črpalke", price: 45 },
      { id: "menjava-zaganjalca", label: "Popravilo zaganjalca", price: 40 },
    ],
  },
  {
    id: "vrtna-laskarica",
    label: "Vrtna laskarica",
    icon: "Sprout",
    basePrice: 30,
    services: [
      { id: "pregled", label: "Osnovni pregled in diagnostika", price: 20 },
      { id: "brusenje-nozev", label: "Brusitev nožev/frez", price: 30 },
      { id: "menjava-olja", label: "Menjava olja", price: 25 },
      { id: "popravilo-sklopke", label: "Popravilo sklopke", price: 45 },
      { id: "menjava-jermena", label: "Menjava pogonskega jermena", price: 35 },
    ],
  },
  {
    id: "skuter",
    label: "Skuter",
    icon: "Bike",
    basePrice: 40,
    services: [
      { id: "pregled", label: "Osnovni pregled in diagnostika", price: 25 },
      { id: "menjava-olja", label: "Menjava olja + filtra", price: 35 },
      { id: "menjava-zavor", label: "Menjava zavor", price: 50 },
      { id: "menjava-gume", label: "Menjava gume", price: 45 },
      { id: "popravilo-karburatorja", label: "Čiščenje/popravilo karburatorja", price: 55 },
      { id: "elektrika", label: "Električni pregledi", price: 35 },
    ],
  },
];

export type UrgencyLevel = {
  id: string;
  label: string;
  multiplier: number;
  description: string;
};

export const urgencyLevels: UrgencyLevel[] = [
  {
    id: "planirano",
    label: "Planirano (do 7 dni)",
    multiplier: 1.0,
    description: "Normalni termin, najboljša cena",
  },
  {
    id: "hitro",
    label: "Hitro (1–3 dni)",
    multiplier: 1.2,
    description: "Prednostni termin",
  },
  {
    id: "nuzno",
    label: "Nujsno (isti dan)",
    multiplier: 1.5,
    description: "Mobilen servis, takojšen prihod",
  },
];

export const locationFee = {
  base: 0, // v delavnici brez dodatka
  mobile: 25, // mobilni servis
};
