import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PixelFrameProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function PixelFrame({ 
  children, 
  className,
  glow = false 
}: PixelFrameProps) {
  return (
    <div
      className={cn(
        "pixel-frame",
        glow && "animate-glow",
        className
      )}
    >
      {children}
    </div>
  );
}