import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "neon" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "xl"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50",
          {
            // Default variant (solid purple)
            "bg-purple-600 text-white hover:bg-purple-700 shadow-lg": variant === "default",
            
            // Neon variant (your signature style!)
            "bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 neon-glow": variant === "neon",
            
            // Outline variant
            "border-2 border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500 hover:text-white": variant === "outline",
            
            // Ghost variant
            "text-purple-500 hover:bg-purple-500/20": variant === "ghost",
          },
          {
            // Sizes
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-9 px-3 text-xs": size === "sm",
            "h-11 px-6 py-3 text-base": size === "lg",
            "h-12 px-8 py-4 text-lg": size === "xl",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
