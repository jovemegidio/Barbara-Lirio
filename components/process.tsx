import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Primeiro contato",
    text: "Você envia uma mensagem pelo WhatsApp e conversamos sobre suas necessidades e horários disponíveis.",
  },
  {
    number: "02",
    title: "Agendamento",
    text: "Definimos juntos a modalidade (presencial ou online) e o melhor dia para iniciar o acompanhamento.",
  },
  {
    number: "03",
    title: "Sessão inicial",
    text: "Um encontro para nos conhecermos, entender sua história e construir os objetivos da terapia.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Seguimos o processo no seu ritmo, com encontros regulares e um espaço seguro para o seu crescimento.",
  },
]

export function Process({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="processo" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary">Como funciona</p>
            <h2 className="mt-3 text-balance text-3xl text-foreground md:text-4xl">
              Dar o primeiro passo é simples
            </h2>
          </Reveal>
        )}

        <Stagger
          as="ul"
          staggerChildren={0.14}
          className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-4", hideHeader ? "" : "mt-14")}
        >
          {steps.map((step) => (
            <StaggerItem as="li" key={step.number} className="group relative">
              <span className="absolute -left-2 -top-4 hidden h-px w-full bg-gradient-to-r from-gold/40 to-transparent lg:block" />
              <span className="font-serif text-5xl text-gold-gradient transition-transform duration-300 group-hover:-translate-y-1 inline-block">
                {step.number}
              </span>
              <h3 className="mt-3 text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
