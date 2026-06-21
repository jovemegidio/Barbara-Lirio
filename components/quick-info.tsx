import { Check } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { whatsappLink } from "@/lib/site"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

const focos = [
  "Psicoterapia individual",
  "Psicoterapia de casal",
  "Adolescentes",
  "Adultos",
]

const detalhes = [
  "Atendimento presencial no Tatuapé",
  "Atendimento online",
  "Sessões de 50 minutos",
  "Atendimento particular — não atendemos convênios",
]

export function QuickInfo() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Atendimento particular, presencial e online
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Bárbara Lírio dos Santos Freitas
          </h2>
          <p className="mt-2 text-muted-foreground">
            Psicóloga Clínica — CRP 06/230669
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          <StaggerItem className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-semibold text-primary">
              Atendimento voltado para
            </h3>
            <ul className="mt-5 space-y-3">
              {focos.map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-semibold text-primary">
              Como funciona
            </h3>
            <ul className="mt-5 space-y-3">
              {detalhes.map((d) => (
                <li key={d} className="flex items-center gap-3 text-foreground/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground" as="div">
          <p>
            A agenda é organizada com horário reservado para cada paciente,
            garantindo continuidade, cuidado e previsibilidade no processo
            terapêutico.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex justify-center" delay={0.1}>
          <CtaButton href={whatsappLink()} variant="gold">
            Ver disponibilidade de agenda
          </CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
