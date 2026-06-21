import { Users, User, HeartHandshake, Sparkles } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

const groups = [
  {
    icon: User,
    title: "Adultos",
    text: "Para quem busca lidar com ansiedade, autoconhecimento, relações e momentos de transição na vida.",
  },
  {
    icon: Sparkles,
    title: "Adolescentes",
    text: "Apoio no enfrentamento das pressões, mudanças e descobertas próprias dessa fase da vida.",
  },
  {
    icon: HeartHandshake,
    title: "Casais",
    text: "Espaço para reconstruir a comunicação, fortalecer vínculos e atravessar conflitos com cuidado.",
  },
  {
    icon: Users,
    title: "Quem nunca fez terapia",
    text: "Se você está começando agora, será acolhido sem julgamentos, no seu tempo e respeitando seu ritmo.",
  },
]

export function Audience({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="para-quem" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary">Para quem é</p>
            <h2 className="mt-3 text-balance text-3xl text-foreground md:text-4xl">
              A terapia é para todos os momentos
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Não é preciso esperar uma crise para buscar ajuda. Cuidar da saúde emocional é um ato de coragem e
              respeito consigo mesmo.
            </p>
          </Reveal>
        )}

        <Stagger
          staggerChildren={0.1}
          className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", hideHeader ? "" : "mt-14")}
        >
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <StaggerItem
                key={group.title}
                className="group rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-foreground">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.text}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
