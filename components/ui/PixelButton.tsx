import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function PixelButton({ 
  children, 
  className,
  variant = "primary",
  size = "md",
  ...props 
}: PixelButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const variantClasses = {
    primary: "bg-jade-600 hover:bg-jade-500",
    secondary: "bg-purple-600 hover:bg-purple-500",
  };

  return (
    <button
      className={cn(
        "relative font-pixel uppercase tracking-wider transition-all duration-200",
        "text-white shadow-pixel hover:shadow-pixel-hover",
        "hover:scale-105 active:scale-95",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}