"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white hover:from-[#38BDF8] hover:to-[#6366f1] shadow-lg",
        outline: "bg-[#e0e7ff] text-[#4f46e5] border border-[#6366f1] shadow",
        subtle: "bg-[#e0e7ff] text-[#4f46e5] shadow",
        ghost: "bg-transparent text-[#6366f1] hover:bg-[#e0e7ff]",
      },
      size: {
        default: "px-5 py-2 text-base",
        sm: "px-3 py-1.5 text-sm",
        lg: "px-8 py-2 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={[buttonVariants({ variant, size }), className].filter(Boolean).join(" ")}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
