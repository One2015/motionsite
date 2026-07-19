import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Extra classes for the inner (filled) element */
  innerClassName?: string;
  /** Fill color of the inner surface — defaults to the page background */
  fill?: "background" | "white";
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * A pill-shaped button with an animated 2px gradient border.
 * On hover the gradient scrolls its background-position from 0% to 200%.
 * Reused across the navbar, product cards, hero and CTA sections.
 */
const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      className,
      innerClassName,
      fill = "background",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group/gradient relative rounded-full p-[2px] transition-all [transition-duration:0.8s]",
          "bg-gradient-to-r from-[#84a9fa] via-[#fb6fec] via-[#fba69e] via-[#fdd4a3] via-[#fb6fec] to-[#84a9fa]",
          "bg-[length:200%] [background-position:0%_50%]",
          "hover:[background-position:200%_50%]",
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "flex h-full w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-foreground",
            fill === "white" ? "bg-white" : "bg-background",
            innerClassName
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
