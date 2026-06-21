import { asset } from "@/lib/asset"
import { Reveal } from "@/components/motion/reveal"

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-secondary/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url(${asset("/brand/pattern-transp.png")})`, backgroundSize: "240px" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
        <Reveal>
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
