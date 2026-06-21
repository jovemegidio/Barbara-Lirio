import { Brain, HeartPulse, Compass, Leaf, MessagesSquare, ShieldCheck } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

const topics = [
  {
    icon: Brain,
    title: "Ansiedade e preocupação excessiva",
    text: "Compreender os gatilhos e desenvolver formas mais saudáveis de lidar com pensamentos e emoções difíceis.",
  },
  {
    icon: HeartPulse,
    title: "Autoestima e autocrítica",
    text: "Construir uma relação mais gentil consigo mesmo, reduzindo a cobrança e o sentimento de insuficiência.",
  },
  {
    icon: MessagesSquare,
    title: "Conflitos nos relacionamentos",
    text: "Melhorar a comunicação e os vínculos afetivos, familiares e amorosos com mais clareza e respeito.",
  },
  {
    icon: Compass,
    title: "Sensação de estar perdido",
    text: "Reencontrar direção e propósito, alinhando suas escolhas com aquilo que realmente importa para você.",
  },
  {
    icon: Leaf,
    title: "Esgotamento e sobrecarga",
    text: "Cuidar do cansaço emocional de quem sente que precisa dar conta de tudo o tempo todo.",
  },
  {
    icon: ShieldCheck,
    title: "Momentos de transição",
    text: "Apoio em mudanças, lutos, decisões importantes e novas fases da vida.",
  },
]

export function HowHelps({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="como-ajuda" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary">Como a terapia ajuda</p>
            <h2 className="mt-3 text-balance text-3xl text-foreground md:text-4xl">
              Um espaço para o que você sente
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A terapia pode te apoiar em diferentes momentos e questões. Veja alguns dos temas frequentemente
              trabalhados em consultório.
            </p>
          </Reveal>
        )}

        <Stagger
          staggerChildren={0.09}
          className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", hideHeader ? "" : "mt-14")}
        >
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <StaggerItem
                key={topic.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-foreground">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{topic.text}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
