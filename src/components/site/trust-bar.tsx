"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/company";

export function TrustBar() {
  return (
    <section
      aria-label="Ključne številke"
      className="relative z-10 -mt-8 mb-2"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-sm md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center bg-background px-4 py-6 text-center"
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {s.value}
                </span>
                <span className="text-xl font-semibold text-accent">{s.suffix}</span>
              </div>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
