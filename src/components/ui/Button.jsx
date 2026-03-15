import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded text-base font-normal transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:underline",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:underline",
        outline: "border border-primary text-primary bg-transparent shadow-sm hover:underline",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:underline",
        ghost: "bg-transparent text-foreground hover:underline",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-4",
        sm: "h-8 rounded px-4 py-2.5",
        lg: "h-12 rounded px-4 py-4",
        icon: "h-8 w-8 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}


