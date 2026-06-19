"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  galleryCategories,
  galleryImages,
  getGalleryByCategory,
  type GalleryImage,
} from "@/lib/company";

export function Gallery() {
  const [activeCat, setActiveCat] = React.useState<string>("vse");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const visible = React.useMemo(
    () => getGalleryByCategory(activeCat),
    [activeCat]
  );

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = React.useCallback(() => {
    setLightboxIndex((curr) => {
      if (curr === null) return curr;
      return (curr - 1 + visible.length) % visible.length;
    });
  }, [visible.length]);

  const goNext = React.useCallback(() => {
    setLightboxIndex((curr) => {
      if (curr === null) return curr;
      return (curr + 1) % visible.length;
    });
  }, [visible.length]);

  // Tipkovnica: ESC, ←, →
  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  const current: GalleryImage | null =
    lightboxIndex !== null ? visible[lightboxIndex] : null;

  return (
    <section id="galerija" className="section-pad scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glava */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              Galerija
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Pogled v delo
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
              Popravila kosilnic, vrtne laskarice, motornih žag in skuterjev.
              Kliknite na sliko za večji prikaz. Fotografije dejanskih del se dodajajo sproti.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Camera className="h-3.5 w-3.5 text-accent" />
            {galleryImages.length} delovnih primerov
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Kategorije galerije"
        >
          {galleryCategories.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCat(cat.id)}
                className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-accent bg-accent text-accent-foreground shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {cat.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-accent-foreground/15 text-accent-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {cat.id === "vse"
                    ? galleryImages.length
                    : galleryImages.filter((i) => i.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid slik */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.button
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => openLightbox(i)}
                className={`group relative block overflow-hidden rounded-xl border border-border bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  item.span ?? ""
                }`}
                aria-label={`Odpri večji prikaz: ${item.title}`}
              >
                <Card className="h-full overflow-hidden rounded-xl border-0 p-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                        {item.caption}
                      </p>
                      <p className="mt-0.5 text-lg font-bold">{item.title}</p>
                    </figcaption>
                    {/* Hover ikona za povečavo */}
                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent className="max-w-5xl overflow-hidden border-border bg-background/95 p-0 backdrop-blur-md sm:rounded-2xl">
          <DialogTitle className="sr-only">
            {current?.title ?? "Galerijska slika"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {current?.alt ?? "Povečan prikaz slike iz galerije."}
          </DialogDescription>

          {/* Zgornja vrstica z naslovom in števcem */}
          <div className="flex items-center justify-between gap-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:px-6">
            <div className="min-w-0 flex-1">
              <p className="truncate text-base font-bold text-foreground">
                {current?.title}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {current?.caption}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground sm:inline">
                {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {visible.length}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={closeLightbox}
                aria-label="Zapri"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Slika + navigacija */}
          <div className="relative bg-zinc-900/95 dark:bg-zinc-950/95">
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
              <AnimatePresence mode="wait">
                {current && (
                  <motion.div
                    key={current.src}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Leva navigacija */}
              <button
                onClick={goPrev}
                disabled={visible.length <= 1}
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur-sm transition-all hover:bg-background hover:scale-105 disabled:opacity-30 sm:left-4 sm:h-12 sm:w-12"
                aria-label="Prejšnja slika"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Desna navigacija */}
              <button
                onClick={goNext}
                disabled={visible.length <= 1}
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur-sm transition-all hover:bg-background hover:scale-105 disabled:opacity-30 sm:right-4 sm:h-12 sm:w-12"
                aria-label="Naslednja slika"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Spodnji opis */}
          <div className="border-t border-border bg-background/80 px-4 py-3 backdrop-blur sm:px-6">
            <p className="text-pretty text-sm text-muted-foreground">
              {current?.alt}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
