import React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 text-base text-foreground shadow-sm placeholder:text-foreground/50 hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-border focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}


