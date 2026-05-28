"use client";

import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

// Our organisation's data (pre-filled, read-only)
const ORG_NAME = "ROD MLINSKIH KAMNOV";
const ORG_ADDRESS = "RADOMLJE 1";
const ORG_POSTAL = "1235";
const ORG_CITY = "Radomlje";
const ORG_DAVCNA = ["x", "x", "x", "x", "x", "x", "x", "x"]; // TODO: fill in

function ReadonlyDigitBoxes({ digits }: { digits: string[] }) {
  return (
    <div className="flex gap-1">
      {digits.map((d, i) => (
        <div
          key={i}
          className="flex items-center justify-center h-10 font-mono text-sm font-bold border rounded-md select-none w-9 border-border bg-muted text-foreground"
        >
          {d}
        </div>
      ))}
    </div>
  );
}

function DigitInput({
  index,
  value,
  refs,
  onChange,
}: {
  index: number;
  value: string;
  refs: React.RefObject<HTMLInputElement | null>[];
  onChange: (index: number, val: string) => void;
}) {
  return (
    <input
      ref={refs[index]}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      required
      onChange={(e) => {
        const val = e.target.value.replace(/\D/, "");
        onChange(index, val);
        if (val && index < refs.length - 1) {
          refs[index + 1].current?.focus();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && !value && index > 0) {
          refs[index - 1].current?.focus();
        }
      }}
      className="h-10 font-mono text-sm font-bold text-center border rounded-md w-9 border-input bg-background focus:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
    />
  );
}

export default function DonacijePage() {
  const [form, setForm] = useState({
    ime: "",
    priimek: "",
    naslov: "",
    postaSt: "",
    posta: "",
    email: "",
    telefon: "",
  });
  const [davcnaDigits, setDavcnaDigits] = useState(Array(8).fill(""));
  const digitRefs = Array.from({ length: 8 }, () =>
    useRef<HTMLInputElement>(null)
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleDigit(index: number, val: string) {
    setDavcnaDigits((prev) => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <main className="flex flex-col items-center pb-16 sm:pt-4 md:px-12">
        <div className="flex flex-col w-full gap-10 p-6 pt-10 md:flex-row md:items-start">

          {/* ── LEFT: hero + upravičenec info ── */}
          <div className="flex flex-col gap-8 md:w-1/2 md:sticky md:top-24">
            <div className="flex flex-col gap-4">
              <h1 className="font-heading text-4xl font-extrabold text-[#43302b] md:text-5xl lg:text-6xl leading-tight">
                Nameni nam 1% svoje dohodnine
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                Ker smo registrirano prostovoljno društvo, smo upravičeni do 1 %
                dohodnine. Če tega zneska ne namenite nikomur, ga obdrži država.
                Z enim preprostim obrazcem pa ga lahko namenite nam — brez
                kakršnih koli stroškov za vas.
              </p>
            </div>

            {/* Podatki o upravičencu */}
            <div className="flex flex-col overflow-hidden border shadow-md rounded-2xl border-border bg-card">
              <div className="px-6 py-4 border-b bg-muted/40 border-border">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Podatki o upravičencu
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="col-span-1 sm:col-span-2">
                    <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Ime oz. naziv</p>
                    <p className="text-base font-semibold text-foreground">{ORG_NAME}</p>
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Naslov in pošta</p>
                    <p className="text-base font-semibold text-foreground">{ORG_ADDRESS}, {ORG_POSTAL} {ORG_CITY}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Davčna številka</p>
                    <ReadonlyDigitBoxes digits={ORG_DAVCNA} />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Odstotek</p>
                    <div className="flex items-center justify-center w-16 h-10 text-lg font-bold border rounded-md bg-primary/10 border-primary/20 text-primary">
                      1 %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: form card ── */}
          <div className="w-full md:w-1/2">
            <div className="p-6 border shadow-sm rounded-2xl border-border bg-card md:p-8">
              <h2 className="font-heading text-xl font-bold text-[#43302b] mb-1">
                Podatki o davčnem zavezancu
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Izpolni obrazec in mi bomo poskrbeli za vse ostalo.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="ime">Ime</Label>
                      <Input
                        id="ime"
                        name="ime"
                        placeholder="Janez"
                        value={form.ime}
                        onChange={handleChange}
                        required
                        className="h-10"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="priimek">Priimek</Label>
                      <Input
                        id="priimek"
                        name="priimek"
                        placeholder="Novak"
                        value={form.priimek}
                        onChange={handleChange}
                        required
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="naslov">Naselje, ulica, hišna številka</Label>
                    <Input
                      id="naslov"
                      name="naslov"
                      placeholder="Ulica 1, Ljubljana"
                      value={form.naslov}
                      onChange={handleChange}
                      required
                      className="h-10"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="postaSt">Poštna št.</Label>
                      <Input
                        id="postaSt"
                        name="postaSt"
                        placeholder="1000"
                        value={form.postaSt}
                        onChange={handleChange}
                        required
                        className="h-10"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="posta">Pošta</Label>
                      <Input
                        id="posta"
                        name="posta"
                        placeholder="Ljubljana"
                        value={form.posta}
                        onChange={handleChange}
                        required
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label>Davčna številka</Label>
                    <div className="flex gap-1">
                      {davcnaDigits.map((d, i) => (
                        <DigitInput
                          key={i}
                          index={i}
                          value={d}
                          refs={digitRefs}
                          onChange={handleDigit}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="pt-3 mb-3 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                      Kontaktni podatki
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="email">Elektronski naslov</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="janez@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="telefon">Telefonska številka</Label>
                        <Input
                          id="telefon"
                          name="telefon"
                          type="tel"
                          placeholder="+386 31 000 000"
                          value={form.telefon}
                          onChange={handleChange}
                          className="h-10"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 mt-2 text-base font-semibold"
                  >
                    Oddaj zahtevek
                  </Button>
                </form>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
