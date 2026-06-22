import Link from "next/link"
import Image from "next/image"
import { PROFESSIONAL } from "@/lib/site"
import { asset } from "@/lib/asset"

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/atendimento", label: "Atendimento" },
  { href: "/como-ajuda", label: "Como ajuda" },
  { href: "/para-quem", label: "Para quem" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/duvidas", label: "Dúvidas" },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `url(${asset("/brand/pattern-transp.png")})`, backgroundSize: "200px" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="max-w-sm">
            <Image
              src="/brand/logo-white.png"
              alt="Bárbara Lírio — Psicóloga Clínica"
              width={220}
              height={150}
              className="mx-auto h-auto w-40 object-contain md:mx-0"
            />
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
              Um espaço de acolhimento para o seu autoconhecimento e bem-estar emocional.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} {PROFESSIONAL.name} · {PROFESSIONAL.crp}. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-primary-foreground/70">Feito por Elite Company.</p>
        </div>
      </div>
    </footer>
  )
}
