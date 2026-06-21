import Image from "next/image"
import { CtaButton } from "@/components/cta-button"
import { whatsappLink } from "@/lib/site"
import { Reveal } from "@/components/motion/reveal"

const tags = [
  "Análise do Comportamento",
  "ACT — Terapia de Aceitação e Compromisso",
  "FAP — Psicoterapia Analítica Funcional",
]

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
        <Reveal direction="right" className="relative order-2 lg:order-1">
          <div className="absolute -left-5 -top-5 hidden h-full w-full rounded-[2rem] border border-gold/30 lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10">
            <Image
              src="/images/barbara-sobre.jpg"
              alt="Retrato da psicóloga Bárbara Lírio"
              width={900}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 flex h-24 w-24 items-center justify-center rounded-full border border-gold/40 bg-card shadow-lg shadow-primary/10 md:h-28 md:w-28">
            <Image
              src="/brand/mark-rose.png"
              alt="Símbolo Bárbara Lírio"
              width={110}
              height={110}
              className="h-[70%] w-[70%] object-contain"
            />
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Sobre a Bárbara
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Olá, eu sou Bárbara Lírio
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Sou psicóloga clínica e realizo atendimentos psicológicos para
              adolescentes, adultos e casais, nas modalidades presencial no
              Tatuapé e online.
            </p>
            <p>
              Meu trabalho é baseado na Análise do Comportamento e em terapias
              contextuais, especialmente ACT, Terapia de Aceitação e
              Compromisso, e FAP, Psicoterapia Analítica Funcional.
            </p>
            <p>
              Na prática, isso significa que a terapia não é apenas um espaço
              para falar sobre problemas. É um processo construído em parceria,
              com escuta, acolhimento e ciência, para ajudar você a compreender
              seus padrões, lidar melhor com emoções difíceis e construir uma
              vida mais alinhada com aquilo que realmente importa.
            </p>
            <p>
              Acredito que cada pessoa chega à terapia com uma história única.
              Por isso, o processo terapêutico é individualizado, respeita o
              ritmo de cada paciente e não possui um número fixo de sessões.
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-primary/25 bg-secondary/60 px-4 py-1.5 text-xs text-primary"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CtaButton href={whatsappLink()} variant="primary">
              Quero falar com a Bárbara
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
