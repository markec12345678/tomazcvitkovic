"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/company";

export function Testimonials() {
  return (
    <section id="prijave" className="section-pad scroll-mt-16 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground ring-1 ring-border">
            Pripovedi strank
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Kaj pravijo tisti, ki so že prišli
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Pošten obrtnik se pozna po povratnih informacijah. Tukaj je nekaj izsledkov iz
            sodelovanj v Beli krajini.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            >
              <Card className="relative h-full overflow-hidden border-border/80 p-6 sm:p-8">
                <Quote className="absolute right-5 top-5 h-10 w-10 text-accent/15" aria-hidden="true" />

                <div className="flex items-center gap-1 text-accent" aria-label="5 od 5 zvezdic">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground/90">
                  “{t.text}”
                </blockquote>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.place}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {t.service}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * Pripovedi predstavljajo tipske izkušnje strank. Imena so skrajšana zaradi zasebnosti.
        </p>
      </div>
    </section>
  );
}
