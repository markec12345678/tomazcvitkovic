"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Send, Loader2, CheckCircle2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { services, company } from "@/lib/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const schema = z.object({
  name: z
    .string()
    .min(2, "Vnesite ime in priimek (vsaj 2 znaka).")
    .max(80, "Ime je predolgo."),
  phone: z
    .string()
    .min(6, "Vnesite veljavno telefonsko številko.")
    .max(30, "Telefon je predolg.")
    .regex(/^[+0-9\s().-]+$/, "Telefon lahko vsebuje samo številke in znake + ( ) . -"),
  email: z
    .string()
    .max(120, "E-pošta je predolga.")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Izberite storitev."),
  message: z
    .string()
    .min(10, "Opišite potrebo vsaj z 10 znaki.")
    .max(2000, "Sporočilo je predolgo (max 2000 znakov)."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Strinjati se morate s obdelavo podatkov." }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState<{ url: string; phone: string } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
      consent: false as unknown as true,
    },
  });

  const serviceValue = watch("service");
  const consentValue = watch("consent");

  const onSubmit = (data: FormValues) => {
    setSubmitting(true);
    try {
      const url = buildWhatsAppLink({
        name: data.name,
        phone: data.phone,
        service: data.service,
        message: data.message,
      });

      // Odpri WhatsApp v novem zavihku
      window.open(url, "_blank", "noopener,noreferrer");

      setDone({ url, phone: company.contact.phoneDisplay });
      toast.success("WhatsApp je odprt", {
        description: "Sporočilo je pripravljeno — samo še pritisnite pošlji v WhatsAppu.",
      });
      reset();
    } catch (e) {
      toast.error("Prišlo je do napake", {
        description: "Prosimo, kontaktirajte nas neposredno preko telefona.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="povprasevanja"
      className="section-pad scroll-mt-16 bg-primary text-primary-foreground"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Levo: opis */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <MessageCircle className="h-3.5 w-3.5 text-accent" />
              Povpraševanje
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Izpolnite obrazec — WhatsApp odpre sam
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
              Nobene registracije, nobene baze. Izpolnite podatke, kliknite gumb in odprl se bo
              WhatsApp s pripravljenim sporočilom za{" "}
              <strong className="text-primary-foreground">Tomaža ({company.contact.phoneDisplay})</strong>.
              Samo še pritisnete pošlji — in zadeva je na poti.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                "Odziv praviloma v 24 urah",
                "Poštena ocena brez obveznosti",
                "Mobilni servis po dogovoru",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-primary-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
              <p className="text-xs uppercase tracking-wide text-primary-foreground/60">
                Raje pokličete?
              </p>
              <a
                href={`tel:${company.contact.phoneIntl}`}
                className="mt-1 block text-2xl font-bold tracking-tight text-primary-foreground transition-colors hover:text-accent"
              >
                {company.contact.phoneDisplay}
              </a>
              <p className="mt-1 text-xs text-primary-foreground/60">
                {company.hours[0].day}: {company.hours[0].time}
              </p>
            </div>
          </motion.div>

          {/* Desno: obrazec */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-border/50 bg-background p-6 text-foreground shadow-2xl sm:p-8">
              {done ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15">
                    <CheckCircle2 className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">WhatsApp je odprt!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Sporočilo je pripravljeno za <strong>{done.phone}</strong>. Pritisnite gumb
                    pošlji v WhatsAppu, da pride do Tomaža.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <Button asChild className="bg-[#25D366] text-white hover:bg-[#1da851]">
                      <a href={done.url} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Ponovno odpri WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" onClick={() => setDone(null)}>
                      Novo povpraševanje
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="qf-name">
                        Ime in priimek <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="qf-name"
                        placeholder="Janez Novak"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="qf-phone">
                        Telefon <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="qf-phone"
                        placeholder="040 123 456"
                        inputMode="tel"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="qf-email">E-pošta (neobvezno)</Label>
                      <Input
                        id="qf-email"
                        type="email"
                        placeholder="ime@primer.si"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="qf-service">
                        Storitev <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={serviceValue}
                        onValueChange={(v) => setValue("service", v, { shouldValidate: true })}
                      >
                        <SelectTrigger id="qf-service" aria-invalid={!!errors.service}>
                          <SelectValue placeholder="Izberite storitev" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.title}>
                              {s.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Drugo">Drugo / ni gotov</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-destructive">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="qf-message">
                      Opis potrebe <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="qf-message"
                      rows={5}
                      placeholder="Npr. Traktor mi med košnjo izpusti hidravliko, rabim čim prej popravilo na lokaciji v Metliki…"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    <div className="flex items-center justify-between">
                      {errors.message ? (
                        <p className="text-xs text-destructive">{errors.message.message}</p>
                      ) : (
                        <span />
                      )}
                      <span className="text-[11px] text-muted-foreground">
                        {watch("message")?.length ?? 0}/2000
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="qf-consent"
                      checked={!!consentValue}
                      onCheckedChange={(v) =>
                        setValue("consent", (v === true) as true, {
                          shouldValidate: true,
                        })
                      }
                      aria-invalid={!!errors.consent}
                    />
                    <Label htmlFor="qf-consent" className="text-xs leading-relaxed text-muted-foreground">
                      Strinjam se, da Tomaž Cvitkovič s.p. obdeluje moje kontaktne podatke
                      izključno za odgovor na to povpraševanje. Podatki se ne shranjujejo v bazo —
                      odprejo se samo v mojem WhatsAppu.
                    </Label>
                  </div>
                  {errors.consent && (
                    <p className="-mt-3 text-xs text-destructive">{errors.consent.message}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#25D366] py-6 text-base text-white hover:bg-[#1da851] disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Pripravljam WhatsApp…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Pošlji povpraševanje preko WhatsAppa
                      </>
                    )}
                  </Button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
                    <ExternalLink className="h-3 w-3" />
                    Odpre se WhatsApp v novem zavihku — brez pošiljanja preko strežnika.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
