import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { AtSign } from "lucide-react";

export function AddToEmailList() {
  return (
    <div className="relative w-full max-w-[50rem] px-6 py-10 mx-auto transition-shadow duration-300 border-2 shadow-2xl rounded-3xl lg:px-12 lg:py-12 border-border bg-background hover:shadow-3xl">
      <div className="absolute flex items-center justify-center hidden w-20 h-20 bg-white border-2 rounded-full shadow-xl -top-8 -left-8 border-border md:flex">
        <Mail className="size-8 text-secondary-foreground" />
      </div>

      <div className="flex flex-col items-center w-full text-center">
        <h2 className="text-center font-heading text-3xl font-bold text-[#43302b] sm:text-4xl lg:text-5xl pb-4">
          Pridruži se naši email listi!
        </h2>

        <div className="flex items-center w-full max-w-xl gap-2 px-4 py-2 mx-auto bg-white border rounded-full shadow-md text-2xlg border-border">
          <AtSign className="size-5 shrink-0 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            autoComplete="off"
            placeholder="vpisite@vas-email.si"
            className="flex-1 h-auto p-0 bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:border-none text-foreground placeholder:text-muted-foreground"
          />
          <Button
            className="h-auto px-6 py-2 text-base font-medium rounded-full variant-primary hover:bg-primary/90 hover:text-primary-foreground transition-all hover:-translate-y-0.5 shadow-2xl"
            type="submit"
          >
            Prijavi se
          </Button>
        </div>
        <p className="mt-3 text-sm text-center text-muted-foreground">
          *Vpišite svoj mail in obveščeni boste o vsem dogajanju v rodu
        </p>
      </div>
    </div>
  );
}
