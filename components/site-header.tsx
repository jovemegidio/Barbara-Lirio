"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/atendimento", label: "Atendimento" },
  { href: "/como-ajuda", label: "Como ajuda" },
  { href: "/para-quem", label: "Para quem" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/duvidas", label: "Dúvidas" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const normalized = pathname?.replace(/\/$/, "") || "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-border/70 bg-background/90 shadow-sm shadow-primary/5"
          : "border-transparent bg-background/70",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <Link href="/" className="flex items-center gap-3 leading-none">
          <Image
            src="/brand/mark-rose.png"
            alt="Símbolo Bárbara Lírio"
            width={48}
            height={48}
            priority
            className={cn(
              "object-contain transition-all duration-300",
              scrolled ? "h-8 w-8" : "h-10 w-10",
            )}
          />
          <span className="flex flex-col">
            <span className="font-serif text-xl font-semibold text-primary">
              Bárbara Lírio
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Psicóloga · CRP 06/230669
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = normalized === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative text-sm transition-colors hover:text-primary",
                  active ? "text-primary" : "text-foreground/70",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <Link
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#955d63] lg:inline-flex"
        >
          WhatsApp
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-primary lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const active = normalized === l.href
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary hover:text-primary",
                      active ? "bg-secondary font-medium text-primary" : "text-foreground/80",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-2">
              <Link
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Conversar no WhatsApp
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
