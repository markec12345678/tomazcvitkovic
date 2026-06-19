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
