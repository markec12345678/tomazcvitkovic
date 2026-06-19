"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CalendarCheck, BadgeCheck, HardHat } from "lucide-react";
import { company } from "@/lib/company";
import { mapsLink } from "@/lib/whatsapp";

const points = [
  {
    icon: HardHat,
    title: "Večletne izkušnje v strojništvo",
    text: "Znanje pridobljeno z rokami v strojih — ne samo iz priročnikov. Poznam kmetijske in gozdarske stroje ter njihove tipične težave.",
  },
  {
    icon: BadgeCheck,
    title: "Poštena obrt, registrirana od 2022",
    text: "Vseslovenski davčni zavezanec z matično številko 9030328. Dobite urejen račun in jasno dogovorjeno ceno že pred delom.",
  },
  {
    icon: CalendarCheck,
    title: "Točnost in rok, ki ga držim",
    text: "Kar obljubim, to naredim. Če rečem, da bo stroj pripravljen v petek, bo pripravljen v petek — ali prej.",
  },
];

export function About() {
  return (
    <section id="o-nas" className="section-pad scroll-mt-16 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Levo: vizualni blok */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-zinc-900 p-8 text-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 shadow-industrial">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-50/60">
                  Tomaž Cvitkovič s.p.
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Popravila strojev in zaključna gradbena dela
                </h3>
                <p className="mt-3 text-sm text-zinc-50/80">
                  {company.address.street}, {company.address.postal} {company.address.city}
                  <br />
                  {company.address.municipality}, {company.address.region}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg bg-zinc-50/10 p-3">
                    <dt className="text-xs uppercase tracking-wide text-zinc-50/60">
                      Davčna št.
                    </dt>
                    <dd className="mt-0.5 font-semibold">{company.registry.vat}</dd>
                  </div>
                  <div className="rounded-lg bg-zinc-50/10 p-3">
                    <dt className="text-xs uppercase tracking-wide text-zinc-50/60">
                      Matična št.
                    </dt>
                    <dd className="mt-0.5 font-semibold">{company.registry.maticna}</dd>
                  </div>
                  <div className="rounded-lg bg-zinc-50/10 p-3">
                    <dt className="text-xs uppercase tracking-wide text-zinc-50/60">
                      Telefon
                    </dt>
                    <dd className="mt-0.5 font-semibold">{company.contact.phoneDisplay}</dd>
                  </div>
                  <div className="rounded-lg bg-zinc-50/10 p-3">
                    <dt className="text-xs uppercase tracking-wide text-zinc-50/60">
                      Od leta
                    </dt>
                    <dd className="mt-0.5 font-semibold">{company.since}</dd>
                  </div>
                </dl>

                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-zinc-50/25 bg-zinc-50/5 px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-50/15"
                >
                  <MapPin className="h-4 w-4 text-accent" />
                  Pokaži na zemljevidu
                </a>
              </div>
            </div>

            {/* Lebdeča značka */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 shadow-lg sm:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <HardHat className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-muted-foreground">Obrt</p>
                <p className="text-sm font-bold">Bela Krajina</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Desno: besedilo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              O obrti
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Lokalna obrt, ki ve, kaj dela
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Sem <strong className="text-foreground">Tomaž Cvitkovič</strong>, samostojni podjetnik
              iz Griblje pri Metliki. Od leta {company.since} opravljam{" "}
              <strong className="text-foreground">popravila strojev</strong> in{" "}
              <strong className="text-foreground">zaključna gradbena dela</strong> za kmete,
              gozdarje, gradbince in lastnike hiš po Beli krajini in okolici.
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Pri meni ne gre za hitre obljube in visoke račune — gre za pošteno opravljeno delo,
              ki drži. Kar popravim, drži. Kar zvarim, drži. Kar zaključim, je opravljeno do konca.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-background text-accent shadow-sm ring-1 ring-border">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${company.contact.phoneIntl}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-accent" />
                {company.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-accent" />
                {company.contact.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
