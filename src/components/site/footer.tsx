"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { company } from "@/lib/company";
import { buildWhatsAppLink, telLink, mailLink, mapsLink } from "@/lib/whatsapp";
import { Logo } from "@/components/site/logo";

const footerNav = [
  { href: "#storitve", label: "Storitve" },
  { href: "#o-nas", label: "O nas" },
  { href: "#postopek", label: "Postopek" },
  { href: "#galerija", label: "Galerija" },
  { href: "#povprasevanja", label: "Povpraševanja" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-zinc-900 text-zinc-50 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Identiteta */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <div className="leading-tight">
                <p className="text-sm font-bold">Tomaž Cvitkovič s.p.</p>
                <p className="text-[11px] uppercase tracking-wider text-zinc-50/60">
                  Popravila strojev & zaključna gradbena dela
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-50/75">
              Samostojni podjetnik iz Griblje (občina Metlika). Popravila kmetijske in gozdarske
              mehanizacije, kovinske konstrukcije ter zaključna gradbena dela v Beli krajini in
              okolici.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={buildWhatsAppLink({})}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#25D366] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-50/25 px-3 py-2 text-sm font-semibold transition-colors hover:bg-zinc-50/10"
              >
                <Phone className="h-4 w-4" />
                Pokliči
              </a>
            </div>
          </div>

          {/* Navigacija */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-50/60">
              Navigacija
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-50/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-50/60">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={telLink()}
                  className="text-zinc-50/85 transition-colors hover:text-accent"
                >
                  {company.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={mailLink("Povpraševanje")}
                  className="break-all text-zinc-50/85 transition-colors hover:text-accent"
                >
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-50/85 transition-colors hover:text-accent"
                >
                  {company.address.street}, {company.address.postal} {company.address.city}
                  <br />
                  {company.address.municipality}, {company.address.country}
                </a>
              </li>
            </ul>

            <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-md bg-zinc-50/5 px-3 py-2">
                <dt className="text-zinc-50/55">Davčna št.</dt>
                <dd className="font-semibold">{company.registry.vat}</dd>
              </div>
              <div className="rounded-md bg-zinc-50/5 px-3 py-2">
                <dt className="text-zinc-50/55">Matična št.</dt>
                <dd className="font-semibold">{company.registry.maticna}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Spodnja vrstica */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-50/15 pt-6 sm:flex-row">
          <p className="text-center text-xs text-zinc-50/60 sm:text-left">
            © {year} {company.fullName}. Vse pravice pridržane.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-zinc-50/55">
              Izdelano v Beli krajini 🌲
            </p>
            <a
              href="#vrh"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-50/25 transition-colors hover:bg-zinc-50/10"
              aria-label="Na vrh strani"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
