"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { processSteps, company } from "@/lib/company";
import { MapPin } from "lucide-react";

export function Process() {
  return (
    <section id="postopek" className="section-pad scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Postopek
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Kako poteka sodelovanje
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Preprosto in pregledno — od prvega sporočila do predaje opravljenega dela.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Vzdolžna črta (desktop) */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="flex flex-col items-start">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm">
                    <span className="text-lg font-bold text-accent">{step.n}</span>
                    <span className="absolute inset-0 -z-10 rounded-full bg-accent/10" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Območje delovanja */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-2xl border border-border bg-secondary/40"
        >
          <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
            <div className="sm:col-span-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background text-accent shadow-sm ring-1 ring-border">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">Območje delovanja</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Osnovno območje v Beli krajini. Za večja dela ali mobilni servis se dogovorimo
                tudi izven tega seznama.
              </p>
            </div>
            <div className="sm:col-span-2">
              <ul className="flex flex-wrap gap-2">
                {company.areas.map((place) => (
                  <li
                    key={place}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {place}
                  </li>
                ))}
                <li className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground">
                  + okolica po dogovoru
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
