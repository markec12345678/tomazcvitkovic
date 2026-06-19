"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  TreePine,
  Sprout,
  Bike,
  Calculator,
  MapPin,
  Wrench,
  Clock,
  Check,
  Info,
  MessageCircle,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  repairCategories,
  urgencyLevels,
  locationFee,
} from "@/lib/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  TreePine,
  Sprout,
  Bike,
};

export function QuoteCalculator() {
  const [selectedCat, setSelectedCat] = React.useState<string>("kosilnica");
  const [selectedServices, setSelectedServices] = React.useState<Set<string>>(
    new Set(["pregled"])
  );
  const [urgency, setUrgency] = React.useState<string>("planirano");
  const [mobile, setMobile] = React.useState<boolean>(false);

  const category = repairCategories.find((c) => c.id === selectedCat)!;
  const urgencyLevel = urgencyLevels.find((u) => u.id === urgency)!;

  const servicesTotal = React.useMemo(() => {
    return category.services
      .filter((s) => selectedServices.has(s.id))
      .reduce((sum, s) => sum + s.price, 0);
  }, [category, selectedServices]);

  const subtotal = category.basePrice + servicesTotal;
  const total = Math.round((subtotal * urgencyLevel.multiplier + (mobile ? locationFee.mobile : 0)));

  const toggleService = (id: string) => {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        // Pregled je vedno vključen — ne more se odznačiti
        if (id === "pregled") return next;
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const reset = () => {
    setSelectedCat("kosilnica");
    setSelectedServices(new Set(["pregled"]));
    setUrgency("planirano");
    setMobile(false);
  };

  const whatsappUrl = buildWhatsAppLink({
    service: `Ocena popravila: ${category.label}`,
    message: `Pozdravljen! Preko spletne strani sem si izračunal oceno popravila.

• Vrsta stroja: ${category.label}
• Storitve: ${category.services
      .filter((s) => selectedServices.has(s.id))
      .map((s) => s.label)
      .join(", ") || "samo osnovni pregled"}
• Urgenca: ${urgencyLevel.label}
• Lokacija: ${mobile ? "mobilni servis (prihod na lokacijo)" : "v delavnici"}
• Ocena cena: ${total} EUR

Prosim za potrditev cene in prostega termina.`,
  });

  return (
    <section id="kalkulator" className="section-pad scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Glava */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            <Calculator className="h-3.5 w-3.5 text-accent" />
            Kalkulator ocene
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Izračunajte oceno popravila
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Hitra informativna ocena popravila — izberite vrsto stroja in storitve.
            Končno ceno potrdim po pregledu, brez neprijetnih presenečenj.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Levo: izbira */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="h-full border-border/80 p-6 sm:p-8">
              {/* 1. Vrsta stroja */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    1
                  </span>
                  Vrsta stroja
                </label>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {repairCategories.map((cat) => {
                    const Icon = iconMap[cat.icon] ?? Wrench;
                    const active = selectedCat === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCat(cat.id);
                          setSelectedServices(new Set(["pregled"]));
                        }}
                        className={cn(
                          "flex flex-col items-center gap-2 rounded-xl border-2 p-3 transition-all sm:p-4",
                          active
                            ? "border-accent bg-accent/10 shadow-sm"
                            : "border-border bg-background hover:border-accent/40 hover:bg-secondary/50"
                        )}
                        aria-pressed={active}
                      >
                        <Icon
                          className={cn(
                            "h-7 w-7 transition-colors",
                            active ? "text-accent" : "text-muted-foreground"
                          )}
                        />
                        <span
                          className={cn(
                            "text-xs font-semibold sm:text-sm",
                            active ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {cat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Storitve */}
              <div className="mt-8">
                <label className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    2
                  </span>
                  Storitve
                </label>
                <p className="mt-1 text-xs text-muted-foreground">
                  Osnovni pregled je vedno vključen. Izberite dodatne storitve po želji.
                </p>
                <div className="mt-3 space-y-2">
                  {category.services.map((s) => {
                    const checked = selectedServices.has(s.id);
                    const isPregled = s.id === "pregled";
                    return (
                      <button
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        disabled={isPregled}
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-lg border p-3 text-left transition-all",
                          checked
                            ? "border-accent bg-accent/5"
                            : "border-border bg-background hover:border-accent/40",
                          isPregled && "cursor-default opacity-80"
                        )}
                        aria-pressed={checked}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                              checked
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border bg-background"
                            )}
                          >
                            {checked && <Check className="h-3.5 w-3.5" />}
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {s.label}
                            {isPregled && (
                              <span className="ml-2 rounded bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                                obvezno
                              </span>
                            )}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-foreground">
                          {s.price} €
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Urgenca */}
              <div className="mt-8">
                <label className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    3
                  </span>
                  <Clock className="h-4 w-4" />
                  Urgenca
                </label>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {urgencyLevels.map((u) => {
                    const active = urgency === u.id;
                    return (
                      <button
                        key={u.id}
                        onClick={() => setUrgency(u.id)}
                        className={cn(
                          "rounded-lg border-2 p-3 text-left transition-all",
                          active
                            ? "border-accent bg-accent/10"
                            : "border-border bg-background hover:border-accent/40"
                        )}
                        aria-pressed={active}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-foreground">
                            {u.label}
                          </span>
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px] font-bold",
                              active
                                ? "bg-accent text-accent-foreground"
                                : "bg-secondary text-muted-foreground"
                            )}
                          >
                            ×{u.multiplier}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          {u.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Lokacija */}
              <div className="mt-8">
                <label className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    4
                  </span>
                  <MapPin className="h-4 w-4" />
                  Lokacija
                </label>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setMobile(false)}
                    className={cn(
                      "rounded-lg border-2 p-3 text-left transition-all",
                      !mobile
                        ? "border-accent bg-accent/10"
                        : "border-border bg-background hover:border-accent/40"
                    )}
                    aria-pressed={!mobile}
                  >
                    <div className="text-sm font-semibold text-foreground">
                      V delavnici
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      Griblje — brez dodatka
                    </div>
                  </button>
                  <button
                    onClick={() => setMobile(true)}
                    className={cn(
                      "rounded-lg border-2 p-3 text-left transition-all",
                      mobile
                        ? "border-accent bg-accent/10"
                        : "border-border bg-background hover:border-accent/40"
                    )}
                    aria-pressed={mobile}
                  >
                    <div className="text-sm font-semibold text-foreground">
                      Mobilni servis
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      Prihod na lokacijo +{locationFee.mobile} €
                    </div>
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Desno: povzetek */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="sticky top-20 h-fit overflow-hidden border-border/80 bg-zinc-900 p-6 text-zinc-50 shadow-industrial dark:bg-zinc-950 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Vaša ocena
                  </span>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 transition-colors hover:text-accent"
                    aria-label="Ponastavi kalkulator"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Ponastavi
                  </button>
                </div>

                {/* Glavna cena */}
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                      {total}
                    </span>
                    <span className="text-2xl font-bold text-zinc-300">€</span>
                    <span className="text-sm text-zinc-500">~</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Informativna ocena — končna po dogovoru
                  </p>
                </div>

                {/* Razčlenitev */}
                <div className="mt-6 space-y-2 border-t border-zinc-700 pt-4 text-sm">
                  <div className="flex justify-between text-zinc-300">
                    <span>Osnovni pregled ({category.label})</span>
                    <span className="font-medium">{category.basePrice} €</span>
                  </div>
                  {category.services
                    .filter((s) => selectedServices.has(s.id))
                    .map((s) => (
                      <div key={s.id} className="flex justify-between text-zinc-300">
                        <span className="truncate pr-2">{s.label}</span>
                        <span className="font-medium">{s.price} €</span>
                      </div>
                    ))}
                  {urgencyLevel.multiplier > 1 && (
                    <div className="flex justify-between text-amber-400">
                      <span>Urgenca ({urgencyLevel.label})</span>
                      <span className="font-medium">
                        +{Math.round(subtotal * (urgencyLevel.multiplier - 1))} €
                      </span>
                    </div>
                  )}
                  {mobile && (
                    <div className="flex justify-between text-zinc-300">
                      <span>Mobilni servis</span>
                      <span className="font-medium">+{locationFee.mobile} €</span>
                    </div>
                  )}
                </div>

                {/* Skupaj */}
                <div className="mt-4 flex items-center justify-between border-t border-zinc-700 pt-4">
                  <span className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Skupaj
                  </span>
                  <span className="text-2xl font-bold text-zinc-50">
                    {total} €
                  </span>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="mt-6 w-full bg-[#25D366] py-6 text-base text-white hover:bg-[#1da851]"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Pošlji povpraševanje
                  </a>
                </Button>

                {/* Info note */}
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-zinc-800/50 p-3 text-xs text-zinc-400">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p>
                    Cena je informativna. Končno ceno potrdim po pregledu stroja
                    — brez nepričakovanih stroškov.
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
