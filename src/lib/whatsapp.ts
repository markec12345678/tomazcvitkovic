import { company } from "./company";

/**
 * Zgradi WhatsApp "deep link" s predpripravljenim sporočilom.
 * Obiskovalec izpolni obrazec → klikne → odpre se WhatsApp
 * s pripravljenim sporočilom direktno za Tomaža. Brez baze.
 */
export function buildWhatsAppLink(opts: {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}): string {
  const { name, phone, service, message } = opts;
  const lines: string[] = [];

  lines.push("Pozdravljen, Tomaž!");
  lines.push("");
  lines.push("Zanima me povpraševanje preko spletne strani:");

  if (service) {
    lines.push(`• Storitev: ${service}`);
  }
  if (name) {
    lines.push(`• Ime in priimek: ${name}`);
  }
  if (phone) {
    lines.push(`• Telefon: ${phone}`);
  }
  if (message && message.trim().length > 0) {
    lines.push("");
    lines.push(`Opis potrebe:`);
    lines.push(message.trim());
  }
  lines.push("");
  lines.push("Hvala in lep pozdrav.");

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${company.contact.whatsapp}?text=${text}`;
}

/** Preprost tel: link za klic. */
export function telLink(): string {
  return `tel:${company.contact.phoneIntl}`;
}

/** mailto: link. */
export function mailLink(subject = "Povpraševanje"): string {
  return `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}`;
}

/** Waze / Google Maps iskanje naslova. */
export function mapsLink(): string {
  const q = encodeURIComponent(
    `${company.address.street}, ${company.address.postal} ${company.address.city}, ${company.address.country}`
  );
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
