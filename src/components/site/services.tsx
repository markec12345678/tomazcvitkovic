"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Flame,
  Hammer,
  Settings,
  Truck,
  ClipboardCheck,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { services, type Service } from "@/lib/company";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Flame,
  Hammer,
  Settings,
  Truck,
  ClipboardCheck,
};

export function Services() {
  return (
    <section id="storitve" className="section-pad scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glava */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground"
          >
            Storitve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Vse na enem mestu — stroji, kovina, gradnja
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-pretty text-muted-foreground sm:text-lg"
          >
            Od popravila kmetijskega stroja do zaključnega gradbenega dela. Delo opravim sam,
            od začetka do konca — brez posrednikov in nepotrebnih čakanj.
          </motion.p>
        </div>

        {/* Mreža storitev */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s: Service, i) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/80 p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-industrial">
                  {/* Akcentni trak */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>

                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#povprasevanja"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    Povpraševanje
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
