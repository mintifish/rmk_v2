import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function AddToEmailList() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mx-auto mt-20 text-center rounded-xl bg-primary px-6 py-8 w-full max-w-md border border-border shadow-lg">
      
      <h3 className="text-xl font-bold text-base text-white font-heading">
        Pridružite se naši email listi:
      </h3>

      {/* Changed max-w-2xl to w-96 (24rem / 384px) for a more controlled, wider look */}
      <Field className="max-w-96 w-full text-2xl">
        <Input
          id="email"
          autoComplete="off"
          placeholder="tian.hrovat@example.com"
          className="text-white placeholder:text-white/70 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background w-full"
        />
      </Field>
    </div>
  );
}