"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { company } from "@/lib/company";
import { buildWhatsAppLink, telLink } from "@/lib/whatsapp";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";

const navItems = [
  { href: "#storitve", label: "Storitve" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kalkulator", label: "Kalkulator" },
  { href: "#nasveti", label: "Nasveti" },
  { href: "#povprasevanja", label: "Povpraševanja" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#vrh" className="flex items-center gap-2.5" aria-label={`${company.name} — domov`}>
          <Logo className="h-9 w-9" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-bold tracking-tight text-foreground">
              Tomaž Cvitkovič
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              s.p. · Griblje
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Glavna navigacija">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={telLink()}
            className="hidden h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:inline-flex"
            aria-label={`Pokliči ${company.contact.phoneDisplay}`}
            title={`Pokliči ${company.contact.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <Button asChild size="sm" className="hidden bg-[#25D366] text-white hover:bg-[#1da851] sm:inline-flex">
            <a
              href={buildWhatsAppLink({})}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontaktiraj preko WhatsApp"
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          {/* Mobile sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Odpri meni"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <SheetTitle className="sr-only">Navigacijski meni</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border py-4">
                  <div className="flex items-center gap-2">
                    <Logo className="h-8 w-8" />
                    <span className="text-sm font-bold">Tomaž Cvitkovič s.p.</span>
                  </div>
                </div>
                <nav className="flex flex-1 flex-col gap-1 py-4" aria-label="Mobilna navigacija">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                  <div className="flex items-center justify-between rounded-md bg-secondary/60 px-3 py-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Tema
                    </span>
                    <ThemeToggle />
                  </div>
                  <Button asChild variant="outline">
                    <a href={telLink()}>
                      <Phone className="mr-2 h-4 w-4" />
                      {company.contact.phoneDisplay}
                    </a>
                  </Button>
                  <Button asChild className="bg-[#25D366] text-white hover:bg-[#1da851]">
                    <a
                      href={buildWhatsAppLink({})}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp sporočilo
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Scroll indikator */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 origin-left bg-accent"
            style={{ transformOrigin: "0% 50%" }}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
