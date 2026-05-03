import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue text-white shadow-button hover:bg-brand-blue-dark hover:-translate-y-0.5 active:scale-95",
  outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white active:scale-95",
  ghost: "text-brand-blue hover:bg-brand-blue-light active:scale-95",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs gap-1.5 rounded-full",
  md: "px-6 py-3 text-sm gap-2 rounded-full",
  lg: "px-8 py-4 text-base gap-2.5 rounded-full",
};

export function Button({ variant = "primary", size = "md", children, className, fullWidth, href, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
    variants[variant], sizes[size], fullWidth && "w-full", className
  );
  if (href) return <Link href={href} className={classes} target={props.target}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
