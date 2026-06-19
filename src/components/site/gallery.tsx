"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Card } from "@/components/ui/card";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  span?: string; // tailwind col-span utility
};

const items: GalleryItem[] = [
  {
    src: "/gallery/workshop.jpg",
    alt: "Notranjost delavnice z organiziranim orodjem in opremo za popravila strojev",
    title: "Delavnica",
    caption: "Orodje in oprema za popravila strojev",
    span: "sm:col-span-2",
  },
  {
    src: "/gallery/welding.jpg",
    alt: "Varjenje kovinske konstrukcije z iskrami",
    title: "Varjenje",
    caption: "MIG/MAG varjenje jeklenih konstrukcij",
  },
  {
    src: "/gallery/tractor-repair.jpg",
    alt: "Popravilo motorja kmetijskega stroja",
    title: "Stroji",
    caption: "Popravila kmetijske in gozdarske mehanizacije",
  },
  {
    src: "/gallery/metal-fence.jpg",
    alt: "Končana kovinska ograja na podeželju",
    title: "Konstrukcije",
    caption: "Ograje, nosilci in okovje po meri",
    span: "sm:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="galerija" className="section-pad scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              Galerija
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Pogled v delo
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
              Trenutni prikazi delavnice, varjenja, popravil strojev in kovinskih konstrukcij.
              Fotografije dejanskih del se dodajajo sproti.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Camera className="h-3.5 w-3.5 text-accent" />
            Predstavitev
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-xl border border-border bg-muted ${item.span ?? ""}`}
            >
              <Card className="h-full overflow-hidden rounded-xl border-0 p-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i === 0}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent opacity-90" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                      {item.caption}
                    </p>
                    <p className="mt-0.5 text-lg font-bold">{item.title}</p>
                  </figcaption>
                </div>
              </Card>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
