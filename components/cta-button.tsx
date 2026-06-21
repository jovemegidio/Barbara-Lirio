import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "outline" | "gold"

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#955d63] shadow-sm shadow-primary/20",
  outline:
    "border border-primary/40 text-primary bg-transparent hover:bg-secondary",
  gold: "gold-gradient text-gold-foreground hover:brightness-105 shadow-sm shadow-gold/30",
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  external = true,
  icon,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
  icon?: ReactNode
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      {icon}
      {children}
    </Link>
  )
}
