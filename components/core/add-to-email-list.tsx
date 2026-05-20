"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, AtSign } from "lucide-react";

export function GmailAutocompleteInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const DOMAIN = "gmail.com";
  const atIndex = value.indexOf("@");

  let suggestion = "";

  if (!value || atIndex === -1) {
    suggestion = "";
  } else {
    const afterAt = value.slice(atIndex + 1);
    if (DOMAIN.startsWith(afterAt) && afterAt !== DOMAIN) {
      // typed a matching prefix of gmail.com — suggest the remainder
      suggestion = DOMAIN.slice(afterAt.length);
    }
  }

  const showSuggestion = !!suggestion;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      showSuggestion &&
      (e.key === "Tab" ||
        (e.key === "ArrowRight" &&
          inputRef.current?.selectionEnd === value.length))
    ) {
      e.preventDefault();
      setValue(value + suggestion);
    }
  };

  return (
    <div className="relative flex-1">
      {showSuggestion && (
        <span
          className="absolute inset-0 flex items-center overflow-hidden whitespace-pre font-[inherit] text-inherit z-10"
        >
          <span className="invisible">{value}</span>
          <span className="text-muted-foreground/50">{suggestion}</span>
        </span>
      )}
      <input
        {...props}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className="relative z-20 w-full p-0 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
      />
    </div>
// ...existing code...
  );
}

export function AddToEmailList() {
  return (
    <div className="relative w-full px-6 py-10 mx-auto transition-shadow duration-300 border-2 shadow-2xl max-w-200 rounded-3xl lg:px-12 lg:py-12 border-border bg-background hover:shadow-3xl">
      <div className="absolute items-center justify-center hidden w-20 h-20 bg-white border-2 rounded-full shadow-xl -top-8 -left-8 border-border md:flex">
        <Mail className="size-8 text-secondary-foreground" />
      </div>

      <div className="flex flex-col items-center w-full text-center">
        <h2 className="text-center font-heading text-3xl font-bold text-[#43302b] sm:text-4xl lg:text-5xl pb-4">
          Pridruži se naši email listi!
        </h2>

        <form className="flex items-center w-full max-w-xl gap-2 px-4 py-2 mx-auto border rounded-full shadow-md bg-card border-border">
          <AtSign className="size-5 shrink-0 text-muted-foreground" />
          <GmailAutocompleteInput
            id="email"
            type="email"
            placeholder="vpisite@vas-email.si"
          />
          {/* md and lg button inside input box */}
          <Button
            className="h-auto px-6 py-2 text-base hidden md:block font-medium rounded-full hover:bg-primary/90 hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            type="submit"
          >
            Prijavi se
          </Button>
        </form>
        <Button
          className="h-auto px-6 py-2 text-base block md:hidden font-medium rounded-full hover:bg-primary/90 hover:text-primary-foreground transition-all hover:-translate-y-0.5"
          type="submit"
        >
          Prijavi se
        </Button>
        <p className="mt-3 text-sm text-center text-muted-foreground">
          *Vpišite svoj mail in obveščeni boste o vsem dogajanju v rodu
        </p>
      </div>
    </div>
  );
}
