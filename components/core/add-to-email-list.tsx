import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function AddToEmailList() {
  return (
    <div className="flex flex-row flex-nowrap w-fit shadow-lg items-center justify-center gap-4 py-6 px-8 bg-primary rounded-t-2xl mx-auto">
      
      <h3 className="text-2xl font-medium text-white font-heading whitespace-nowrap">
        Pridružite se naši email listi:
      </h3>

      {/* Changed max-w-2xl to w-96 (24rem / 384px) for a more controlled, wider look */}
      <Field className="w-96 text-2xl">
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