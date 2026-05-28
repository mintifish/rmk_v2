"use client";

import * as React from "react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

// ─── Root ────────────────────────────────────────────────────────────────────

function AnimatedDropdown(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Root>,
) {
  return <DropdownMenuPrimitive.Root data-slot="animated-dropdown" {...props} />;
}

// ─── Trigger ─────────────────────────────────────────────────────────────────

function AnimatedDropdownTrigger(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>,
) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="animated-dropdown-trigger"
      {...props}
    />
  );
}

// ─── Content ─────────────────────────────────────────────────────────────────

function AnimatedDropdownContent({
  className,
  align = "start",
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="animated-dropdown-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(
          // layout
          "z-50 min-w-40 overflow-hidden rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl",
          // open: fade + scale + slide down from trigger
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          // close: reverse
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "duration-200",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────
// Pass `index` (0-based) to stagger the entrance animation per item.

function AnimatedDropdownItem({
  className,
  index = 0,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  index?: number;
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="animated-dropdown-item"
      className={cn(
        // base
        "relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none",
        // color transitions
        "transition-colors focus:bg-accent focus:text-accent-foreground",
        // disabled
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        // icons
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // staggered entrance — slides up + fades in
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-200",
        className,
      )}
      style={{
        animationDelay: `${index * 45}ms`,
        animationFillMode: "both",
      }}
      {...props}
    />
  );
}

// ─── Separator (optional) ─────────────────────────────────────────────────────

function AnimatedDropdownSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="animated-dropdown-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export {
  AnimatedDropdown,
  AnimatedDropdownTrigger,
  AnimatedDropdownContent,
  AnimatedDropdownItem,
  AnimatedDropdownSeparator,
};

