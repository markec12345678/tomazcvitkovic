"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { company } from "@/lib/company";
import { buildWhatsAppLink, telLink, mailLink, mapsLink } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="kontakt" className="section-pad scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Kontakt
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Povežimo se
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Najhitreje preko WhatsAppa ali telefona. Pišete lahko tudi na e-pošto.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Telefon / WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-6 transition-shadow hover:shadow-industrial">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">Telefon</h3>
              <p className="mt-1 text-sm text-muted-foreground">Neposreden klic</p>
              <a
                href={telLink()}
                className="mt-3 block text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
              >
                {company.contact.phoneDisplay}
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                {company.hours[0].day}: {company.hours[0].time}
              </p>
            </Card>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="h-full p-6 transition-shadow hover:shadow-industrial">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#1da851]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">WhatsApp</h3>
              <p className="mt-1 text-sm text-muted-foreground">Najhitrejši odziv</p>
              <a
                href={buildWhatsAppLink({})}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-xl font-bold tracking-tight text-foreground transition-colors hover:text-[#1da851]"
              >
                {company.contact.phoneDisplay}
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Kliknite za pogovor v WhatsAppu
              </p>
            </Card>
          </motion.div>

          {/* E-pošta */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <Card className="h-full p-6 transition-shadow hover:shadow-industrial">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">E-pošta</h3>
              <p className="mt-1 text-sm text-muted-foreground">Za podrobnejše povpraševanje</p>
              <a
                href={mailLink("Povpraševanje")}
                className="mt-3 block break-all text-base font-bold tracking-tight text-foreground transition-colors hover:text-accent"
              >
                {company.contact.email}
              </a>
              <p className="mt-2 text-xs text-muted-foreground">Odgovor v 1–2 delovnih dneh</p>
            </Card>
          </motion.div>
        </div>

        {/* Naslov in delovni čas */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold">Naslov obrti</h3>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
                    {company.fullName}
                    <br />
                    {company.address.street}
                    <br />
                    {company.address.postal} {company.address.city}
                    <br />
                    {company.address.municipality}, {company.address.country}
                  </address>
                  <a
                    href={mapsLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    <MapPin className="h-4 w-4" />
                    Pokaži na zemljevidu
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="h-full p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold">Delovni čas</h3>
                  <dl className="mt-2 space-y-1.5 text-sm">
                    {company.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between gap-4 border-b border-border/60 py-1 last:border-0"
                      >
                        <dt className="text-muted-foreground">{h.day}</dt>
                        <dd className="font-medium">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-muted-foreground">
                    V sezoni (košnja, žetev, gozd) možni tudi izvenurni termini.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
