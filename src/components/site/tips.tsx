"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  TreePine,
  Snowflake,
  AlertTriangle,
  ShieldCheck,
  Sprout,
  Clock,
  ArrowRight,
  BookOpen,
  X,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { tips, type Tip } from "@/lib/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  TreePine,
  Snowflake,
  AlertTriangle,
  ShieldCheck,
  Sprout,
};

const categoryColors: Record<string, string> = {
  "pred-sezono": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "v-sezoni": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "pred-zimo": "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  splosno: "bg-accent/10 text-accent",
};

export function Tips() {
  const [selected, setSelected] = React.useState<Tip | null>(null);

  return (
    <section id="nasveti" className="section-pad scroll-mt-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glava */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground ring-1 ring-border">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              Nasveti za vzdrževanje
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Vzdržujte stroje sami — preden rabite mene
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
              Zbrana znanja o pripravi strojev pred sezono, vzdrževanju v sezoni
              in pravilni prezimitvi. Preprosti pregledi, ki prihranijo denar
              in podaljšajo življenjsko dobo vaše opreme.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground sm:flex">
            <Clock className="h-3.5 w-3.5 text-accent" />
            {tips.length} nasvetov · 2–5 min branja
          </div>
        </div>

        {/* Grid nasvetov */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, i) => {
            const Icon = iconMap[tip.icon] ?? BookOpen;
            return (
              <motion.button
                key={tip.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                onClick={() => setSelected(tip)}
                className="group relative text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label={`Preberi nasvet: ${tip.title}`}
              >
                <Card className="relative h-full overflow-hidden border-border/80 p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-industrial">
                  {/* Akcentni trak */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${
                        categoryColors[tip.category]
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary-foreground">
                      {tip.categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight">
                    {tip.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {tip.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {tip.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      Preberi
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Card>
              </motion.button>
            );
          })}
        </div>

        {/* CTA pod nasveti */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-border bg-background p-6 text-center sm:p-8"
        >
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">
            Imate vprašanje o vzdrževanju svojega stroja, ki ga ni med nasveti?
          </p>
          <p className="mt-1 font-semibold text-foreground">
            Pišite mi preko WhatsAppa — brezplačno svetujem.
          </p>
          <Button
            asChild
            className="mt-4 bg-[#25D366] text-white hover:bg-[#1da851]"
          >
            <a
              href={buildWhatsAppLink({
                service: "Svetovanje o vzdrževanju stroja",
                message:
                  "Imam vprašanje glede vzdrževanja svojega stroja. Lahko svetujete?",
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vprašaj preko WhatsAppa
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Modal s celotnim nasvetom */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden border-border bg-background p-0 sm:rounded-2xl">
          <DialogTitle className="sr-only">{selected?.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Podroben nasvet za vzdrževanje strojev.
          </DialogDescription>

          {selected && (
            <div className="flex max-h-[90vh] flex-col">
              {/* Header */}
              <div className="relative shrink-0 overflow-hidden bg-zinc-900 px-6 py-6 text-zinc-50 dark:bg-zinc-950 sm:px-8">
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    {(() => {
                      const Icon = iconMap[selected.icon] ?? BookOpen;
                      return (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                          <Icon className="h-6 w-6" />
                        </div>
                      );
                    })()}
                    <div>
                      <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                        {selected.categoryLabel} · {selected.readTime}
                      </span>
                      <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
                        {selected.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vsebina — scrollable */}
              <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  {selected.excerpt}
                </p>
                <div className="mt-6 space-y-3">
                  {selected.content.map((line, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/30 p-3 text-sm leading-relaxed"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                        {idx + 1}
                      </span>
                      <p className="text-foreground/90">{line.replace(/^\d+\.\s*/, "")}</p>
                    </div>
                  ))}
                </div>

                {/* Spodnji CTA */}
                <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    Potrebujete pomoč pri tem nasvetu?
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Z veseljem pomagam ali opravim popravilo namesto vas.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-3 bg-[#25D366] text-white hover:bg-[#1da851]"
                  >
                    <a
                      href={buildWhatsAppLink({
                        service: `Nasvet: ${selected.title}`,
                        message: `Prebral sem nasvet "${selected.title}" na spletni strani in bi rad še vprašal: `,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vprašaj preko WhatsAppa
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
