"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { buildWhatsAppLink, telLink } from "@/lib/whatsapp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="vrh"
      className="relative overflow-hidden bg-zinc-900 text-zinc-50 dark:bg-zinc-950 dark:text-zinc-100"
      aria-label="Uvodna ponudba"
    >
      {/* Ozadje: kovinska mreža + akcentne lise */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Besedilo */}
          <div className="lg:col-span-7">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-50/20 bg-zinc-50/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Odprto za povpraševanja · Bela Krajina
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Popravila strojev
              <span className="mt-1 block">
                & zaključna gradbena dela
                <span className="text-accent"> v Beli krajini.</span>
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-50/80 sm:text-lg"
            >
              Sem <strong className="font-semibold text-zinc-50">Tomaž Cvitkovič</strong>,
              samostojni podjetnik iz Griblje (občina Metlika). Popravim stroj, zvarim konstrukcijo
              in zaključim gradbeno delo — pošteno, čisto in brez odlašanja.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1da851]">
                <a
                  href={buildWhatsAppLink({})}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Povpraševanje preko WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zinc-50/30 bg-transparent text-zinc-50 hover:bg-zinc-50/10 hover:text-zinc-50"
              >
                <a href={telLink()}>
                  <Phone className="mr-2 h-5 w-5" />
                  {company.contact.phoneDisplay}
                </a>
              </Button>
            </motion.div>

            {/* Trust vrstica */}
            <motion.dl
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-zinc-50/15 pt-6 sm:grid-cols-3"
            >
              <div className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-zinc-50/60">
                    Registrirano
                  </dt>
                  <dd className="text-sm font-semibold">od leta {company.since}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-zinc-50/60">
                    Odziv
                  </dt>
                  <dd className="text-sm font-semibold">v 24 urah</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-zinc-50/60">
                    Lokacija
                  </dt>
                  <dd className="text-sm font-semibold">Griblje, Metlika</dd>
                </div>
              </div>
            </motion.dl>
          </div>

          {/* Vizualni blok */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* Kartica "delavnica" */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-50/15 bg-zinc-50/5 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-50/60">
                      Trenutno na voljo
                    </p>
                    <p className="mt-1 text-lg font-bold">Termin v roku 1–3 dni</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <ArrowRight className="h-6 w-6" />
                  </span>
                </div>

                <div className="my-6 h-px w-full bg-zinc-50/15" />

                <ul className="space-y-3 text-sm">
                  {[
                    "Popravila kmetijske & gozdarske mehanizacije",
                    "Kovinske konstrukcije, varjenje, okovje",
                    "Zaključna gradbena dela",
                    "Mobilni servis na lokaciji",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-zinc-50/85">{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-lg bg-zinc-50/10 p-3 text-xs text-zinc-50/70">
                  <strong className="text-zinc-50">Delovni čas:</strong>{" "}
                  pon–pet 7:00–17:00 · sobota po dogovoru
                </div>
              </div>

              {/* Lebdeči akcentni znak */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 hidden h-16 w-16 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg sm:flex"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                  <path
                    d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.1-.6-.6-2.1 2.1-2.1Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spodnja valovnica */}
      <div className="relative" aria-hidden="true">
        <svg
          className="block h-12 w-full text-background sm:h-16"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 80 L0 40 Q360 0 720 40 T1440 40 L1440 80 Z" />
        </svg>
      </div>
    </section>
  );
}
